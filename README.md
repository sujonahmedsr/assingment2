# 4 - Bi-Cycle store B4A2V4

A TypeScript-based Express application for managing a bicycle store. This project integrates MongoDB with Mongoose to handle products (bicycles) and orders efficiently. Features include CRUD operations, inventory management, and revenue calculation using MongoDB aggregation.

---

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

