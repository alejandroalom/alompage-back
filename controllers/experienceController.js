const Experience = require('../models/experience');

exports.createExperience = async (req, res) => {
  const experience = new Experience(req.body);
  await experience.save();
  res.status(201).json(experience);
};

exports.getExperience = async (req, res) => {
  const experiences = await Experience.find();
  res.json(experiences);
};

exports.deleteExperience = async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al borrar experiencia' });
  }
};

