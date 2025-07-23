import express from 'express';
import {
  getAllExperience,
  createExperience,
  updateExperience,
  deleteExperience
} from '../controllers/experienceController.js';

const router = express.Router();

router.get('/', getAllExperience);
router.post('/', createExperience);
router.put('/:id', updateExperience);
router.delete('/:id', deleteExperience);

export default router;


