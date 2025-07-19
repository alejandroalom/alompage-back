const Interest = require('../models/interest');

const createInterest = async (req, res) => {
  try {
    const newInterest = new Interest({ text: req.body.text });
    await newInterest.save();
    res.status(201).json(newInterest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllInterests = async (req, res) => {
  try {
    const interests = await Interest.find();
    res.json(interests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createInterest, getAllInterests };
