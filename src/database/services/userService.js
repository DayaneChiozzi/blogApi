const { User } = require('../models');
// const jwtService = require('../middlewares/jwtServices');

const create = async (user) => {
  const resultNewUser = await User.create(user);
  return resultNewUser;
};

const getUsersAll = async () => {
  const resultUsers = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  // console.log('SERVICE:', resultUsers);
  return resultUsers;
};

const login = async (email) => {
  const verifyEmail = await User.findOne({ where: { email } });
  if (!verifyEmail) {
    return false;
  }
  return true;
};

module.exports = { create, getUsersAll, login };