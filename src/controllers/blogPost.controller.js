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

const updatePost = async (req, res) => {
  const { id } = req.params;
   const didUpdate = await blogPostService.udpatePost(req.body, id);
   if (didUpdate) {
     const updatedPost = await blogPostService.getById(id);
     return res.status(200).json(updatedPost);
   }
   return res.status(404).json({ message: 'Post does not exist' });
  };

const deletePost = async (req, res) => {
  const { id } = req.params;
  await blogPostService.deletePost(id);
  return res.status(204).json();
};

const search = async (req, res) => {
  const { q } = req.query;
  const post = await blogPostService.search(q);
  return res.status(200).json(post);
};

module.exports = {
  findAll,
  getById,
  createPost,
  updatePost,
  deletePost,
  search,
};