// controllers/incomeController.js

exports.getAllIncome = (req, res) => {
    // Retrieve and return all income data
  };
  
  exports.addIncome = (req, res) => {
    // Add a new income entry
  };
  
  exports.updateIncome = (req, res) => {
    
  };
  
  exports.sumIncome = (req, res) => {
    // Calculate and return the sum of all income
  };
  const incomeSum = [
    { id: 1, amount: 5000 },
    { id: 2, amount: 6000 },
  ];
  
  exports.sumIncome = (req, res) => {
    // Calculate the sum of all income
    const totalIncome = incomeData.reduce((total, income) => total + income.amount, 0);
  
    res.json({ totalIncome });
  };
  
  const incomeGross = [
    { id: 1, amount: 5000 },
    { id: 2, amount: 6000 },
  ];
  
  
  
  exports.grossIncome = (req, res) => {
    // gross as an existant income
    const totalIncome = incomeData.reduce((total, income) => total + income.amount, 0);
    // Calculate gross income
  const grossIncome = totalIncome - totalExpenses;

  res.json({ grossIncome });
  }
  
