const express = require('express');
const productsController = require('../controllers/products.controller');
const { validateProductName } = require('../middlewares/validateProductName');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/:id', productsController.getById);
router.post('/', validateProductName, productsController.createProductController);

module.exports = router;