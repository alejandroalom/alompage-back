const express = require('express');
const router = express.Router();
const controller = require('../controllers/experienceController');

router.post('/', controller.createExperience);
router.get('/', controller.getExperience);
router.delete('/:id', controller.deleteExperience); // ← añadido

module.exports = router;
