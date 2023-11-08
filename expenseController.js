  // controllers/expenseController.js
  
  exports.getAllExpenses = (req, res) => {
    // Retrieve and return all expense data
  };
  
  exports.addExpense = (req, res) => {
    // Add a new expense entry
  };
  
  

// Sample in-memory data  
let expenseData = [
  { id: 1, description: 'Expense 1', amount: 1000 },
  { id: 2, description: 'Expense 2', amount: 1500 },
];

exports.updateExpense = (req, res) => {
  const expenseId = req.params.id; // Assuming you pass the expense ID in the URL parameters

  // Find the expense entry to update
  const expenseToUpdate = expenseData.find(expense => expense.id === parseInt(expenseId));

  if (!expenseToUpdate) {
    return res.status(404).json({ message: 'Expense not found' });
  }

  // Update the expense entry with data from the request body
  if (req.body.description) {
    expenseToUpdate.description = req.body.description;
  }
  if (req.body.amount) {
    expenseToUpdate.amount = req.body.amount;
  }

  res.json({ message: 'Expense updated successfully', updatedExpense: expenseToUpdate });
};


const expenseController = [
  { id: 1, amount: 1000 },
  { id: 2, amount: 1500 },
];

exports.sumExpenses = (req, res) => {
  // Calculate the sum of all expenses
  const totalExpenses = expenseData.reduce((total, expense) => total + expense.amount, 0);

  res.json({ totalExpenses });
};

 
const incomeData = [
  { id: 1, amount: 5000 },
  { id: 2, amount: 6000 },
];

const expenseGross = [
  { id: 1, amount: 1000 },
  { id: 2, amount: 1500 },
];

exports.grossIncome = (req, res) => {
  // Calculate total income
  const totalIncome = incomeData.reduce((total, income) => total + income.amount, 0);

  // Calculate total expenses
  const totalExpenses = expenseData.reduce((total, expense) => total + expense.amount, 0);

  // Calculate gross income
  const grossIncome = totalIncome - totalExpenses;

  res.json({ grossIncome });
};


const incomeLoss = [
  { id: 1, amount: 5000 },
  { id: 2, amount: 6000 },
];

const expenseLoss = [
  { id: 1, amount: 1000 },
  { id: 2, amount: 1500 },
];

exports.loss = (req, res) => {
  // Calculate total income
  const totalIncome = incomeData.reduce((total, income) => total + income.amount, 0);

  // Calculate total expenses
  const totalExpenses = expenseData.reduce((total, expense) => total + expense.amount, 0);

  // Calculate loss
  const loss = totalIncome - totalExpenses;

  res.json({ loss });
};

  