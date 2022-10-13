const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');
const { listProductsSuccessfully, listASingleProductSuccessfully } = require('./mocks/productsModels.mock');

describe('Product Model', function () {
  describe('List all products', function () {
    it('All successfully', async function () {
      sinon.stub(connection, 'execute').resolves([[listProductsSuccessfully]]);

      const [response] = await productsModel.findAll();
      expect(response).to.be.deep.equal(listProductsSuccessfully);
    });

    it('A single successfully', async function () {
      sinon.stub(connection, 'execute').resolves([[listASingleProductSuccessfully]]);

      const response = await productsModel.findById(listASingleProductSuccessfully.id);
      expect(response).to.be.deep.equal(listASingleProductSuccessfully);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});