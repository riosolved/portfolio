package main

import (
	"log"
	"net/http"
	"riosolved/server/api"
)

func main() {
	http.HandleFunc("/", api.Initialize)

	log.Println("Running on :8080...")

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}