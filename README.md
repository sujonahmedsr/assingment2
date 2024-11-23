# 4 - Bi-Cycle store B4A2V4

A TypeScript-based Express application for managing a bicycle store. This project integrates MongoDB with Mongoose to handle products (bicycles) and orders efficiently. Features include CRUD operations, inventory management, and revenue calculation using MongoDB aggregation.

---


## Api link : https://bi-cycle-store-alpha.vercel.app/

### Products 1. Create a Bicycle
Endpoint: /api/products
Method: POST
Request Body:
{
  "name": "Roadster 5000",
  "brand": "SpeedX",
  "price": 300,
  "type": "Road",
  "description": "A premium road bike designed for speed and performance.",
  "quantity": 20,
  "inStock": true
}

### Products 2. Get All Bicycles
Endpoint: /api/products
Method: GET

### Products 3. Get a Specific Bicycle
Endpoint: /api/products/:productId
Method: GET

### Products 4. Update a Bicycle
Endpoint: /api/products/:productId
Method: PUT
Request Body: (Bicycle details to update)
{
  "price": 350,
  "quantity": 15
}

### Products 5. Delete a Bicycle
Endpoint: /api/products/:productId
Method: DELETE

### Products 6. Order a Bicycle
Endpoint: /api/orders
Method: POST
Request Body:
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 600
}

### Products 7. Calculate Revenue from Orders (Aggregation)
Endpoint: /api/orders/revenue
Method: GET

## Features

### Products
- **Create a Bicycle:** Add a new bicycle with all relevant details.
- **Retrieve All Bicycles:** Fetch a list of all bicycles with optional filtering by name, brand, or type.
- **Retrieve a Specific Bicycle:** Get details of a bicycle by its ID.
- **Update a Bicycle:** Modify details like price or quantity of an existing bicycle.
- **Delete a Bicycle:** Remove a bicycle from the inventory.

### Orders
- **Place an Order:** Customers can order bicycles. The inventory is updated automatically.
- **Inventory Management:** Automatically reduces stock when an order is placed. Marks bicycles as out of stock when quantity reaches zero.
- **Handle Insufficient Stock:** Prevents orders exceeding available stock with appropriate error messages.

### Revenue
- **Calculate Revenue:** Use aggregation to calculate the total revenue generated from all orders.

### Error Handling
- Generic error response structure for validation errors, resource not found, and server issues.

