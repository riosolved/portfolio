package utilities

import (
	"os"
	"log"
	"net/smtp"
	"fmt"
)

func Mail(
	subject string,
	body string,
) error {
	email := "riosolved@gmail.com"

	GOOGLE_APPLICATION_PASSWORD := os.Getenv("GOOGLE_APPLICATION_PASSWORD")

	smtp_host := "smtp.gmail.com"
	smtp_port := "587"

	message := []byte(fmt.Sprintf("Subject: %s\n\n%s", subject, body))

	authentication := smtp.PlainAuth(
		"",
		email,
		GOOGLE_APPLICATION_PASSWORD,
		smtp_host,
	)

	err := smtp.SendMail(
		smtp_host + ":" + smtp_port,
		authentication,
		email,
		[]string{email},
		message,
	)

	if err != nil {
		log.Println("Failed to send email:", err)

		return err
	}

	return nil
}