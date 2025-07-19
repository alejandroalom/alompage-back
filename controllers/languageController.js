import Language from '../models/Language.js';

export const getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los idiomas' });
  }
};

export const createLanguage = async (req, res) => {
  try {
    const newLanguage = new Language(req.body);
    await newLanguage.save();
    res.status(201).json(newLanguage);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la entrada de idioma' });
  }
};

export const updateLanguage = async (req, res) => {
  try {
    const updated = await Language.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: 'Entrada no encontrada' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la entrada' });
  }
};

export const deleteLanguage = async (req, res) => {
  try {
    const deleted = await Language.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Entrada no encontrada' });
    res.json({ message: 'Entrada eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la entrada' });
  }
};
