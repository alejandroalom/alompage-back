import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import projectRoutes from './routes/projectRoutes.js';
import educationRoutes from './routes/educationRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/projects', projectRoutes);
app.use('/api/education', educationRoutes);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('🟢 Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`🟢 Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('🔴 Error al conectar con MongoDB:', err));



