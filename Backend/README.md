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

### Example Response from Endpoint
When a user registers successfully, the following is an example response:

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

---

# `/users/login` Endpoint Documentation

## Description
The `/users/login` endpoint allows existing users to log in by providing their email and password. Upon successful authentication, a JWT token is returned along with user details.

---

## Request

### Method
`POST`

### URL
`/users/login`

### Headers
- `Content-Type: application/json`

### Request Body
The request body should be a JSON object with the following structure:

```json
{
  "email": "string (valid email format)",
  "password": "string (min length: 6)"
}
```

### Example Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

---

## Response

### Successful Response
- **Status Code:** `200 OK`
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

#### Authentication Errors
- **Status Code:** `401 Unauthorized`
- **Body:**

```json
{
  "message": "Invalid email or password"
}
```

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

### Example Validation Error
```json
{
  "errors": [
    {
      "msg": "Email is required",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

# `/users/profile` Endpoint Documentation

## Description
The `/users/profile` endpoint retrieves the profile of the currently authenticated user.

---

## Request

### Method
`GET`

### URL
`/users/profile`

### Headers
- `Authorization: Bearer <JWT token>`

---

## Response

### Successful Response
- **Status Code:** `200 OK`
- **Body:**

```json
{
  "_id": "string",
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string"
}
```

### Example Successful Response
```json
{
  "_id": "64a6f76b8c1d5e001f3c1e3b",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### Error Responses

#### Authentication Errors
- **Status Code:** `401 Unauthorized`
- **Body:**

```json
{
  "message": "Unauthorized access"
}
```

---

# `/users/logout` Endpoint Documentation

## Description
The `/users/logout` endpoint logs out the currently authenticated user by invalidating their JWT token.

---

## Request

### Method
`GET`

### URL
`/users/logout`

### Headers
- `Authorization: Bearer <JWT token>`
- `Cookie: token=<JWT token>` (if using cookies)

---

## Response

### Successful Response
- **Status Code:** `200 OK`
- **Body:**

```json
{
  "message": "Logged out"
}
```

### Example Successful Response
```json
{
  "message": "Logged out"
}
```

### Error Responses

#### Authentication Errors
- **Status Code:** `401 Unauthorized`
- **Body:**

```json
{
  "message": "Unauthorized access"
}
```

---
