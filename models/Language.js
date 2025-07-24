const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  name: String,
  level: String
});

module.exports = mongoose.model('Language', languageSchema);
