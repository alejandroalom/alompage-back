const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  title: String,
  institution: String,
  location: String,
  startDate: String,
  endDate: String,
  description: String
});

module.exports = mongoose.model('Education', educationSchema);
