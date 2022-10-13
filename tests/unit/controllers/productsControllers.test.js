const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsController = require('../../../src/controllers/products.controller');
const productsService = require('../../../src/services/products.service');
const { productList, productId } = require('./mocks/productsControllers.mock');

describe('Product Controller', function () {
  describe('List all products', function () {
    it('Return the list of products successfully', async function () {
      sinon
        .stub(productsService, 'getAllProducts')
        .resolves({ type: productList.type, message: productList.message });
      
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
        
      await productsController.getProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productList.message);
    });
  });

  describe('List a single product', function () {
    it('Returns a single product successfully', async function () {
      sinon
        .stub(productsService, 'getProductById')
        .resolves({ type: null, message: productId });
      
      const req = { params: { id: productId.id }};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productId);
    });

    it('Returns an error if the product does not exist', async function () {
      sinon
        .stub(productsService, 'getProductById')
        .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

      const req = { params: { id: 9999 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });

  });

  afterEach(function () {
    sinon.restore();
  });
  });