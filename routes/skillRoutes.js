import express from 'express';
import {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill
} from '../controllers/skillController.js';

const router = express.Router();

router.get('/', getAllSkills);
router.post('/', createSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;
