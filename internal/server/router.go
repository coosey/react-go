package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func setRouter() *gin.Engine {
	// create default gin router with Logger & Recovery middleware
	router := gin.Default()

	// create API route group
	api := router.Group("/api")
	{
		// add /hello GET route to router & define route handler function
		api.GET("/hello", func(ctx *gin.Context) {
			ctx.JSON(200, gin.H{"status": "OK"})
		})
	}

	router.NoRoute(func(ctx *gin.Context) {
		ctx.JSON(http.StatusNotFound, gin.H{})
	})

	// start listening & serving requests
	router.Run(":8080")

	return router
}
