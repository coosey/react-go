package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// create default gin router with Logger & Recovery middleware
	router := gin.Default()

	// create API route group
	api := router.Group("/api")
	{
		// add /hello GET route to router & define route handler function
		api.GET("/hello", func(ctx *gin.Context) {
			ctx.JSON(200, gin.H{"msg": "world"})
		})
	}

	router.NoRoute(func(ctx *gin.Context) {
		ctx.JSON(http.StatusNotFound, gin.H{})
	})

	// start listening & serving requests
	router.Run(":8080")
}
