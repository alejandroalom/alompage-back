const express = require('express');
const router = express.Router();
const controller = require('../controllers/languageController');

router.post('/', controller.createLanguage);
router.get('/', controller.getLanguages);
router.delete('/:id', controller.deleteLanguage); // ← añadido

module.exports = router;

