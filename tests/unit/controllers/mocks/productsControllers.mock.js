const productList = {
  type: null,
  message: [
    { id: 1, name: 'Martelo do thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão America' },
  ],
};

const productId = {
  id: 1,
  name: "Martelo de Thor"
};

const newProduct = {
  name: "Espada Excalibur"
};

const newProductId = { id: 4, ...newProduct };

module.exports = {
  productList,
  productId,
  newProduct,
  newProductId,
};