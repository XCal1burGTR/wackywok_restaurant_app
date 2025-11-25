import React from 'react';
import { useOrders } from '../context/OrderContext';
import OrderCard from '../components/OrderCard';
import { User as UserIcon, MapPin, CreditCard, Clock, Package } from 'lucide-react';

const User = () => {
    const { orders } = useOrders();

    // Mock User Data
    const user = {
        name: "Rakesh Biswal",
        email: "rakesh.biswal@gmail.com",
        phone: "+91 81143 68224",
        avatar: "https://ui-avatars.com/api/?name=Rakesh+Biswal&background=ff4757&color=fff"
    };

    const savedAddresses = [
        {
            id: 1,
            type: "Home",
            address: "Nayapalli, Bhubaneswar"
        },
        {
            id: 2,
            type: "Work",
            address: "Patia, Bhubaneswar"
        }
    ];

    const savedCards = [
        {
            id: 1,
            type: "Visa",
            number: "**** **** **** 4242",
            expiry: "12/25"
        },
        {
            id: 2,
            type: "Mastercard",
            number: "**** **** **** 8888",
            expiry: "09/24"
        }
    ];

    return (
        <div className="user-page page-container">
            <div className="user-header">
                <img src={user.avatar} alt={user.name} className="user-avatar" />
                <div className="user-info">
                    <h1>{user.name}</h1>
                    <p>{user.email} • {user.phone}</p>
                </div>
            </div>

            <div className="user-content-grid">
                <div className="user-sidebar">
                    <div className="info-card">
                        <h2><MapPin size={20} /> Saved Addresses</h2>
                        <div className="list-container">
                            {savedAddresses.map(addr => (
                                <div key={addr.id} className="list-item">
                                    <span className="item-tag">{addr.type}</span>
                                    <p>{addr.address}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="info-card">
                        <h2><CreditCard size={20} /> Saved Cards</h2>
                        <div className="list-container">
                            {savedCards.map(card => (
                                <div key={card.id} className="list-item">
                                    <span className="item-tag">{card.type}</span>
                                    <p>{card.number}</p>
                                    <span className="card-expiry">Exp: {card.expiry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="user-main">
                    <h2><Package size={20} /> My Orders</h2>
                    <div className="orders-list">
                        {orders.length === 0 ? (
                            <div className="no-orders">
                                <p>No past orders found.</p>
                            </div>
                        ) : (
                            orders.map(order => (
                                <OrderCard key={order.id} order={order} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
