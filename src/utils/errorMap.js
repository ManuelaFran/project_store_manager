const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  INVALID_AMOUNT: 422,
  INVALID_SALE: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
    errorMap,
    mapError,
};