const authService = require('../services/auth.service');

const auth = async (req, res) => {
  const { email, password } = req.body;

  const token = await authService.validate(email, password);
  return res.status(200).json({ token });
};

module.exports = {
  auth,
};