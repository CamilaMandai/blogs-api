const authMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = authMiddleware;