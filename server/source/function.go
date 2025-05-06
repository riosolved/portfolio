package function

import (
	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
	"riosolved.com/api/handlers"
)

func init() {
	functions.HTTP("API", handlers.API)
}
