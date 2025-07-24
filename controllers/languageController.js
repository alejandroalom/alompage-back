const Language = require('../models/language');

exports.createLanguage = async (req, res) => {
  const language = new Language(req.body);
  await language.save();
  res.status(201).json(language);
};

exports.getLanguages = async (req, res) => {
  const languages = await Language.find();
  res.json(languages);
};

exports.deleteLanguage = async (req, res) => {
  try {
    await Language.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al borrar idioma' });
  }
};

