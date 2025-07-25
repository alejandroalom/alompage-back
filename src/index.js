const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas estáticas para scripts y estilos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas API
app.use('/education', require('./routes/educationRoutes'));
app.use('/experience', require('./routes/experienceRoutes'));
app.use('/skill', require('./routes/skillRoutes'));
app.use('/course', require('./routes/courseRoutes'));
app.use('/language', require('./routes/languageRoutes'));
app.use('/software', require('./routes/softwareRoutes'));
app.use('/interest', require('./routes/interestRoutes'));

// Redirección por defecto al dashboard
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/dashboard/index.html'));
});

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error conectando a MongoDB:', err);
  });





