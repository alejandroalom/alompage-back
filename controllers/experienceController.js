import Experience from '../models/experience.js';

export const getAllExperience = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la experiencia' });
  }
};

export const createExperience = async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la entrada de experiencia' });
  }
};

export const updateExperience = async (req, res) => {
  try {
    const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Entrada no encontrada' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la entrada' });
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const deleted = await Experience.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Entrada no encontrada' });
    res.json({ message: 'Entrada eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la entrada' });
  }
};


