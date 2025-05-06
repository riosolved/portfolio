package handlers

import (
	"net/http"
	"strings"
)

func API(
	writer http.ResponseWriter,
	request *http.Request,
) {
	switch {
	case strings.HasPrefix(request.URL.Path, "/api/contact"):
		Contact(writer, request)
	case strings.HasPrefix(request.URL.Path, "/api/application"):
		Application(writer, request)
	default:
		http.NotFound(writer, request)
	}
}
