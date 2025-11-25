import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const MenuSection = ({ title, items }) => {
    const { addToCart } = useCart();

    return (
        <div className="menu-section" id={title.toLowerCase().replace(/\s+/g, '-')}>
            <h2 className="section-title">{title}</h2>
            <div className="menu-grid">
                {items.map((item) => (
                    <div key={item.id} className="menu-item-card">
                        {item.image && (
                            <div className="menu-item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                        )}
                        <div className="menu-item-content">
                            <div className="menu-item-header">
                                <div className="item-name-type">
                                    <span className={`veg-indicator ${item.type}`}></span>
                                    <h3>{item.name}</h3>
                                </div>
                                <span className="item-price">₹{item.price}</span>
                            </div>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => addToCart(item)}
                            >
                                Add <Plus size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuSection;
