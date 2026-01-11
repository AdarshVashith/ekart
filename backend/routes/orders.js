import express from 'express';
import Order from '../models/Order.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Create order
router.post('/', auth, async (req, res) => {
  try {
    const order = new Order({
      userId: req.user._id,
      ...req.body
    });
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user orders
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).populate('items.productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;