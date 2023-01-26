const jwtUtils = require('../utils/jwt');

const User = require('../models/User');

const validate = async (email, password) => {
  if (!email || !password) {
    throw new Error('Fields Required');
  }

  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) {
    return { type: 'user not found', message: 'Invalid fields' };
  }

  const token = jwtUtils.generateToken(user);
  return token;
};

module.exports = {
  validate,
};