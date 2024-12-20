# API Documentation

## `/users/register`
### Description
Create a new user account.

### Request
- **Method:** `POST`
- **URL:** `/users/register`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "fullname": {
      "firstname": "string (min 3 chars)",
      "lastname": "string (optional, min 3 chars)"
    },
    "email": "string (valid email)",
    "password": "string (min 6 chars)"
  }
  ```

### Response
- **Success (201):**
  ```json
  {
    "token": "string (JWT)",
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
- **Error (400):** Validation errors.

---

## `/users/login`
### Description
Authenticate an existing user.

### Request
- **Method:** `POST`
- **URL:** `/users/login`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "string (valid email)",
    "password": "string (min 6 chars)"
  }
  ```

### Response
- **Success (200):**
  ```json
  {
    "token": "string (JWT)",
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
- **Error (401):** Invalid email or password.

---

## `/users/profile`
### Description
Retrieve the authenticated user's profile.

### Request
- **Method:** `GET`
- **URL:** `/users/profile`
- **Headers:** `Authorization: Bearer <JWT>`

### Response
- **Success (200):**
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
- **Error (401):** Unauthorized access.

---

## `/users/logout`
### Description
Log out the authenticated user.

### Request
- **Method:** `GET`
- **URL:** `/users/logout`
- **Headers:** `Authorization: Bearer <JWT>`

### Response
- **Success (200):**
  ```json
  {
    "message": "Logged out"
  }
  ```
- **Error (401):** Unauthorized access.

---

## `/captains/register`
### Description
Create a new captain account.

### Request
- **Method:** `POST`
- **URL:** `/captains/register`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "fullname": {
      "firstname": "string (min 3 chars)",
      "lastname": "string (min 3 chars)"
    },
    "email": "string (valid email)",
    "password": "string (min 6 chars)",
    "vehicle": {
      "color": "string (min 3 chars)",
      "plate": "string (min 3 chars)",
      "capacity": "integer (min 1)",
      "vehicleType": "string (car, motorcycle, bicycle)"
    }
  }
  ```

### Response
- **Success (201):**
  ```json
  {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "integer",
      "vehicleType": "string"
    }
  }
  ```
- **Error (400):** Validation errors.

---

## `/captains/login`
### Description
Authenticate an existing captain.

### Request
- **Method:** `POST`
- **URL:** `/captains/login`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "string (valid email)",
    "password": "string (min 6 chars)"
  }
  ```

### Response
- **Success (200):**
  ```json
  {
    "token": "string (JWT)",
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "integer",
        "vehicleType": "string"
      }
    }
  }
  ```
- **Error (401):** Invalid email or password.

---

## `/captains/profile`
### Description
Retrieve the authenticated captain's profile.

### Request
- **Method:** `GET`
- **URL:** `/captains/profile`
- **Headers:** `Authorization: Bearer <JWT>`

### Response
- **Success (200):**
  ```json
  {
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "integer",
        "vehicleType": "string"
      }
    }
  }
  ```
- **Error (401):** Unauthorized access.

---

## `/captains/logout`
### Description
Log out the authenticated captain.

### Request
- **Method:** `GET`
- **URL:** `/captains/logout`
- **Headers:** `Authorization: Bearer <JWT>`

### Response
- **Success (200):**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```
- **Error (401):** Unauthorized access.

