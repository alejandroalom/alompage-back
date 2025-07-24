const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  provider: String
});

module.exports = mongoose.model('Course', courseSchema);
