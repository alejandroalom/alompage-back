import express from 'express';
import {
  getAllInterests,
  createInterest,
  updateInterest,
  deleteInterest
} from '../controllers/interestController.js';

const router = express.Router();

router.get('/', getAllInterests);
router.post('/', createInterest);
router.put('/:id', updateInterest);
router.delete('/:id', deleteInterest);

export default router;
