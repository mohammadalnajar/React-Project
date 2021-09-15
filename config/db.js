const mongoose = require('mongoose');
const keys = require('./keys');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(keys.MONGODB_URL, {
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
  }
  mongoose.connect(keys.MONGODB_URL);
};

module.exports = connectDB;
