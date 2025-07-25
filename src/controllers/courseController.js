const Course = require('../models/course');

exports.createCourse = async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.status(201).json(course);
};

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al borrar curso' });
  }
};
