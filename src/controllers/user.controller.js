const userServices = require('../services/user.service');

const findAll = async (req, res) => {
  const users = await userServices.findAll();
   return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const user = await userServices.createUser(req.body);
  return res.status(201).json(user);
};

module.exports = {
  findAll,
  createUser,
};