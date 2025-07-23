import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  nombre: { type: String, required: true }
});

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);

export default Skill;

