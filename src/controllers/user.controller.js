const jwtUtils = require('../utils/jwt');
const userServices = require('../services/user.service');

const findAll = async (req, res) => {
  const users = await userServices.findAll();
   return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userServices.getById(id);
  if (!user.type) {
    return res.status(200).json(user.message);
  }
  return res.status(user.type).json({ message: user.message });
};

const createUser = async (req, res) => {
  const token = await userServices.createUser(req.body);
  if (!token.type) {
   return res.status(201).json({ token: token.message });
  }
  return res.status(token.type).json({ message: token.message });
};

const deleteUser = async (req, res) => {
   const { authorization } = req.headers;
   const user = jwtUtils.decodeToken(authorization);
   await userServices.deleteUser(user.id);
   return res.status(204).json();
};

module.exports = {
  findAll,
  getById,
  createUser,
  deleteUser,
};