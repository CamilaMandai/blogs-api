const { User } = require('../models');
const jwtUtils = require('../utils/jwt');

const findAll = async () => {
  const users = await User.findAll({
    attributes: {
        exclude: ['password'],
    },
});
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: {
        exclude: ['password'],
    },
});
  if (!user) {
    return { type: 404, message: 'User does not exist' };
  }
  delete user.password;
  return { type: null, message: user };
};

const createUser = async ({ displayName, email, password, image }) => {
  const isUser = await User.findOne({
    where: { email },
  });
  if (!isUser) {
  await User.create({ displayName, email, password, image });
  const usuario = await User.findOne({
    where: { email, password },
  });
  const token = jwtUtils.generateToken(usuario);
  return { type: null, message: token };
}
  return { type: 409, message: 'User already registered' };
};

module.exports = {
  findAll,
  getById,
  createUser,
};