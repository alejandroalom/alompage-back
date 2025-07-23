import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import path from 'path';
import { fileURLToPath } from 'url';


import educationRoutes from './routes/educationRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import interestRoutes from './routes/interestRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import languageRoutes from './routes/languageRoutes.js';
import softwareRoutes from './routes/softwareRoutes.js';


dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use('/education', educationRoutes);
app.use('/experience', experienceRoutes);
app.use('/skills', skillRoutes);
app.use('/interests', interestRoutes);
app.use('/courses', courseRoutes);
app.use('/languages', languageRoutes);
app.use('/software', softwareRoutes);

app.use(express.static(path.join(__dirname, 'views/dashboard')));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/dashboard/index.html'));
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('🟢 Conectado a MongoDB'))
  .catch(err => console.error('🔴 Error al conectar a MongoDB:', err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🟢 Servidor escuchando en http://localhost:${PORT}`);
});




