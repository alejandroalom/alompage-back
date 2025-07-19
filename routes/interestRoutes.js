const express = require('express');
const router = express.Router();
const { createInterest, getAllInterests } = require('../controllers/interestController');

router.post('/', createInterest);
router.get('/', getAllInterests);

module.exports = router;
