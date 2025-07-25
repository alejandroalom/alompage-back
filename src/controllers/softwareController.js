const Software = require('../models/software');

exports.createSoftware = async (req, res) => {
  const software = new Software(req.body);
  await software.save();
  res.status(201).json(software);
};

exports.getSoftware = async (req, res) => {
  const softwares = await Software.find();
  res.json(softwares);
};

exports.deleteSoftware = async (req, res) => {
  try {
    await Software.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al borrar software' });
  }
};
