import mongoose from 'mongoose';

const softwareSchema = new mongoose.Schema({
  nombre: { type: String, required: true }
});

const Software = mongoose.model('Software', softwareSchema);

export default Software;

