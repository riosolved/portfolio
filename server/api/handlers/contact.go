package handlers

import (
	"os"
	"log"
	"net/http"
	"encoding/json"
	"riosolved/server/api/utilities"
	"fmt"
)

type CONTACT_PAYLOAD struct {
	NAME string `json:"name"`
	EMAIL string `json:"Email"`
	MESSAGE string `json:"Message"`
	CONTEXT string `json:"Context"`
	GOOGLE_RECAPTCHA_TOKEN string `json:"google_recaptcha_token"`
}

func Contact(
	writer http.ResponseWriter,
	request *http.Request,
) {
	utilities.CORS(writer, request)

	if request.Method == http.MethodOptions {
		writer.WriteHeader(http.StatusNoContent)

		return
	}

	if request.Method != http.MethodPost {
		writer.WriteHeader(http.StatusMethodNotAllowed)
		json.NewEncoder(writer).Encode(map[string]string{ "message": "Invalid request method." })

		return
	}

	writer.Header().Set("Content-Type", "application/json")

	var payload CONTACT_PAYLOAD

	if err := json.NewDecoder(request.Body).Decode(&payload); err != nil {
		writer.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(writer).Encode(map[string]string{ "message": "Payload is invalid." })

		return
	}

	// NOTE : SOURCE RECAPTCHA SECRET
	RECAPTCHA_V3_SECRET := os.Getenv("RECAPTCHA_V3_SECRET")

	if RECAPTCHA_V3_SECRET == "" {
		writer.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(writer).Encode(map[string]string{ "message": "Experiencing issues with reCAPTCHA." })

		log.Fatal("RECAPTCHA_V3_SECRET environment variable not set.")

		return
	}

	// NOTE : VALIDATE CLIENT RECAPTCHA TOKEN
	result, err := utilities.VerifyRecaptcha(payload.GOOGLE_RECAPTCHA_TOKEN, RECAPTCHA_V3_SECRET)

	if err != nil {
		writer.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(writer).Encode(map[string]string{ "message": "Failed to verify reCAPTCHA." })

		log.Println("Error verifying reCAPTCHA:", err)

		return
	}

	if !result.SUCCESS || result.SCORE < 0.5 {
		writer.WriteHeader(http.StatusForbidden)
		json.NewEncoder(writer).Encode(map[string]string{ "message": "The reCAPTCHA verification failed." })

		return
	}

	// NOTE : RECAPTCHA VERIFIED
	 subject := fmt.Sprintf(
		"[RIOSOLVED][%s] %s",
		payload.CONTEXT,
		payload.NAME,
	)

	body := fmt.Sprintf(
		"%s\n\n%s - %s",
		payload.MESSAGE,
		payload.NAME,
		payload.EMAIL,
	)

	if err := utilities.Mail(subject, body); err != nil {
		writer.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(writer).Encode(map[string]string{ "message": "Unable to send message, please reach out to \"riosolved@gmail.com\" directly." })

		return
	}

	writer.WriteHeader(http.StatusOK)
	json.NewEncoder(writer).Encode(map[string]string{ "message": "Message sent!" })
}
