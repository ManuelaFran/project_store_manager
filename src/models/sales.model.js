// const connection = require('./connection');

// const insertSaleData = async () => {
//   const queryinsertSaleData = 'INSERT INTO sales () VALUES ()';
//   const [saleData] = await connection.execute(queryinsertSaleData);
//   return {
//     id: saleData.insertId,
//   };
// };

// const insertSale = async ({ id, productId, quantity }) => {
//   try {
//     const query = 'INSERT INTO sales_products (sale_id,product_id, quantity) VALUES (?, ?, ?)';
//     await connection.execute(query, [id, productId, quantity]);
//     return {
//       id,
//     };
//   } catch (error) {
//     return error;
//   }
// };

// const findAll = async () => {
//   const query = `SELECT sp.sale_id AS saleId, s.date, sp.product_id, sp.quantity 
//     FROM sales_products AS sp
//     JOIN sales AS s ON sp.sale_id = s.id`;
//   const [allSales] = await connection.execute(query);
//   return allSales;
// };

// const findById = async (id) => {
//   const query = `SELECT sls.date, sl.product_id, sl.quantity FROM sales_products AS sl
//   JOIN sales AS sls ON sl.sale_id = sls.id WHERE sl.sale_id = ?`;
//   const [sales] = await connection.execute(query, [id]);
//   return sales;
// };

// module.exports = {
//   insertSaleData,
//   insertSale,
//   findAll,
//   findById,
// };