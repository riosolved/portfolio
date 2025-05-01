package handlers

import (
	"fmt"
	"net/http"
)

func Contact(
	writer http.ResponseWriter,
	request *http.Request,
) {
	// TODO : IMPLEMENT CORS MIDDLEWARE

	if request.Method == http.MethodPost {
		fmt.Fprintf(writer, "Contact form submitted!")
	} else {
		http.Error(writer, "Invalid request method", http.StatusMethodNotAllowed)
	}
}
