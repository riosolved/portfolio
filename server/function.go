package main

import (
	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
	"github.com/riosolved/portfolio/server/api/handlers"
)

func init () {
	functions.HTTP("API", handlers.API)
}
