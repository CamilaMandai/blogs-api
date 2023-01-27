const authMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

const { decodeToken } = require('../utils/jwt');

const authMiddlewareToken = (req, res, next) => {
  const { authorization } = req.headers;
  // console.log(req.headers);

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const user = decodeToken(authorization);
  const currDate = new Date();
  if (!user || user.exp < (currDate.getTime() / 1000)) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.body.user = user;

  return next();
};

module.exports = {
  authMiddleware,
  authMiddlewareToken,
};