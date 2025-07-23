import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  empresa: { type: String, required: true },
  puesto: { type: String, required: true },
  inicio: String,
  fin: String,
  descripcion: String
});

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
