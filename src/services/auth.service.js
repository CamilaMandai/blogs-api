const jwtUtils = require('../utils/jwt');

const { User } = require('../models');

const validate = async (email, password) => {
   const usuario = await User.findOne({
    where: { email, password },
  });
  if (!usuario) {
    return { type: 400, message: 'Invalid fields' };
  }

  const token = jwtUtils.generateToken(usuario);
  return { type: null, message: token };
  // return { type: null, message: usuario };
};

module.exports = {
  validate,
};