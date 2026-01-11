const API_BASE_URL = 'http://localhost:5001/api';

const api = {
  // Auth
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },

  register: async (name, email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },

  // Products
  getProducts: async (category = '', search = '') => {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (search) params.append('search', search);
    
    const response = await fetch(`${API_BASE_URL}/products?${params}`);
    return response.json();
  },

  getProduct: async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return response.json();
  },

  // Orders
  createOrder: async (orderData, token) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(orderData)
    });
    return response.json();
  },

  getOrders: async (token) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  }
};

export default api;