import mongoose from 'mongoose';
import Product from './models/Product.js';
import Order from './models/Order.js';
import User from './models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const generateProducts = () => {
  const productData = [
    // Vegetables
    { name: 'Fresh Potatoes 1kg', category: 'Vegetables', price: 30, image: 'https://cdn.pixabay.com/photo/2016/08/11/08/04/potatoes-1585060_1280.jpg' },
    { name: 'Ripe Tomatoes 1kg', category: 'Vegetables', price: 40, image: 'https://cdn.pixabay.com/photo/2017/10/06/17/17/tomato-2823826_1280.jpg' },
    { name: 'Red Onions 1kg', category: 'Vegetables', price: 25, image: 'https://cdn.pixabay.com/photo/2016/03/05/22/59/onion-1239423_1280.jpg' },
    { name: 'Fresh Carrots 500g', category: 'Vegetables', price: 35, image: 'https://cdn.pixabay.com/photo/2016/07/10/20/57/carrots-1508847_1280.jpg' },
    { name: 'Green Spinach 500g', category: 'Vegetables', price: 20, image: 'https://cdn.pixabay.com/photo/2016/03/05/22/59/spinach-1239333_1280.jpg' },
    { name: 'Fresh Broccoli 500g', category: 'Vegetables', price: 45, image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg' },
    { name: 'Green Cabbage 1kg', category: 'Vegetables', price: 30, image: 'https://cdn.pixabay.com/photo/2017/09/26/13/42/cabbage-2789823_1280.jpg' },
    { name: 'Bell Peppers 500g', category: 'Vegetables', price: 60, image: 'https://cdn.pixabay.com/photo/2016/08/26/17/12/bell-pepper-1622332_1280.jpg' },
    { name: 'Fresh Cucumber 1kg', category: 'Vegetables', price: 25, image: 'https://cdn.pixabay.com/photo/2016/12/06/18/27/cucumber-1887140_1280.jpg' },
    { name: 'Green Lettuce 500g', category: 'Vegetables', price: 40, image: 'https://cdn.pixabay.com/photo/2017/05/04/16/37/salad-2282803_1280.jpg' },
    
    // Fruits
    { name: 'Red Apples 1kg', category: 'Fruits', price: 120, image: 'https://cdn.pixabay.com/photo/2016/11/30/15/00/apples-1873078_1280.jpg' },
    { name: 'Yellow Bananas 1kg', category: 'Fruits', price: 50, image: 'https://cdn.pixabay.com/photo/2016/04/15/08/04/bananas-1330702_1280.jpg' },
    { name: 'Fresh Oranges 1kg', category: 'Fruits', price: 80, image: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg' },
    { name: 'Sweet Mangoes 1kg', category: 'Fruits', price: 150, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/mango-2367029_1280.jpg' },
    { name: 'Purple Grapes 500g', category: 'Fruits', price: 70, image: 'https://cdn.pixabay.com/photo/2016/09/10/17/18/grapes-1659118_1280.jpg' },
    { name: 'Fresh Strawberries 500g', category: 'Fruits', price: 200, image: 'https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberries-1330459_1280.jpg' },
    { name: 'Sweet Pineapple 1pc', category: 'Fruits', price: 100, image: 'https://cdn.pixabay.com/photo/2016/12/06/18/27/pineapple-1887303_1280.jpg' },
    { name: 'Fresh Watermelon 1pc', category: 'Fruits', price: 80, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/watermelon-2367029_1280.jpg' },
    { name: 'Ripe Papaya 1kg', category: 'Fruits', price: 60, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/papaya-2367029_1280.jpg' },
    { name: 'Green Kiwi 500g', category: 'Fruits', price: 180, image: 'https://cdn.pixabay.com/photo/2016/03/05/22/59/kiwi-1239422_1280.jpg' },
    
    // Dairy
    { name: 'Fresh Milk 1L', category: 'Dairy', price: 60, image: 'https://cdn.pixabay.com/photo/2017/07/18/15/40/milk-2516052_1280.jpg' },
    { name: 'Cheddar Cheese 200g', category: 'Dairy', price: 140, image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cheese-1869708_1280.jpg' },
    { name: 'Fresh Butter 500g', category: 'Dairy', price: 200, image: 'https://cdn.pixabay.com/photo/2016/12/06/18/27/butter-1887140_1280.jpg' },
    { name: 'Greek Yogurt 500g', category: 'Dairy', price: 80, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/yogurt-2367029_1280.jpg' },
    { name: 'Fresh Paneer 250g', category: 'Dairy', price: 90, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/paneer-2367029_1280.jpg' },
    { name: 'Farm Eggs 12pcs', category: 'Dairy', price: 90, image: 'https://cdn.pixabay.com/photo/2017/03/23/19/33/eggs-2169518_1280.jpg' },
    { name: 'Vanilla Ice Cream 500ml', category: 'Dairy', price: 150, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/ice-cream-2367029_1280.jpg' },
    { name: 'Heavy Cream 200ml', category: 'Dairy', price: 120, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/cream-2367029_1280.jpg' },
    { name: 'Pure Ghee 500g', category: 'Dairy', price: 400, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/ghee-2367029_1280.jpg' },
    { name: 'Cottage Cheese 200g', category: 'Dairy', price: 100, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/cottage-cheese-2367029_1280.jpg' },
    
    // Drinks
    { name: 'Coca Cola 1.5L', category: 'Drinks', price: 80, image: 'https://cdn.pixabay.com/photo/2014/09/26/19/51/coca-cola-462776_1280.jpg' },
    { name: 'Pepsi Cola 1.5L', category: 'Drinks', price: 78, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/pepsi-2367029_1280.jpg' },
    { name: 'Sprite Lemon 1.5L', category: 'Drinks', price: 79, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/sprite-2367029_1280.jpg' },
    { name: 'Orange Juice 1L', category: 'Drinks', price: 120, image: 'https://cdn.pixabay.com/photo/2017/05/12/08/29/orange-juice-2306618_1280.jpg' },
    { name: 'Apple Juice 1L', category: 'Drinks', price: 130, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/apple-juice-2367029_1280.jpg' },
    { name: 'Mineral Water 1L', category: 'Drinks', price: 20, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/water-2367029_1280.jpg' },
    { name: 'Energy Drink 250ml', category: 'Drinks', price: 100, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/energy-drink-2367029_1280.jpg' },
    { name: 'Premium Tea 250g', category: 'Drinks', price: 150, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/tea-2367029_1280.jpg' },
    { name: 'Arabica Coffee 200g', category: 'Drinks', price: 300, image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/coffee-1869708_1280.jpg' },
    { name: 'Green Tea 100g', category: 'Drinks', price: 200, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/green-tea-2367029_1280.jpg' },
    
    // Bakery
    { name: 'White Bread 400g', category: 'Bakery', price: 30, image: 'https://cdn.pixabay.com/photo/2017/06/23/23/57/bread-2435935_1280.jpg' },
    { name: 'Whole Wheat Bread 400g', category: 'Bakery', price: 40, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/bread-2367029_1280.jpg' },
    { name: 'Butter Croissants 6pcs', category: 'Bakery', price: 120, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/croissant-2367029_1280.jpg' },
    { name: 'Blueberry Muffins 4pcs', category: 'Bakery', price: 100, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/muffin-2367029_1280.jpg' },
    { name: 'Chocolate Cake 500g', category: 'Bakery', price: 350, image: 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg' },
    { name: 'Chocolate Cookies 200g', category: 'Bakery', price: 80, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/cookies-2367029_1280.jpg' },
    { name: 'Glazed Donuts 6pcs', category: 'Bakery', price: 150, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/donut-2367029_1280.jpg' },
    { name: 'Sesame Bagels 4pcs', category: 'Bakery', price: 120, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/bagel-2367029_1280.jpg' },
    { name: 'Danish Pastries 4pcs', category: 'Bakery', price: 200, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/pastry-2367029_1280.jpg' },
    { name: 'Digestive Biscuits 300g', category: 'Bakery', price: 60, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/biscuits-2367029_1280.jpg' },
    
    // Grains
    { name: 'Basmati Rice 5kg', category: 'Grains', price: 550, image: 'https://cdn.pixabay.com/photo/2016/10/25/13/29/rice-1768808_1280.jpg' },
    { name: 'Wheat Flour 5kg', category: 'Grains', price: 250, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/flour-2367029_1280.jpg' },
    { name: 'Rolled Oats 1kg', category: 'Grains', price: 200, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/oats-2367029_1280.jpg' },
    { name: 'Organic Quinoa 500g', category: 'Grains', price: 450, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/quinoa-2367029_1280.jpg' },
    { name: 'Pearl Barley 1kg', category: 'Grains', price: 150, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/barley-2367029_1280.jpg' },
    { name: 'Brown Rice 1kg', category: 'Grains', price: 120, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/brown-rice-2367029_1280.jpg' },
    { name: 'Sweet Corn 1kg', category: 'Grains', price: 80, image: 'https://cdn.pixabay.com/photo/2016/08/11/08/04/corn-1585060_1280.jpg' },
    { name: 'Finger Millet 1kg', category: 'Grains', price: 100, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/millet-2367029_1280.jpg' },
    { name: 'Rye Flour 1kg', category: 'Grains', price: 180, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/rye-2367029_1280.jpg' },
    { name: 'Buckwheat 1kg', category: 'Grains', price: 220, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/buckwheat-2367029_1280.jpg' },
    
    // Instant
    { name: 'Instant Noodles 280g', category: 'Instant', price: 55, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/noodles-2367029_1280.jpg' },
    { name: 'Penne Pasta 500g', category: 'Instant', price: 120, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/pasta-2367029_1280.jpg' },
    { name: 'Tomato Soup 4pcs', category: 'Instant', price: 80, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/soup-2367029_1280.jpg' },
    { name: 'Ready Meal 300g', category: 'Instant', price: 150, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/ready-meal-2367029_1280.jpg' },
    { name: 'Instant Rice 1kg', category: 'Instant', price: 200, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/instant-rice-2367029_1280.jpg' },
    { name: 'Corn Flakes 500g', category: 'Instant', price: 250, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/cereal-2367029_1280.jpg' },
    { name: 'Crunchy Granola 400g', category: 'Instant', price: 300, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/granola-2367029_1280.jpg' },
    { name: 'Wheat Crackers 200g', category: 'Instant', price: 60, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/crackers-2367029_1280.jpg' },
    { name: 'Potato Chips 150g', category: 'Instant', price: 40, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/chips-2367029_1280.jpg' },
    { name: 'Butter Popcorn 100g', category: 'Instant', price: 50, image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/popcorn-2367029_1280.jpg' }
  ];
  
  return productData.map(item => {
    const discount = Math.floor(Math.random() * 20) + 5;
    return {
      ...item,
      offerPrice: item.price - discount,
      image: [item.image],
      rating: Math.floor(Math.random() * 5) + 1,
      description: [`Fresh ${item.name.toLowerCase()}`, 'High quality', 'Best price'],
      inStock: Math.random() > 0.05
    };
  });
};

const products = generateProducts();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/grabit');
    
    // Clear existing data
    await Product.deleteMany({});
    await Order.deleteMany({});
    await User.deleteMany({});
    
    // Insert products
    const insertedProducts = await Product.insertMany(products);
    
    // Create dummy user
    const dummyUser = new User({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    });
    await dummyUser.save();
    
    // Create dummy orders
    const orders = [
      {
        userId: dummyUser._id,
        items: [
          {
            productId: insertedProducts[0]._id,
            quantity: 2,
            price: insertedProducts[0].offerPrice
          },
          {
            productId: insertedProducts[1]._id,
            quantity: 1,
            price: insertedProducts[1].offerPrice
          }
        ],
        amount: 150,
        address: {
          firstName: 'John',
          lastName: 'Doe',
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipcode: '10001',
          country: 'US',
          phone: '1234567890'
        },
        status: 'Order Placed',
        paymentType: 'COD',
        isPaid: false
      },
      {
        userId: dummyUser._id,
        items: [
          {
            productId: insertedProducts[2]._id,
            quantity: 3,
            price: insertedProducts[2].offerPrice
          }
        ],
        amount: 165,
        address: {
          firstName: 'John',
          lastName: 'Doe',
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipcode: '10001',
          country: 'US',
          phone: '1234567890'
        },
        status: 'Delivered',
        paymentType: 'Online',
        isPaid: true
      }
    ];
    
    await Order.insertMany(orders);
    
    console.log('Database seeded successfully with products, users, and orders');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();