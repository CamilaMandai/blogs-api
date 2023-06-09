const validateFields = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const reg = /^\w+@[a-zA-Z_]+?/;
  if (displayName.length < 9) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (!reg.test(email)) {
      return res.status(400).json({
        message: '"email" must be a valid email',
      });
    }
  if (password.length < 6) {
      return res.status(400).json({
        message: '"password" length must be at least 6 characters long',
      });
  }
  return next();
};

module.exports = {
  validateFields,
};
