const userServices = require('../services/user.service');

const findAll = async (req, res) => {
  const users = await userServices.findAll();
   return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const token = await userServices.createUser(req.body);
  if (!token.type) {
   return res.status(201).json({ token: token.message });
  }
  return res.status(token.type).json({ message: token.message });
};

module.exports = {
  findAll,
  createUser,
};