const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');
const authMiddlewares = require('../middlewares/auth.middleware');
const userMiddlewares = require('../middlewares/user.middleware');

router.get('/', 
  authMiddlewares.authMiddlewareToken, 
  userController.findAll);

router.post('/', userMiddlewares.validateFields, userController.createUser);

router.get('/:id',
  authMiddlewares.authMiddlewareToken, 
  userController.getById);

router.delete('/me', authMiddlewares.authMiddlewareToken, userController.deleteUser);

module.exports = router;