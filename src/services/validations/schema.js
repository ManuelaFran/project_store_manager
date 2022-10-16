const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const objSale = Joi.object({
  productId: idSchema.label('productId'),
  quantity: idSchema.label('quantity'),
});

const saleSchema = Joi.array().items(objSale);

module.exports = {
  idSchema,
  saleSchema,
};