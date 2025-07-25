const express = require('express');
const router = express.Router();
const controller = require('../controllers/softwareController');

router.post('/', controller.createSoftware);
router.get('/', controller.getSoftware);
router.delete('/:id', controller.deleteSoftware); // ← añadido

module.exports = router;

