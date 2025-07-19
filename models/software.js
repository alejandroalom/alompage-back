import mongoose from 'mongoose';

const softwareSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  nivel: { type: String }
});

const Software = mongoose.model('Software', softwareSchema);

export default Software;
