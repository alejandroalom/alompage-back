import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  institution: { type: String, required: true },
  location: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  description: { type: String }
});

const Education = mongoose.model('Education', educationSchema);

export default Education;

