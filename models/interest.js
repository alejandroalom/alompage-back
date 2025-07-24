const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
  text: String
});

module.exports = mongoose.model('Interest', interestSchema);

