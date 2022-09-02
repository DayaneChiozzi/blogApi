const express = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');

const userRoute = express.Router();

userRoute.post('/user',
  validateUser.displayNameValidate,
  validateUser.emailValidate,
  validateUser.passwordValidate,
  validateUser.verifyEmail,
  userController.create);
userRoute.get('/user', userController.getUsersAll);

module.exports = userRoute;
