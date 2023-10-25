package store

import (
	"log"

	"github.com/go-pg/pg/v10"
)

// Database connector for store package
var db *pg.DB

// This will be used immediately to set DB connector
func SetDBConnection(dbOpts *pg.Options) {
	if dbOpts == nil {
		log.Panicln("DB options can't be nil")
	} else {
		db = pg.Connect((dbOpts))
	}
}

func GetDBConnection() *pg.DB { return db }
