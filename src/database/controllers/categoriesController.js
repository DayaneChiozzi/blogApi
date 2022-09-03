const categoriesService = require('../services/categoriesService');

const create = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await categoriesService.create({ name });
    return res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create };