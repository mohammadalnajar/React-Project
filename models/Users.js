const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add your name'],
  },
  email: {
    type: String,
    required: [true, 'Please add your Email'],
  },
  hash: {
    type: String,
    required: [true, 'Please add a password'],
  },
});

module.exports = mongoose.model('User', UserSchema);
