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
    return res.status(200).json({
      firstName,
      lastName,
      email,
      joinedAt: registeredUser.joinedAt,
      status: {
        register: 'Success registered',
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
      status: {
        register: 'Failed to register',
      },
    });
  }
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });

    if (foundUser !== null) {
      const { hash, firstName, lastName, joinedAt } = foundUser;
      const correctPass = await bcrypt.compare(password, hash);
      if (correctPass) {
        return res.json({
          firstName,
          lastName,
          email,
          joinedAt,
          status: {
            loggedIn: true,
            msg: 'Success LoggedIn',
          },
        });
      } else {
        return res.status(400).json({
          status: { loggedIn: false, msg: 'Username OR Password is incorrect' },
        });
      }
    } else {
      return res.status(404).json({
        status: { loggedIn: false, msg: 'Username or Password is incorrect' },
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      msg: error,
      status: {
        login: 'Failed to login',
      },
    });
  }
};
exports.delUser = async (req, res) => {
  res.send('delete user');
};
exports.updateUser = async (req, res) => {
  res.send('update user');
};
