const categoryService = require('../services/category.service');
const blogPostService = require('../services/blogPost.service');

const validateFields = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const categories = await categoryService.findAll();
  const isCategoryMap = categories.map(({ id }) => categoryIds.some((catId) => catId === id));
  const isNotCategory = isCategoryMap.some((element) => element === false);
  if (!title || !content || !categoryIds) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  if (isNotCategory) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }
  return next();
};

const validateId = async (req, res, next) => {
  const { id } = req.params;
  const post = await blogPostService.getById(id);
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return next();
};

module.exports = {
  validateFields,
  validateId,
};