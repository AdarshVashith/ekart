# GrabIt Backend

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Setup**
   - Update `.env` file with your MongoDB connection string
   - Set JWT_SECRET to a secure random string

3. **Database Setup**
   - Install MongoDB locally or use MongoDB Atlas
   - Run seed script to populate products:
   ```bash
   node seed.js
   ```

4. **Start Server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

### Orders
- `POST /api/orders` - Create new order (protected)
- `GET /api/orders` - Get user orders (protected)

### Cart
- `POST /api/cart/address` - Add user address (protected)
- `GET /api/cart/addresses` - Get user addresses (protected)

## Frontend Integration

The frontend has been updated to:
- Connect to backend API
- Handle authentication with JWT tokens
- Fetch products from database
- Maintain cart state locally (as before)

## Next Steps

1. Install backend dependencies: `npm install`
2. Start MongoDB service
3. Run seed script: `node seed.js`
4. Start backend: `npm run dev`
5. Update frontend API_BASE_URL if needed