import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  puesto: { type: String, required: true },
  empresa: { type: String, required: true },
  ubicacion: { type: String },
  inicio: { type: String },
  fin: { type: String },
  descripcion: { type: String }
});

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
