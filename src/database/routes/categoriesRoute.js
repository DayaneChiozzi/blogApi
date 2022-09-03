const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const { tokenValidate } = require('../middlewares/authenticator');
const validateCategory = require('../middlewares/validateCategory');

const categoryRoute = express.Router();

categoryRoute.post('/categories', tokenValidate, validateCategory, categoriesController.create);

module.exports = categoryRoute;