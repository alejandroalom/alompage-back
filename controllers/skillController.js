const Skill = require('../models/skill');

exports.createSkill = async (req, res) => {
  const skill = new Skill(req.body);
  await skill.save();
  res.status(201).json(skill);
};

exports.getSkills = async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
};

exports.deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al borrar skill' });
  }
};
