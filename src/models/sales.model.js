const snakeize = require('snakeize');
const camelize = require('camelize');
const connection = require('./connection');

const insert = async (table, insertValues) => {
  const columns = Object.keys(snakeize(insertValues))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(insertValues)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO ${table} (${columns}) VALUE (${placeholders})`,
    [...Object.values(insertValues)],
  );
  return insertId;
};

const findBySaleId = async (saleId) => {
  const [sales] = await connection.execute(
    'SELECT product_id, quantity FROM sales_products WHERE sale_id = ?',
    [saleId],
  );
  return camelize(sales);
};

module.exports = {
  insert,
  findBySaleId,
};