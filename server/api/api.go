package api

import (
	"net/http"
	"strings"
	"riosolved/server/api/handlers"
)

func Initialize(
	writer http.ResponseWriter,
	request *http.Request,
) {
	switch {
	case strings.HasPrefix(request.URL.Path, "/api/contact"):
		handlers.Contact(writer, request)
	case strings.HasPrefix(request.URL.Path, "/api/application"):
		handlers.Application(writer, request)
	default:
		http.NotFound(writer, request)
	}
}
