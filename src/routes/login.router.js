const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth.controller');
const authMiddlewares = require('../middlewares/auth.middleware');

router.post('/', 
  authMiddlewares.authMiddleware, 
  // authMiddlewares.authMiddlewareToken, 
  authController.auth);

module.exports = router;