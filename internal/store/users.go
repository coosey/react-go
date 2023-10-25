package store

import "errors"

type User struct {
	ID       int
	Username string `binding:"required,min=5,max=30"`
	Password string `binding:"required,min=5,max=32"`
}

var Users []*User

// nil is a predeclared identifier representing the zero value for a pointer, channel, func, interface, map, or slice type.
func AddUser(user *User) error {
	_, err := db.Model(user).Returning("*").Insert()
	if err != nil {
		return err
	}
	return nil
}

func Authenticate(username, password string) (*User, error) {
	user := new(User)
	query := db.Model(user).Where("username = ?", username).Select()
	if err := query; err != nil {
		return nil, err
	}
	if password != user.Password {
		return nil, errors.New("Invalid password.")
	}
	return user, nil
}
