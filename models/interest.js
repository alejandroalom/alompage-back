import mongoose from 'mongoose';

const interestSchema = new mongoose.Schema({
  nombre: { type: String, required: true }
});

const Interest = mongoose.model('Interest', interestSchema);

export default Interest;
