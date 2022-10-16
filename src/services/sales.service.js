// const { increment, decrement } = require('../models/products.model');
// const salesModel = require('../models/sales.model');

// const mapSales = (array) => array.map((sale) => ({ 
//   productId: sale.product_id, quantity: sale.quantity, 
// }));

// const quantityIncrement = async (sales) => {
//   await Promise.all(
//     sales.map(({ product_id: productId, quantity }) => (
//       increment(productId, quantity)
//     )),
//   );
// };

// const quantityDecrement = async (sales) => {
//   await Promise.all(
//     sales.map(({ product_id: productId, quantity }) => (
//       decrement(productId, quantity)
//     )),
//   ); 
// };

// const insertSale = async (arraySales) => {
//   const { id } = await salesModel.insertSaleData();

//   await quantityDecrement(arraySales);

//   const sales = await mapSales(arraySales);

//   await Promise.all(
//     sales.map(({ productId, quantity }) => (
//       salesModel.insertSale({ id, productId, quantity })
//     )),
// );  
//   return {
//     id,
//   };
// };

// const findAll = async () => {
//   const allSales = await salesModel.findAll();
//   return allSales;
// };

// const findById = async (id) => {
//   const sales = await salesModel.findById(id);
//   return sales;
// };

// module.exports = {
//   insertSale,
//   mapSales,
//   findAll,
//   findById,
//   quantityIncrement,
//   quantityDecrement,
// };