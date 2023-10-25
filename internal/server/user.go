package server

import (
	"net/http"

	"react-go/internal/store"

	"github.com/gin-gonic/gin"
)

func signUp(ctx *gin.Context) {
	// create new var type User
	user := new(store.User)
	// call Bind() to bind form data with User type
	// if binding fails, set error code & message, and return from function
	if err := ctx.Bind(user); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := store.AddUser(user); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// if no errors, set response code OK and return JWT for authentication
	ctx.JSON(http.StatusOK, gin.H{
		"msg": "Signed up successful.",
		"jwt": "123456789",
	})
}

func signIn(ctx *gin.Context) {
	user := new(store.User)
	if err := ctx.Bind(user); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user, err := store.Authenticate(user.Username, user.Password)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Sign in failed."})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{
		"msg": "Signed in successful.",
		"jwt": "1234567890",
	})
}
