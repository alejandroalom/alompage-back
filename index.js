import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import projectRoutes from './routes/projectRoutes.js';
import educationRoutes from './routes/educationRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import softwareRoutes from './routes/softwareRoutes.js';
import interestRoutes from './routes/interestRoutes.js'; // ✅ NUEVO

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'views/dashboard')));

app.use('/api/projects', projectRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/software', softwareRoutes);
app.use('/api/interests', interestRoutes); // ✅ NUEVO

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/dashboard/index.html'));
});

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🟢 Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('🔴 Error al conectar con MongoDB:', err));

