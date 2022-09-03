const { Category } = require('../models');

const create = async (name) => {
  const resultNewCategory = await Category.create(name);
  return resultNewCategory.dataValues;
};

module.exports = { create };