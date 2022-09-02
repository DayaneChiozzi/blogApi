// const jwt = require('jsonwebtoken');
const token = require('./token');

const tokenValidate = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const dataToken = token.verifyToken(authorization);
    req.userId = dataToken.id;
    return next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = tokenValidate;
