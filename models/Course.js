import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  impartidoPor: { type: String, required: true }
});

const Course = mongoose.model('Course', courseSchema);

export default Course;

