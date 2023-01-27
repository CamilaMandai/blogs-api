const userServices = require('../services/user.service');

const findAll = async (req, res) => {
  const users = await userServices.findAll();
   return res.status(200).json(users);
};

module.exports = {
  findAll,
};