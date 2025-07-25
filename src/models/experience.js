const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  position: String,
  company: String,
  location: String,
  startDate: String,
  endDate: String,
  description: String
});

module.exports = mongoose.model('Experience', experienceSchema);
