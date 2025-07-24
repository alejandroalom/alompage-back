const express = require('express');
const router = express.Router();
const controller = require('../controllers/interestController');

router.post('/', controller.createInterest);
router.get('/', controller.getInterest);
router.delete('/:id', controller.deleteInterest); // ← añadido

module.exports = router;

