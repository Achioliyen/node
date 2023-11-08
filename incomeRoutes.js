// routes/incomeRoutes.js

const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

router.get('/', incomeController.getAllIncome);
router.post('/', incomeController.addIncome);
router.put('/:id', incomeController.updateIncome);
router.get('/sum', incomeController.sumIncome);
router.get('/gross-income', incomeController.grossIncome);

module.exports = router;

