# GrabIt - E-commerce Grocery Application

A full-stack e-commerce grocery application built with React.js and Node.js.

## Features

- 🛒 Shopping cart functionality
- 🔐 User authentication (Email/Password + Google OAuth)
- 💳 Payment integration (Razorpay)
- 📱 Responsive design
- 🏪 70+ products across 7 categories
- 🔍 Product search and filtering
- 📦 Order management

## Tech Stack

### Frontend
- React 19.1.0
- TailwindCSS 4.1.7
- React Router DOM
- React Hot Toast
- Vite

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## Project Structure

```
Ekart/
├── GrabIt/          # Frontend (React)
├── backend/         # Backend (Node.js)
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB
- Git

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Configure your environment variables
node seed.js          # Seed database with sample data
npm start             # Start server on port 5001
```

### Frontend Setup
```bash
cd GrabIt
npm install
npm run dev           # Start development server on port 5173
```

### Environment Variables
Create `.env` file in backend directory:
```
PORT=5001
MONGODB_URI=mongodb://localhost:27017/grabit
JWT_SECRET=your_jwt_secret_key
SESSION_SECRET=your_session_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders

## Features Overview

### Product Categories
- Vegetables
- Fruits
- Dairy
- Drinks
- Bakery
- Grains
- Instant Food

### Payment Methods
- Cash on Delivery (COD)
- Online Payment (Razorpay)

### Authentication
- Email/Password registration and login
- Google OAuth integration
- JWT token-based authentication

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.