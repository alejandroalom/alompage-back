const express = require('express');
const router = express.Router();
const controller = require('../controllers/educationController');

router.post('/', controller.createEducation);
router.get('/', controller.getEducation);
router.delete('/:id', controller.deleteEducation); // <- añadido

module.exports = router;
