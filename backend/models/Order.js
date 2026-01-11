import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    price: Number
  }],
  amount: { type: Number, required: true },
  address: {
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    phone: String
  },
  status: { type: String, default: 'Order Placed' },
  paymentType: { type: String, enum: ['COD', 'Online'] },
  isPaid: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);