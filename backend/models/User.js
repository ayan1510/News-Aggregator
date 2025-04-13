//Mongoose user schema

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  preferences: [String], // category preferences
});

module.exports = mongoose.model('User', userSchema);
