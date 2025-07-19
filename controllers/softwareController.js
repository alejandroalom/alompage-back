import Software from '../models/software.js';

export const getAllSoftware = async (req, res) => {
  try {
    const softwares = await Software.find();
    res.json(softwares);
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
    res.status(400).json({ error: 'Error al crear la entrada de software' });
  }
};

export const updateSoftware = async (req, res) => {
  try {
    const updated = await Software.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: 'Entrada no encontrada' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la entrada' });
  }
};

export const deleteSoftware = async (req, res) => {
  try {
    const deleted = await Software.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Entrada no encontrada' });
    res.json({ message: 'Entrada eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la entrada' });
  }
};
