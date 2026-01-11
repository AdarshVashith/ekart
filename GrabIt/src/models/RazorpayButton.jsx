import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const RazorpayButton = () => {
    const { totalCartAmount, cartItems, api, token, user, setCartItems } = useContext(AppContext);

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        const res = await loadRazorpay();
        if (!res) {
            toast.error('Razorpay SDK failed to load');
            return;
        }

        const options = {
            key: 'rzp_test_1DP5mmOlF5G5ag', // Dummy test key
            amount: Math.floor(totalCartAmount() * 102), // Amount in paise
            currency: 'INR',
            name: 'GrabIt',
            description: 'Grocery Purchase',
            handler: async (response) => {
                try {
                    toast.success('Payment successful! Order placed.');
                    setCartItems({});
                } catch (error) {
                    toast.error('Order creation failed');
                }
            },
            prefill: {
                name: user?.name || 'Customer',
                email: user?.email || 'customer@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#6366f1'
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <button 
            onClick={handlePayment}
            className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
        >
            Pay Now
        </button>
    );
};

export default RazorpayButton;