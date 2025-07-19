import Course from '../models/Course.js';

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los cursos' });
  }
};

export const createCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el curso' });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Curso no encontrado' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el curso' });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Curso no encontrado' });
    res.json({ message: 'Curso eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el curso' });
  }
};
