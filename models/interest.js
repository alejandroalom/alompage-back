const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

module.exports = mongoose.model('Interest', interestSchema);
