const { User } = require('../models');
// const jwtService = require('../middlewares/jwtServices');

const create = async (user) => {
  const resultNewUser = await User.create(user);
  return resultNewUser;
};

const getUsersAll = async () => {
  const resultUsers = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return resultUsers;
};

const getUserId = async (id) => {
  const resultUserId = await User.findByPk(id);
  if (resultUserId) {
    return {
      id: resultUserId.dataValues.id,
      displayName: resultUserId.dataValues.displayName,
      email: resultUserId.dataValues.email,
      image: resultUserId.dataValues.image,
    };
  }
  return false;
};

const login = async (email) => {
  const verifyEmail = await User.findOne({ where: { email } });
  if (!verifyEmail) {
    return false;
  }
  return true;
};

module.exports = { create, getUsersAll, login, getUserId };