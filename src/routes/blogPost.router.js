const express = require('express');
const blogPostMiddleware = require('../middlewares/blogPost.middleware');
const blogPostController = require('../controllers/blogPost.controller');
const authMiddlewares = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', authMiddlewares.authMiddlewareToken, blogPostController.findAll);
router.post('/',
  authMiddlewares.authMiddlewareToken,
  blogPostMiddleware.validateFields,
  blogPostController.createPost);

router.get('/search', authMiddlewares.authMiddlewareToken, blogPostController.search);

router.get('/:id', 
  authMiddlewares.authMiddlewareToken, 
  blogPostMiddleware.validateId,
  blogPostController.getById);

router.put('/:id', 
  authMiddlewares.authMiddlewareToken, 
  blogPostMiddleware.validateId,
  blogPostMiddleware.validateUserToUpdate, 
  blogPostMiddleware.validateFieldsToUpdate,
  blogPostController.updatePost);

router.delete('/:id',
  authMiddlewares.authMiddlewareToken, 
  blogPostMiddleware.validateId,
  blogPostMiddleware.validateUserToUpdate, 
  blogPostController.deletePost);

module.exports = router;