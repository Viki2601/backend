const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const jobRoutes = require('./routes/jobRoutes');

const app = express();

// Middleware - Remove duplicate cors() call
app.use(cors({
  origin: ['https://mai-corporation.vercel.app'] // Removed trailing slash
}));
app.use(express.json());

// Routes
app.use("/api", jobRoutes);

// Static files - WARNING: This won't persist on Vercel
// app.use('/uploads', express.static('uploads')); // Remove or replace with cloud storage

// Connect to MongoDB with improved configuration
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10, // Adjust based on your needs
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// For Vercel deployment, export the app instead of listening directly
module.exports = app;

// Only listen locally when not in production
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}