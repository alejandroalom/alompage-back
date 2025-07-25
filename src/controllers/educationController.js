const Education = require('../models/education');

exports.createEducation = async (req, res) => {
  const education = new Education(req.body);
  await education.save();
  res.status(201).json(education);
};

exports.getEducation = async (req, res) => {
  const education = await Education.find();
  res.json(education);
};

exports.deleteEducation = async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al borrar educación' });
  }
};
