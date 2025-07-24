const Interest = require('../models/interest');

exports.createInterest = async (req, res) => {
  const interest = new Interest(req.body);
  await interest.save();
  res.status(201).json(interest);
};

exports.getInterest = async (req, res) => {
  const interests = await Interest.find();
  res.json(interests);
};

exports.deleteInterest = async (req, res) => {
  try {
    await Interest.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al borrar interés' });
  }
};

