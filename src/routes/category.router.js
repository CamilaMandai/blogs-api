const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category.controller');
const authMiddlewares = require('../middlewares/auth.middleware');
const categoryMiddlewalers = require('../middlewares/category.middleware');

router.post('/', 
  authMiddlewares.authMiddlewareToken,
  categoryMiddlewalers.validateFields, 
  categoryController.createCategory);

module.exports = router;