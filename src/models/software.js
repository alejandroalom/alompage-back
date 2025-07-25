const mongoose = require('mongoose');

const softwareSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Software', softwareSchema);
