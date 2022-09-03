const { Category } = require('../models');

const create = async (name) => {
  const resultNewCategory = await Category.create(name);
  return resultNewCategory.dataValues;
};
const getAll = async (categories) => {
  const resultCategories = await Category.findAll(categories);
  return resultCategories;
};

module.exports = { create, getAll };