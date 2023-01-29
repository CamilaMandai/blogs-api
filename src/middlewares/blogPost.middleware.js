const categoryService = require('../services/category.service');

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

module.exports = {
  validateFields,
};