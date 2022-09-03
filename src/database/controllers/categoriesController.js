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

const getAll = async (req, res) => {
  const { id, name } = req.body;
  try {
    const resultCategories = await categoriesService.getAll({ id, name });
    return res.status(200).json(resultCategories);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { create, getAll };