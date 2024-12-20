const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

module.exports = app;
