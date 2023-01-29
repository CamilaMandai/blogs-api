const express = require('express');
const blogPostMiddleware = require('../middlewares/blogPost.middleware');
const blogPostController = require('../controllers/blogPost.controller');
const authMiddlewares = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', authMiddlewares.authMiddlewareToken, blogPostController.findAll);

router.get('/:id', 
  authMiddlewares.authMiddlewareToken, 
  blogPostMiddleware.validateId,
  blogPostController.getById);

router.post('/',
  authMiddlewares.authMiddlewareToken,
  blogPostMiddleware.validateFields,
  blogPostController.createPost);

module.exports = router;