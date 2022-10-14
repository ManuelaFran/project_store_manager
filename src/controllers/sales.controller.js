const salesService = require('../services/sales.service');
const { mapError } = require('../utils/errorMap');

const createSalesController = async (req, res) => {
  const { type, message } = await salesService.createSalesService(req.body);
  if (type) {
    return res.status(mapError(type)).json({ message });
  }
  res.status(201).json(message);
};

module.exports = {
  createSalesController,
};