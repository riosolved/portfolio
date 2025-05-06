package main

import (
	"log"
	"net/http"
	"riosolved.com/api/handlers"
)

func main() {
	http.HandleFunc("/", handlers.API)

	log.Println("Running on :8080...")

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}