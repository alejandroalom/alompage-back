import Skill from '../models/skill.js';

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las skills' });
  }
};

export const createSkill = async (req, res) => {
  try {
    const newSkill = new Skill(req.body);
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la skill' });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const updated = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Skill no encontrada' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la skill' });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const deleted = await Skill.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Skill no encontrada' });
    res.json({ message: 'Skill eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la skill' });
  }
};


