const schemas = require('../schemas/schemas');
const productsService = require('../services/products.service');

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  const validationName = schemas.validateName(name);

  if (validationName.message) { 
    const { code, message } = validationName;
    return res.status(code).json({ message }); 
  }
  
  next();
};

const existingNameValidation = async (req, res, next) => {
  const { name } = req.body;
  const productExist = await productsService.findByName({ name });

  if (productExist.length > 0) { 
    return res.status(409).json({ message: schemas.errors.nameAlreadyExist }); 
  }

  next();
};

const quantityValidation = (req, res, next) => {
  const { quantity } = req.body;
  const validationQuantity = schemas.validateQuantity(quantity);

  if (validationQuantity.message) {
    const { code, message } = validationQuantity;

    return res.status(code).json({ message });
  }
  next();
};

const validatingIfItExists = async (req, res, next) => {
  const { id } = req.params;
  const product = await productsService.findById({ id });
  
  if (!product) return res.status(404).json({ message: 'Product not found' });
  next();
};

const validateProductId = (req, res, next) => {
  const arraySales = req.body;
  const validationProductId = schemas.validateProductId(arraySales);

  if (validationProductId) { 
    const { code, message } = validationProductId;
    return res.status(code).json({ message }); 
  }
  next();
};

const validateSalesQuantity = (req, res, next) => {
  const arraySales = req.body;
  const validationQuantity = schemas.validateSalesQuantity(arraySales);

  if (validationQuantity) {
    const { code, message } = validationQuantity;
    return res.status(code).json({ message }); 
  }
  next();
};

module.exports = { 
  nameValidation,
  existingNameValidation,
  quantityValidation,
  validatingIfItExists,
  validateProductId,
  validateSalesQuantity,
};