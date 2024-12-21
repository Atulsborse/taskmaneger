Task Manager API
Welcome to the Task Manager API! 🚀

This is a simple backend application built with Node.js, Express, MongoDB, and JWT Authentication. The API allows you to manage user accounts and tasks securely. You can register, log in, and manage tasks, all protected with JWT authentication.

Features
User Authentication: Register new users, log in, and get a JWT token to access protected routes.
Task Management: Create, read, update, and delete tasks. Each task is tied to a specific user.
API Docs: Interactive API documentation provided by Swagger to make it easier for you to explore and test endpoints.
Tech Stack
Here’s what powers the app:

Node.js – For the backend server and API logic.
Express.js – The framework to help with routing and middleware.
MongoDB – The database for storing users and tasks.
Mongoose – A tool to interact with MongoDB and define schemas for our models.
JWT – For secure authentication and authorization.
Swagger – To document and test the API easily.
Setting Up the Project
Let’s get your project up and running. Here’s a quick guide to help you set up the Task Manager API on your local machine.

Prerequisites
Before you start, make sure you have the following installed:

Node.js: If you don’t have it, grab it from Node.js.
MongoDB: Set up a MongoDB account at MongoDB Atlas or run MongoDB locally.
Postman (optional but helpful): To test API endpoints easily.
Installation Steps
Clone the repo

First, clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
Install the dependencies

Next, install all the required packages:

bash
Copy code
npm install
Set up your environment variables

Create a .env file in the root of your project and add the following  also create a src folder and put all file on it ecxept .env and gitignore and pakagelock and package.json:

env
Copy code
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key
Replace your_mongo_db_connection_string with the connection string from MongoDB Atlas or your local MongoDB setup. Also, replace your_jwt_secret_key with a strong secret key for JWT.

Run the app

Now, you’re ready to run the app! Use the following command to start the server:

bash
Copy code
npm run dev
Your API will be running on http://localhost:3000.
API Documentation
Once the app is up and running, you can interact with it via the following API endpoints.

Auth Routes
POST /auth/register
Description: Register a new user.
Request body:
json
Copy code
{
  "email": "user@example.com",
  "password": "yourpassword"
}
Response:
201: User registered successfully.
400: User already exists.
POST /auth/login
Description: Log in and get a JWT token.
Request body:
json
Copy code
{
  "email": "user@example.com",
  "password": "yourpassword"
}
Response:
200: Returns the JWT token.
401: Invalid credentials.
Task Routes (Protected)
You need to be logged in and provide a valid JWT token in the Authorization header as Bearer <JWT_TOKEN> for the following routes.

GET /tasks
Description: Get all tasks associated with the logged-in user.
Response:
200: A list of tasks.
500: Internal server error.
POST /tasks
Description: Create a new task.
Request body:
json
Copy code
{
  "title": "Task title",
  "description": "Task description",
  "status": "pending"
}
Response:
201: Task created successfully.
400: Invalid input.
500: Internal server error.
GET /tasks/:id
Description: Get a specific task by its ID.
Response:
200: Task details.
404: Task not found.
500: Internal server error.
PUT /tasks/:id
Description: Update a task by its ID.
Request body:
json
Copy code
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "in-progress"
}
Response:
200: Task updated successfully.
404: Task not found.
500: Internal server error.
DELETE /tasks/:id
Description: Delete a task by its ID.
Response:
200: Task deleted successfully.
404: Task not found.
500: Internal server error.
Testing the API
You can test all of the above API endpoints using Postman or Swagger UI.

Option 1: Use Postman
Open Postman and create requests based on the API documentation above.
Don’t forget to include the Authorization header with your JWT token for protected routes.
Option 2: Use Swagger UI
Once the server is running, open Swagger UI at: http://localhost:5000 or 3000/api-docs.
Here, you can try out each endpoint directly in your browser.

