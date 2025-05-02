Client:
Execute the following within /client
> yarn run development
> yarn run development::tailwindcss

Server:
Execute the following within /server
> GOOGLE_APPLICATION_PASSWORD="..." RECAPTCHA_V3_SECRET="..." ENVIRONMENT="development" go run main.go