const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(result);
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(result);
};

const insert = async (product) => {
  const columns = Object.keys(snakeize(product))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (${columns}) VALUE (${placeholders})`,
    [...Object.values(product)],
  );
  return insertId;
};

const updateById = async (productId, update) => {
  const [{ insertId }] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [update, productId],
  );
  return insertId;
};

const remove = async (productId) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ? ',
    [productId],
  );

  return affectedRows;
};

module.exports = {
  findAll,
  findById,
  insert,
  updateById,
  remove,
};