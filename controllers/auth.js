const User = require('../models/Users');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, userRole } = req.body;
  const salt = 10;
  try {
    const hash = await bcrypt.hash(password, salt);
    const registeredUser = await User.create({
      firstName,
      lastName,
      email,
      hash,
      userRole,
    });
    return res.status(200).json({
      firstName,
      lastName,
      email,
      userRole: registeredUser.userRole,
      joinedAt: registeredUser.joinedAt,
      status: {
        register: 'Success registered',
        success: true,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
      status: {
        msg: 'Failed to register',
        success: false,
      },
    });
  }
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });

    if (foundUser !== null) {
      const { hash, firstName, lastName, joinedAt, userRole } = foundUser;
      const correctPass = await bcrypt.compare(password, hash);
      if (correctPass) {
        return res.json({
          firstName,
          lastName,
          email,
          joinedAt,
          userRole,
          status: {
            loggedIn: true,
            success: true,
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
        status: {
          loggedIn: false,
          msg: 'Username or Password is incorrect',
          success: false,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      msg: error,
      status: {
        login: 'Failed to login',
        msg: 'Failed to login',
        success: false,
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
