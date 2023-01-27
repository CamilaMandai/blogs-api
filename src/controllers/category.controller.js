const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const createdCategory = await categoryService.createCategory(name);
  res.status(200).json(createdCategory);
};

module.exports = {
  createCategory,
};