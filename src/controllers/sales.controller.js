// const salesService = require('../services/sales.service');

// const insertSale = async (req, res) => {
//   const arraySales = req.body;
//   const newSale = await salesService.insertSale(arraySales);

//   return res.status(201).json({ id: newSale.id, itemsSold: arraySales });
// };

// const findAll = async (_req, res) => {
//   const allSales = await salesService.findAll();

//   return res.status(200).json(allSales);
// };

// const findById = async (req, res) => {
//   const { id } = req.params;
//   const sales = await salesService.findById(id);

//   if (!sales || sales.length === 0) return res.status(404).json({ message: 'Sale not found' });

//   return res.status(200).json(sales);
// };

// module.exports = {
//   insertSale,
//   findAll,
//   findById,
// };