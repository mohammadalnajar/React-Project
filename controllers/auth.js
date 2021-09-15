const User = require('../models/Users');
const bcrypt = require('bcrypt');
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  res.send('register user');
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
