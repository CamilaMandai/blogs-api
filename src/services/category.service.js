const { Category } = require('../models');

const createCategory = async (name) => {
  await Category.create({ name });
  const createdCategory = Category.findOne({
    where: { name },
  });
  return createdCategory;
};

module.exports = {
  createCategory,
};