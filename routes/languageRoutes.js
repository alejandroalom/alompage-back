import express from 'express';
import {
  getAllLanguages,
  createLanguage,
  updateLanguage,
  deleteLanguage
} from '../controllers/languageController.js';

const router = express.Router();

router.get('/', getAllLanguages);
router.post('/', createLanguage);
router.put('/:id', updateLanguage);
router.delete('/:id', deleteLanguage);

export default router;


