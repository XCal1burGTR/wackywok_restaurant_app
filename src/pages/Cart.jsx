import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="cart-page page-container empty-cart">
                <ShoppingBag size={64} className="empty-icon" />
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything yet.</p>
                <Link to="/menu" className="btn btn-primary">Browse Menu</Link>
            </div>
        );
    }

    return (
        <div className="cart-page page-container">
            <h1>Your Cart</h1>
            <div className="cart-content">
                <div className="cart-items-list">
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{getCartTotal()}</span>
                    </div>
                    <div className="summary-row">
                        <span>Delivery Fee</span>
                        <span>₹40</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>₹{getCartTotal() + 40}</span>
                    </div>
                    <button
                        onClick={() => navigate('/checkout')}
                        className="btn btn-primary checkout-btn"
                    >
                        Proceed to Checkout <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
