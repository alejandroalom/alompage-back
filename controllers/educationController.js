import Education from '../models/Education.js';

export const getAllEducation = async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la educación' });
  }
};

export const createEducation = async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la entrada de educación' });
  }
};

export const updateEducation = async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: 'Entrada no encontrada' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la entrada' });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const deleted = await Education.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Entrada no encontrada' });
    res.json({ message: 'Entrada eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la entrada' });
  }
};
