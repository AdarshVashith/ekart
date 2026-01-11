import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/orders.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/grabit')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working' });
});

// Mock Google OAuth for demo
app.get('/api/auth/google', (req, res) => {
  console.log('Mock Google auth triggered');
  // Simulate Google OAuth success
  res.redirect('http://localhost:5173?auth=success&name=Demo User&email=demo@example.com');
});

app.get('/api/auth/google/callback', (req, res) => {
  res.redirect('http://localhost:5173?auth=success');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});