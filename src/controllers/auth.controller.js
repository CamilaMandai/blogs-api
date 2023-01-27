const authService = require('../services/auth.service');

const auth = async (req, res) => {
  const { email, password } = req.body;

  const token = await authService.validate(email, password);
  if (!token.type) {
    return res.status(200).json({ token: token.message });
  }
  
  return res.status(400).json({ message: token.message });
};

module.exports = {
  auth,
};