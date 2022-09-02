const express = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');
const { tokenValidate } = require('../middlewares/authenticator');

const userRoute = express.Router();

userRoute.post('/user',
  validateUser.displayNameValidate,
  validateUser.emailValidate,
  validateUser.passwordValidate,
  validateUser.verifyEmail,
  userController.create);

userRoute.get('/user', tokenValidate, userController.getUsersAll);

userRoute.get('/user/:id',
  tokenValidate,
  userController.getUserId);

module.exports = userRoute;
