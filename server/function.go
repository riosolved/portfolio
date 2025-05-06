package main

import (
	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
	"github.com/riosolved/portfolio/tree/main/server/handlers"
)

func init () {
	functions.HTTP("API", handlers.API)
}
