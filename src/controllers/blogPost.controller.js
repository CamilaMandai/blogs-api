const blogPostService = require('../services/blogPost.service');

const findAll = async (req, res) => {
  const result = await blogPostService.findAll();
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await blogPostService.getById(id);
  return res.status(200).json(post);
};

const createPost = async (req, res) => {
  const createdPost = await blogPostService.createPost(req.body, req.headers.authorization);
  return res.status(201).json(createdPost);
};

module.exports = {
  findAll,
  getById,
  createPost,
};