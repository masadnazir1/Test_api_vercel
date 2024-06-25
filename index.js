// index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use port from environment variable or 3000 by default

// Sample product data array
const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 5.99 },
];

// Define a route to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
