import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="item-price">₹{item.price}</p>
            </div>
            <div className="cart-item-actions">
                <div className="quantity-controls">
                    <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="qty-btn"
                    >
                        <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="qty-btn"
                    >
                        <Plus size={16} />
                    </button>
                </div>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
