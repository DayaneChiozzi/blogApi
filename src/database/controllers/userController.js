const { generateToken } = require('../middlewares/token');
const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await generateToken({ email, password });
    await userService.create({ displayName, email, password, image });
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
  }
};

const getUsersAll = async (req, res) => {
  try {
    const resultUsers = await userService.getUsersAll();
    return res.status(200).json(resultUsers);
  } catch (error) {
    console.error(error);
  }
};

const getUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const resultUserId = await userService.getUserId(id);
    if (!resultUserId) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(resultUserId);
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const resultLogin = await userService.login(email);
    if (!resultLogin) {
      return res.status(400).json({
        message: 'Invalid fields',
      });
    }
    const resultToken = await generateToken({ email, password });
    return res.status(200).json({ token: resultToken });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create, getUsersAll, login, getUserId };