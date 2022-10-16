const saleService = require('../services/sales.service');

const createSale = async (req, res) => {
  const arraySales = req.body;
  const newSale = await saleService.createSale(arraySales);

  return res.status(201).json({ id: newSale.id, itemsSold: arraySales });
};

const getAll = async (_req, res) => {
  const allSales = await saleService.getAll();

  return res.status(200).json(allSales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sales = await saleService.getById(id);

  if (!sales || sales.length === 0) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(sales);
};

module.exports = {
  createSale,
  getAll,
  getById,
};