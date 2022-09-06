const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const resultBlogPost = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
    ],

  });
  console.log('SERVICE', resultBlogPost);
  return resultBlogPost;
};

module.exports = { getAll };