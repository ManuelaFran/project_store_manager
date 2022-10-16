const { increment, decrement } = require('../models/products.model');
const salesModel = require('../models/sales.model');

const mapSales = (array) => array.map((sale) => ({ 
  productId: sale.product_id, quantity: sale.quantity, 
}));

const quantityIncrement = async (sales) => {
  await Promise.all(
    sales.map(({ product_id: productId, quantity }) => (
      increment(productId, quantity)
    )),
  );
};

const quantityDecrement = async (sales) => {
  await Promise.all(
    sales.map(({ product_id: productId, quantity }) => (
      decrement(productId, quantity)
    )),
  ); 
};

const createSale = async (arraySales) => {
  const { id } = await salesModel.createSaleDate();

  await quantityDecrement(arraySales);

  const sales = await mapSales(arraySales);

  await Promise.all(
    sales.map(({ productId, quantity }) => (
      salesModel.createSale({ id, productId, quantity })
    )),
);  
  return {
    id,
  };
};

const getAll = async () => {
  const allSales = await salesModel.getAll();
  return allSales;
};

const getById = async (id) => {
  const sales = await salesModel.getById(id);
  return sales;
};

module.exports = {
  createSale,
  mapSales,
  getAll,
  getById,
  quantityIncrement,
  quantityDecrement,
};