package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func setRouter() *gin.Engine {
	// create default gin router with Logger & Recovery middleware
	router := gin.Default()

	// Enables auto redirect if current route not matched but handler w/ (w/o) trailing slash exists
	router.RedirectTrailingSlash = true

	// create API route group
	api := router.Group("/api")
	{
		api.POST("/signup", signUp)
		api.POST("/signin", signIn)
	}

	router.NoRoute(func(ctx *gin.Context) {
		ctx.JSON(http.StatusNotFound, gin.H{})
	})

	// start listening & serving requests
	router.Run(":8080")

	return router
}
