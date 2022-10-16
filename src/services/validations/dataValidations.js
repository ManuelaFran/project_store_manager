const productsModel = require('../../models/products.model');

const validationById = async (id) => {
  const product = await productsModel.findById(id);
   if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: '' };
};

module.exports = {
  validationById,
};