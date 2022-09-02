const express = require('express');
const userController = require('../controllers/userController');
const loginValidate = require('../middlewares/validateLogin');

const loginRoute = express.Router();

loginRoute.post('/login', loginValidate, userController.login);

module.exports = loginRoute;