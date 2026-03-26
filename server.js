// ============================================
// NXLO CLOTHING BRAND - EXPRESS SERVER
// ============================================
// This is the back-end server that serves the website
// and provides an API for managing products.
// 
// To run: npm install && npm start
// The server will run on http://localhost:3000
// ============================================

// Import required packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware - These help the server process requests
app.use(cors()); // Allow requests from different origins
app.use(bodyParser.json()); // Parse JSON data from requests
app.use(express.static('public')); // Serve static files (HTML, CSS, JS, images)

// ============================================
// PRODUCT DATA MANAGEMENT
// ============================================
// The products are stored in products.json
// You can edit this file directly to change products, prices, and descriptions

// Helper function to read products from the JSON file
function getProducts() {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'products.json'), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading products:', error);
    return { products: [] };
  }
}

// Helper function to save products to the JSON file
function saveProducts(productsData) {
  try {
    fs.writeFileSync(
      path.join(__dirname, 'products.json'),
      JSON.stringify(productsData, null, 2),
      'utf8'
    );
    return true;
  } catch (error) {
    console.error('Error saving products:', error);
    return false;
  }
}

// ============================================
// API ROUTES - These are the endpoints the front-end uses
// ============================================

// GET /api/products - Retrieve all products
// Used by the front-end to display products in the shop
app.get('/api/products', (req, res) => {
  const productsData = getProducts();
  res.json(productsData.products);
});

// GET /api/products/:id - Retrieve a single product by ID
// Used when viewing product details
app.get('/api/products/:id', (req, res) => {
  const productsData = getProducts();
  const product = productsData.products.find(p => p.id === parseInt(req.params.id));
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// POST /api/products - Add a new product
// This requires admin authentication in a real app
// For now, it's open for easy testing and editing
app.post('/api/products', (req, res) => {
  const productsData = getProducts();
  
  // Create a new product object
  const newProduct = {
    id: Math.max(...productsData.products.map(p => p.id), 0) + 1,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category || 'tshirts',
    sizes: req.body.sizes || ['S', 'M', 'L', 'XL'],
    color: req.body.color || 'Black'
  };
  
  // Add the new product to the list
  productsData.products.push(newProduct);
  
  // Save to file
  if (saveProducts(productsData)) {
    res.status(201).json(newProduct);
  } else {
    res.status(500).json({ error: 'Failed to save product' });
  }
});

// PUT /api/products/:id - Update an existing product
// This allows you to edit product details like price, description, etc.
app.put('/api/products/:id', (req, res) => {
  const productsData = getProducts();
  const productIndex = productsData.products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (productIndex !== -1) {
    // Update the product with new data
    const updatedProduct = {
      ...productsData.products[productIndex],
      ...req.body,
      id: productsData.products[productIndex].id // Keep the same ID
    };
    
    productsData.products[productIndex] = updatedProduct;
    
    // Save to file
    if (saveProducts(productsData)) {
      res.json(updatedProduct);
    } else {
      res.status(500).json({ error: 'Failed to update product' });
    }
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// DELETE /api/products/:id - Delete a product
// This removes a product from the shop
app.delete('/api/products/:id', (req, res) => {
  const productsData = getProducts();
  const productIndex = productsData.products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (productIndex !== -1) {
    // Remove the product from the array
    const deletedProduct = productsData.products.splice(productIndex, 1);
    
    // Save to file
    if (saveProducts(productsData)) {
      res.json({ message: 'Product deleted', product: deletedProduct[0] });
    } else {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// ============================================
// SERVE THE FRONT-END
// ============================================

// Serve the main HTML file for all other routes
// This allows the front-end to handle routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ============================================
// START THE SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║   🚀 NXLO CLOTHING BRAND - SERVER 🚀   ║
  ╚════════════════════════════════════════╝
  
  Server is running at: http://localhost:${PORT}
  
  📦 API Endpoints:
  - GET  /api/products          (Get all products)
  - GET  /api/products/:id      (Get a specific product)
  - POST /api/products          (Add a new product)
  - PUT  /api/products/:id      (Update a product)
  - DELETE /api/products/:id    (Delete a product)
  
  💡 To edit products:
  1. Edit the products.json file directly, OR
  2. Use the API endpoints above
  
  🌐 Open http://localhost:${PORT} in your browser
  `);
});
