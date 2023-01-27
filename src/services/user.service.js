const { User } = require('../models');

const findAll = async () => {
  const users = await User.findAll();
  return users;
};

const createUser = async ({ displayName, email, password, image }) =>
  User.create({ displayName, email, password, image });

module.exports = {
  findAll,
  createUser
};