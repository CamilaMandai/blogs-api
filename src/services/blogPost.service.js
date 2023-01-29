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

module.exports = {
  findAll,
  createPost,
};