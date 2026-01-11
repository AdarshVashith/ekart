import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import api from "../services/api";

export const AppContext = createContext(null);
const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isSeller, setIsSeller] = useState(null);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    const fetchProducts = async () => {
        try {
            const data = await api.getProducts();
            setProducts(data.length > 0 ? data : dummyProducts);
        } catch (error) {
            setProducts(dummyProducts);
        }
    }

    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]) {
            cartData[itemId]++;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Added to Cart!")
    }

    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartItems[itemId]) {
            cartData[itemId]--;
            if(cartData[itemId]<=0) {
                delete cartData[itemId];
            }
        }
        setCartItems(cartData);
        toast.success("Removed from Cart!")
    }

    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if(quantity===0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData);
        toast.success("Cart Updated!")
    }

    const totalCartItems = () => {
        let count = 0;
        for(const item in cartItems) {
            count+=cartItems[item];
        }
        return count;
    }

    const totalCartAmount = () => {
        let amount = 0;
        for(const item in cartItems) {
            let itemInfo = products.find((product) => product._id===item);
            amount+= cartItems[item]*itemInfo.offerPrice;
        }
        return amount;
    }

    const login = async (email, password) => {
        try {
            const result = await api.login(email, password);
            if (result.token) {
                setUser(result.user);
                setToken(result.token);
                localStorage.setItem('token', result.token);
                return { success: true };
            }
            return { success: false, message: result.message };
        } catch (error) {
            return { success: false, message: 'Login failed' };
        }
    };

    const register = async (name, email, password) => {
        try {
            const result = await api.register(name, email, password);
            if (result.token) {
                setUser(result.user);
                setToken(result.token);
                localStorage.setItem('token', result.token);
                return { success: true };
            }
            return { success: false, message: result.message };
        } catch (error) {
            return { success: false, message: 'Registration failed' };
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        fetchProducts();
        // Check for existing token on app load
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken);
        }
        // Check for Google auth success
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('auth') === 'success') {
            const name = urlParams.get('name') || 'Google User';
            const email = urlParams.get('email') || 'user@gmail.com';
            setUser({ name, email });
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    const value = {
        navigate,
        user,
        setUser,
        token,
        setToken,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItem,
        totalCartItems,
        totalCartAmount,
        searchQuery,
        setSearchQuery,
        api,
        login,
        register,
        logout,
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;