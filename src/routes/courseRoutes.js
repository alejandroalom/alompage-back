const express = require('express');
const router = express.Router();
const controller = require('../controllers/courseController');

router.post('/', controller.createCourse);
router.get('/', controller.getCourses);
router.delete('/:id', controller.deleteCourse); // ← añadido

module.exports = router;
