const express = require('express');
const salesController = require('../controllers/sales.controller');

const sales = express.Router();

sales.post('/sales', salesController.createSalesController);

module.exports = {
  sales,
};