import express from 'express';
import {
  getAllSoftware,
  createSoftware,
  updateSoftware,
  deleteSoftware
} from '../controllers/softwareController.js';

const router = express.Router();

router.get('/', getAllSoftware);
router.post('/', createSoftware);
router.put('/:id', updateSoftware);
router.delete('/:id', deleteSoftware);

export default router;

