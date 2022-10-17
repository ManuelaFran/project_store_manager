const productsService = require('../services/products.service');
const { mapError } = require('../utils/errorMap');

const getProducts = async (_req, res) => {
  const { type, message } = await productsService.getAllProducts();
  if (type) return res.status(mapError(type)).json({ message });

  res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(Number(id));
  if (type) return res.status(mapError(type)).json({ message });

  res.status(200).json(message);
};

const createProductController = async (req, res) => {
  const { body } = req;
  const { message } = await productsService.createProductService(body);

  res.status(201).json(message);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.updateById(Number(id), name);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

const remove = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsService.remove(Number(id));
  if (type) return res.status(mapError(type)).json({ message });

  res.status(204).end();
};

module.exports = {
  getProducts,
  getById,
  createProductController,
  updateById,
  remove,
};