const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'secretJWT';

const jwtConfig = {
  expiresIn: '1m',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  try {
    return jwt.sign(payload.dataValues, TOKEN_SECRET, jwtConfig);
  } catch (error) {
    throw new Error('Falha ao gerar token');
  }
};

const decodeToken = (token) => {
  const result = jwt.verify(token, TOKEN_SECRET);
  return result;
};

module.exports = {
  generateToken,
  decodeToken,
};