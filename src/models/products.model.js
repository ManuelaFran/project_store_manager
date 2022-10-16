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

const increment = async (id, quantity) => {
  const query = 'UPDATE products SET quantity = quantity + ? WHERE id = ?';
  await connection.execute(query, [quantity, id]);
};

const decrement = async (id, quantity) => {
  const query = 'UPDATE products SET quantity = quantity - ? WHERE id = ?';
  await connection.execute(query, [quantity, id]);
};

module.exports = {
  findAll,
  findById,
  insert,
  increment,
  decrement,
};