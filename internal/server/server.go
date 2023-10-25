package server

import (
	"react-go/internal/database"
	"react-go/internal/store"
)

func Start() {
	store.SetDBConnection(database.NewDBOptions())

	router := setRouter()

	// Start listening and serving requests
	router.Run(":8080")
}
