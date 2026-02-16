require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

// Import models (this ensures tables are registered with Sequelize)
require('./models/Admin');
require('./models/Contact');

// Import routes
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
// (later you can add adminRoutes as well)

const app = express();

// Enable CORS for all origins in production
app.use(cors({
  origin: '*', // Allow all origins in development; you can specify your frontend URL in production
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('PostgreSQL backend is running!');
});
// API routes
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

// Sync DB and start server
sequelize.sync({ alter: true }) // alter:true keeps schema updated
  .then(() => {
    console.log('Database connected successfull');
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.error('DB connection error:', err));
