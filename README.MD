Client:
Execute the following within /client
> yarn run development
> yarn run development::tailwindcss

Google Cloud Platform
- SSL Certificate: https://console.cloud.google.com/security/ccm/lbCertificates/details/riosolved-ssl-certificate
- Global static IP address: https://console.cloud.google.com/networking/addresses
- Bucket: https://console.cloud.google.com/storage/browser
- Load balancer: https://console.cloud.google.com/net-services/loadbalancing/details/http/riosolved-url-map

---

Server:
Execute the following within /server
> cd ./server/source/server/server
> GOOGLE_APPLICATION_PASSWORD="..." RECAPTCHA_V3_SECRET="..." ENVIRONMENT="development" go run server.go