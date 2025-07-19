import mongoose from 'mongoose';

const languageSchema = new mongoose.Schema({
  idioma: { type: String, required: true },
  nivel: { type: String, required: true }
});

const Language = mongoose.model('Language', languageSchema);

export default Language;
