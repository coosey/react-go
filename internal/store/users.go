package store

import (
	"crypto/rand"
	"time"

	"golang.org/x/crypto/bcrypt"
)

// Password validation => no pw column, but required
// Salt + Password => HashedPassword
// json:"-" => will not be sent to FE in JSON resp
type User struct {
	ID             int
	Username       string `binding:"required,min=5,max=30"`
	Password       string `pg:"-" binding:"required,min=7,max=32"`
	HashedPassword []byte `json:"-"`
	Salt           []byte `json:"-"`
	CreatedAt      time.Time
	ModifiedAt     time.Time
}

var Users []*User

func GenerateSalt() ([]byte, error) {
	salt := make([]byte, 16)
	if _, err := rand.Read(salt); err != nil {
		return nil, err
	}
	return salt, nil
}

// nil is a predeclared identifier representing the zero value for a pointer, channel, func, interface, map, or slice type.
func AddUser(user *User) error {
	salt, err := GenerateSalt()
	if err != nil {
		return err
	}
	toHash := append([]byte(user.Password), salt...)
	hashedPassword, err := bcrypt.GenerateFromPassword(toHash, bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	user.Salt = salt
	user.HashedPassword = hashedPassword

	_, err = db.Model(user).Returning("*").Insert()
	if err != nil {
		return err
	}
	return err
}

func Authenticate(username, password string) (*User, error) {
	user := new(User)
	query := db.Model(user).Where("username = ?", username).Select()
	if err := query; err != nil {
		return nil, err
	}
	salted := append([]byte(password), user.Salt...)
	if err := bcrypt.CompareHashAndPassword(user.HashedPassword, salted); err != nil {
		return nil, err
	}
	return user, nil
}
