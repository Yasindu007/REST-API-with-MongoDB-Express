# REST-API-with-MongoDB-Express
A beginner-friendly REST API using Node.js, Express, and MongoDB that supports user registration/login and full CRUD operations for a product model (name, price, quantity).

# product-crud-api

A simple RESTful API built with Node.js, Express, and MongoDB for managing products with user registration and login functionality.

---

## Features

- User registration and login (no authentication)
- CRUD operations for Products (name, price, quantity)
- MongoDB for data storage via Mongoose
- Express.js for API routing
- Body parsing using `express.json()`

---

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally or MongoDB Atlas URI
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-crud-api.git
   cd product-crud-api
2.Install dependencies:

    npm install
   
3.Create a .env file in the root folder and add:
  
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/rest-api

  
4.Start the server:

  npx nodemon server.js

  
API Endpoints
  User Routes
  Method	Endpoint	Description
  POST	/api/users/register	Register a new user
  POST	/api/users/login	Login a user

Product Routes
Method	Endpoint	Description
  POST	/api/products	Create a new product
  GET	/api/products	Get all products
  GET	/api/products/:id	Get a product by ID
  PUT	/api/products/:id	Update a product by ID
  DELETE	/api/products/:id	Delete a product by ID

Testing
Use Postman or any API client to test the endpoints. Make sure to send JSON in request bodies for POST and PUT requests.

License
This project is licensed under the MIT License.

Author
Malith De Silva - malithdesilva7@gmail.com
