import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  institucion: { type: String, required: true },
  titulo: { type: String, required: true },
  inicio: String,
  fin: String
});

const Education = mongoose.model('Education', educationSchema);

export default Education;

