// app.js

const express = require('express');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const app = express();

// Middleware
app.use(express.json());
app.use(loggerMiddleware);

// Routes
const incomeRoutes = require('./routes/incomeRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

app.use('/income', incomeRoutes);
app.use('/expense', expenseRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
