const productsModel = require('../models/products.model');
// const status = require('../utils/status');
// const messages = require('../utils/messages');
const { validationById } = require('./validations/dataValidations');
// const validateName = require('./validations/dataValidations');

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

const createProductService = async (product) => {
  const newProduct = await productsModel.insert(product);
  const result = await productsModel.findById(newProduct);

  return { type: null, message: result };
};

const updateById = async (productId, update) => {
  await productsModel.updateById(productId, update);
  const product = await productsModel.findById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  
  return { type: null, message: product };
};

const remove = async (productId) => {
  const product = await productsModel.findById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await productsModel.remove(productId);

  return { type: null };
};

module.exports = {
  getAllProducts,
  getProductById,
  createProductService,
  updateById,
  remove,
};