const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');
const authMiddlewares = require('../middlewares/auth.middleware');

router.get('/', 
  authMiddlewares.authMiddlewareToken, 
  userController.findAll);

module.exports = router;