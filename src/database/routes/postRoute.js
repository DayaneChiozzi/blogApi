const express = require('express');
const postController = require('../controllers/postController');
const { tokenValidate } = require('../middlewares/authenticator');

const postRoute = express.Router();

postRoute.get('/post', tokenValidate, postController.getAll);

module.exports = postRoute;