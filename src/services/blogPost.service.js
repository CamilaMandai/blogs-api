const { Op } = require('sequelize');  
const { BlogPost, User, Category } = require('../models');

const jwtUtils = require('../utils/jwt');

const findAll = async () => { 
  const postWithUserCategories = await BlogPost.findAll({
    attributes: {
      exclude: ['user_id'],
  },
    include: [{ 
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] } }, {
        model: Category, 
        as: 'categories',
        attributes: { exclude: [['PostCategory']] },
      }],
  });
  return postWithUserCategories;
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    attributes: {
      exclude: ['user_id'],
  },
    include: [{ 
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] } }, {
        model: Category, 
        as: 'categories',
        attributes: { exclude: [['PostCategory']] },
      }],
  });
  return post;
};

const createPost = async ({ title, content, categoryIds }, token) => {
  const user = jwtUtils.decodeToken(token);
  await BlogPost.create({ title, content, categoryId: categoryIds, userId: user.id });
  const posts = await BlogPost.findAll();
  const createdPost = await BlogPost.findOne({ where: { id: posts.length } });
  return {
    id: createdPost.id,
    title,
    content,
    userId: user.id,
    updated: createdPost.updated,
    published: createdPost.published,
  };
};

const udpatePost = async ({ title, content }, id) => {
  const [qtdUpdated] = await BlogPost.update({ title, content }, { where: { id } });
  return qtdUpdated > 0;
};

const deletePost = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

const search = async (q) => {
  const postsByTitle = await BlogPost.findAll({ where: { title: { [Op.like]: `%${q}%` } }, 
    attributes: { exclude: ['user_id'] },
  include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, {
      model: Category, 
      as: 'categories',
      attributes: { exclude: [['PostCategory']] },
    }] });
  const postsByContent = await BlogPost.findAll({ where: { content: { [Op.like]: `%${q}%` } },
  attributes: { exclude: ['user_id'] },
include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, {
    model: Category, 
    as: 'categories',
    attributes: { exclude: [['PostCategory']] },
  }] });
  if (postsByTitle.length !== 0) {
    return postsByTitle;
  }
  return postsByContent;
};

module.exports = {
  findAll,
  getById,
  createPost,
  udpatePost,
  deletePost,
  search,
};