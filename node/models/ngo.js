const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  ngoName: String,
  lastName: String,
  email: String,
  username: { type: String, unique: true },
  password: String,
});

const Ngo = mongoose.model('Ngo', ngoSchema);

module.exports = Ngo;