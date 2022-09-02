const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET;
const jwtOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = async (info) => {
  const token = jwt.sign({ info }, secret, jwtOptions);
  return token;
};

const validateToken = async (token) => {
  try {
    const decode = jwt.verify(token, secret);
    return decode;
  } catch (error) {
    throw new Error('Token Invalido');
  }
};

module.exports = { generateToken, validateToken };