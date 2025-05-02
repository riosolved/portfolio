package utilities

import (
	"net/http"
	"os"
)

func CORS(
	writer http.ResponseWriter,
	request *http.Request,
){
	var allowed string

	environment := os.Getenv("ENVIRONMENT");

	if environment == "production" {
		allowed = "https://riosolved.com"
	} else if environment == "development" {
		allowed = "http://localhost:3000"
	}

	writer.Header().Set("Access-Control-Allow-Origin", allowed)
	writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIOJNS")
	writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}
