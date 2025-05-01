package handlers

import (
	"net/http"
	"encoding/json"
)

type Application_Response_Payload struct {
	Message string `json:"message"`
}

func Application(
	writer http.ResponseWriter,
	request *http.Request,
) {
	// TODO : IMPLEMENT CORS MIDDLEWARE

	if request.Method != http.MethodGet {
		http.Error(writer, "Invalid request method", http.StatusMethodNotAllowed)

		return
	}

	response := Application_Response_Payload{
		Message: "HELLO WORLD",
	}

	writer.Header().Set("Content-Type", "application/json")

	writer.WriteHeader(http.StatusOK)

	json.NewEncoder(writer).Encode(response)
}
