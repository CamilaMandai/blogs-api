const categoryService = require('../services/category.service');

const findAll = async (req, res) => {
  const categories = await categoryService.findAll();
  return res.status(200).json(categories);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const createdCategory = await categoryService.createCategory(name);
  res.status(201).json(createdCategory);
};

module.exports = {
  findAll,
  createCategory,
};