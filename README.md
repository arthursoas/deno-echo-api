# Deno Echo Api
A experimental code using Deno. Implements a REST API that responds with the same content you sent.


## Installation
```bash
git clone https://github.com/arthursoas/deno-echo-api.git
cd deno-echo-api

deno run --allow-env --allow-net app.ts
```

## Usage
Send a HTTP request to `http:\\127.0.0.1\{expected-response-status}` using any HTTP method.

Example:
```http
POST http://127.0.0.1/201 HTTP/1.1
Content-Type: application/json

{
  "some_field": "some_value",
  "another_field": "another_value"
}
```

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "some_field": "some_value",
  "another_field": "another_value"
} 
```
