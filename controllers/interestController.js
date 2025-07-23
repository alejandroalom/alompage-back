import Interest from '../models/interest.js';

export const getAllInterests = async (req, res) => {
  try {
    const interests = await Interest.find();
    res.json(interests);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los intereses' });
  }
};

export const createInterest = async (req, res) => {
  try {
    const newInterest = new Interest(req.body);
    await newInterest.save();
    res.status(201).json(newInterest);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el interés' });
  }
};

export const updateInterest = async (req, res) => {
  try {
    const updated = await Interest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Interés no encontrado' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el interés' });
  }
};

export const deleteInterest = async (req, res) => {
  try {
    const deleted = await Interest.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Interés no encontrado' });
    res.json({ message: 'Interés eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el interés' });
  }
};


