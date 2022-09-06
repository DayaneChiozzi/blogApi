const postService = require('../services/postService');

const getAll = async (req, res) => {
  try {
    const resultBlogPost = await postService.getAll();
    console.log('CONTROLLER', resultBlogPost);
    return res.status(200).json(resultBlogPost);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAll };