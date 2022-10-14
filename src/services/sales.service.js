const salesModel = require('../models/sales.model');

const createSalesProductsService = (saleId, sales) => {
  if (sales.length > 0 && sales) {
    const createSalespromises = sales.map(async (sale) => {
      await salesModel.insert('sales_products', { saleId, ...sale });
    });
    return createSalespromises;
  }
  return [];
};

const createSalesService = async (insertValue) => {
  const saleId = await salesModel.insert('sales', { date: new Date().toISOString().split('T')[0] });
  await Promise.all(createSalesProductsService(saleId, insertValue));
  const itemsSold = await salesModel.findBySaleId(saleId);
  const resolve = {
    id: saleId,
    itemsSold,
  };
  return { type: null, message: resolve };
};

module.exports = {
  createSalesService,
};