// const jwt = require('jsonwebtoken');
const token = require('./token');

const tokenValidate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  try {
    req.user = await token.validateToken(authorization);
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenValidate };
