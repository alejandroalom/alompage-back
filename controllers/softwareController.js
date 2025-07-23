import Software from '../models/software.js';

export const getAllSoftware = async (req, res) => {
  try {
    const software = await Software.find();
    res.json(software);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el software' });
  }
};

export const createSoftware = async (req, res) => {
  try {
    const newSoftware = new Software(req.body);
    await newSoftware.save();
    res.status(201).json(newSoftware);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el software' });
  }
};

export const updateSoftware = async (req, res) => {
  try {
    const updated = await Software.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Software no encontrado' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el software' });
  }
};

export const deleteSoftware = async (req, res) => {
  try {
    const deleted = await Software.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Software no encontrado' });
    res.json({ message: 'Software eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el software' });
  }
};

