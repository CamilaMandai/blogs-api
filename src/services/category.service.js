const { Category } = require('../models');

const findAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const createCategory = async (name) => {
  await Category.create({ name });
  const createdCategory = await Category.findOne({
    where: { name },
  });
  return createdCategory;
};

module.exports = {
  findAll,
  createCategory,
};