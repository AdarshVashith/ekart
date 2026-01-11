import express from 'express';
import User from '../models/User.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get cart (stored in user session/localStorage on frontend)
router.get('/', auth, (req, res) => {
  res.json({ message: 'Cart managed on frontend' });
});

// Add address
router.post('/address', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.addresses.push(req.body);
    await user.save();
    res.json({ addresses: user.addresses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get addresses
router.get('/addresses', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ addresses: user.addresses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;