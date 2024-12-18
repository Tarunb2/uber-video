# `/users/register` Endpoint Documentation

## Description
The `/users/register` endpoint allows new users to create an account by providing their personal details, email, and password. The endpoint validates the input data, hashes the password for security, and returns a token upon successful registration.

---

## Request

### Method
`POST`

### URL
`/users/register`

### Headers
- `Content-Type: application/json`

### Request Body
The request body should be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min length: 3)",
    "lastname": "string (optional, min length: 3)"
  },
  "email": "string (valid email format, unique)",
  "password": "string (min length: 6)"
}
```

### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

---

## Response

### Successful Response
- **Status Code:** `201 Created`
- **Body:**

```json
{
  "token": "string (JWT token)",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

### Example Successful Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "user": {
    "_id": "64a6f76b8c1d5e001f3c1e3b",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Error Responses

#### Validation Errors
- **Status Code:** `400 Bad Request`
- **Body:**

```json
{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (field name)",
      "location": "string (body)"
    }
  ]
}
```

#### Example Validation Error
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---

## Validation Rules
- `email`: Must be a valid email format.
- `fullname.firstname`: Minimum 3 characters.
- `password`: Minimum 6 characters.

---

## Notes
- Passwords are hashed before being stored in the database.
- The `lastname` field in `fullname` is optional.
- On successful registration, a JWT token is generated for authentication.

---
