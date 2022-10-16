const express = require('express');
const salesController = require('../controllers/sales.controller');
const validation = require('../middlewares/validation');

const router = express.Router();

router.post('/', validation.validateProductId, validation.validateSalesQuantity,
  salesController.createSale);

module.exports = router;