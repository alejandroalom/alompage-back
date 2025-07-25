const express = require('express');
const router = express.Router();
const controller = require('../controllers/skillController');

router.post('/', controller.createSkill);
router.get('/', controller.getSkills);
router.delete('/:id', controller.deleteSkill); // ← añadido

module.exports = router;

