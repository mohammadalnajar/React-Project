const User = require('../models/Users');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const salt = 10;
  try {
    const hash = await bcrypt.hash(password, salt);
    const registeredUser = await User.create({
      firstName,
      lastName,
      email,
      hash,
    });
    res.json({
      firstName,
      lastName,
      email,
      joinedAt: registeredUser.joinedAt,
      status: {
        register: 'Success registered',
      },
    });
  } catch (error) {
    res.json({
      msg: error,
      status: {
        register: 'Failed to register',
      },
    });
  }
};
exports.loginUser = async (req, res) => {
  res.send('login user');
};
exports.delUser = async (req, res) => {
  res.send('delete user');
};
exports.updateUser = async (req, res) => {
  res.send('update user');
};
