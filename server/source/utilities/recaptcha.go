package utilities

import (
	"log"
	"io/ioutil"
	"encoding/json"
	"net/http"
	"net/url"
)

type GOOGLE_RECAPTCHA_RESPONSE struct {
	SUCCESS bool `json:"success"`
	CHALLENGE_TS string `json:"challenge_ts"`
	HOSTNAME string `json:"hostname"`
	SCORE float64 `json:"score"`
	ACTION string `json:"action"`
}

func VerifyRecaptcha(token string, secret string) (*GOOGLE_RECAPTCHA_RESPONSE, error) {
	response, err := http.PostForm(
		"https://www.google.com/recaptcha/api/siteverify",
		url.Values {
			"secret": {secret},
			"response": {token},
		},
	)

	if err != nil {
		return nil, err
	}

	defer response.Body.Close()

	body, err := ioutil.ReadAll(response.Body)

	if err != nil {
		return nil, err
	}

	log.Println("VerifyRecaptcha::response", string(body))

	var result GOOGLE_RECAPTCHA_RESPONSE

	if err = json.Unmarshal(body, &result); err != nil {
		return nil, err
	}

	return &result, nil;
}
