const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Dummy data (replace this with your actual data storage mechanism)
let data = [];
const MAX_CAPACITY = 10; // Set your desired maximum capacity

// Array to store operations for undo
let undoOperations = [];

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Token missing' });
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    // Attach the user information to the request object
    req.user = decoded.user;
    next();
  });
}

// Middleware to check max capacity
function checkMaxCapacity(req, res, next) {
  if (data.length >= MAX_CAPACITY) {
    return res.status(403).json({ message: 'Forbidden: Max capacity reached' });
  }
  next();
}

// Middleware to track operations
function trackOperation(req, res, next) {
  undoOperations.push({ type: 'add', data: { user: req.user, timestamp: new Date() } });
  next();
}

// Apply the middlewares to routes
app.post('/api/resource', verifyToken, checkMaxCapacity, trackOperation, (req, res) => {
  // Your logic here to add data to the storage
  data.push({ user: req.user, timestamp: new Date() });

  res.json({ message: 'Resource created successfully!' });
});

// Undo endpoint
app.post('/api/undo', verifyToken, (req, res) => {
  // Check if there are operations to undo
  if (undoOperations.length === 0) {
    return res.status(400).json({ message: 'Bad Request: No operations to undo' });
  }

  // Pop the last operation from the undoOperations array
  const lastOperation = undoOperations.pop();

  // Undo the operation based on its type
  if (lastOperation.type === 'add') {
    // Your logic here to remove the last added data
    data.pop();
    res.json({ message: 'Undo successful: Last operation undone' });
  } else {
    res.status(500).json({ message: 'Internal Server Error: Unsupported operation type' });
  }
});

// Similar implementation for PATCH, PUT, DELETE endpoints

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
