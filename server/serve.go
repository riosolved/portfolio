package main

import (
	"log"
	"net/http"
	"github.com/riosolved/portfolio/server/api/handlers"
)

func main() {
	http.HandleFunc("/", handlers.API)

	log.Println("Running on :8080...")

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}