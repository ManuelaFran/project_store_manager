const productsModel = require('../models/products.model');
const { validationById } = require('./validations/dataValidations');

const getAllProducts = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const getProductById = async (productId) => {
  const error = await validationById(productId);
  if (error.type) return error;

  const product = await productsModel.findById(productId);
  return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};