const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const { returnsProductsSuccessfully, returnsASingleProductSuccessfully } = require('./mocks/productsServices.mock');

describe('Product Service', function () {
  describe('List all products', function () {
    // ARRANGE - criar stubs para a camada Model
    it('Return the list of products successfully', async function () {
      sinon.stub(productsModel, 'findAll').resolves(returnsProductsSuccessfully);
      // ACT - chamar a função `getAllProducts`
      const response = await productsService.getAllProducts();
      // ASSERT - verificar se resultado é a lista de produtos
      expect(response).to.deep.equal({ type: null, message: returnsProductsSuccessfully });
    });
  });

  describe('List a single product', function () {
    it('Returns a single product successfully', async function () {
      sinon.stub(productsModel, 'findById').resolves(returnsASingleProductSuccessfully);
      // ACT - chamar a função `getProductById`
      const { message } = await productsService.getProductById(returnsASingleProductSuccessfully.id);
      // ASSERT - verificar se resultado é um único produto
      expect(message).to.deep.equal(returnsASingleProductSuccessfully);
    });

    it('Returns an error if the product does not exist', async function () {
      sinon.stub(productsModel, 'findById').resolves(undefined);
      
      const id = 9999;
      const { type, message } = await productsService.getProductById(id);
      
      expect(type).to.equal('PRODUCT_NOT_FOUND');
      expect(message).to.equal('Product not found');
     });
    
    afterEach(function () {
      sinon.restore();
    });
  });
});