# MERN Task Manager - Backend Server
This is the backend server of a MERN (MongoDB, Express, React, Node.js) task manager application. It features user authentication and authorization, as well as CRUD (Create, Read, Update, Delete) operations for managing tasks.

## Installation
Navigate to the root directory and run ```npm install```

Create a **.env** file in the root directory and add the following environment variables:

```makefile
MONGODB_URL
JWT_SECRET
PORT
FRONTEND_URL
```
Run ```npm start``` to start the server

## Usage
### User Authentication
This server handles user authentication and authorization for the MERN Task Manager app. It provides API endpoints for user registration and login, as well as JWT (JSON Web Token) authentication for accessing protected resources.

### Task API
This server also provides API endpoints for managing tasks. The API endpoints include:

- **GET** /api/tasks: Get all tasks for the authenticated user
- **POST** /api/tasks: Create a new task for the authenticated user
- **GET** /api/tasks/id: Get a single task by ID for the authenticated user
- **PUT** /api/tasks/id: Update a single task by ID for the authenticated user
- **DELETE** /api/tasks/id: Delete a single task by ID for the authenticated user

All API endpoints require JWT authentication, except for user registration and login.
