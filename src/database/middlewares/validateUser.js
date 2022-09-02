const { User } = require('../models');

function displayNameValidate(req, res, next) {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
}

function emailValidate(req, res, next) {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
}

function passwordValidate(req, res, next) {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
}

async function verifyEmail(req, res, next) {
  const { email } = req.body;
  const ExistVerifyEmail = await User.findOne({
    where: { email },
  });
  if (ExistVerifyEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
}

module.exports = {
  displayNameValidate,
  emailValidate,
  passwordValidate,
  verifyEmail,
};