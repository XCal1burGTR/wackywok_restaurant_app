import React from 'react';
import { useOrders } from '../context/OrderContext';
import { Clock, CheckCircle } from 'lucide-react';

const Orders = () => {
    const { orders } = useOrders();

    return (
        <div className="orders-page page-container">
            <h1>My Orders</h1>
            <div className="orders-list">
                {orders.length === 0 ? (
                    <p>No past orders found.</p>
                ) : (
                    orders.map(order => (
                        <div key={order.id} className="order-card">
                            <div className="order-header">
                                <div className="order-id">
                                    <h3>Order #{order.id.slice(-6)}</h3>
                                    <span className="order-date">{new Date(order.date).toLocaleDateString()}</span>
                                </div>
                                <div className="order-status">
                                    <Clock size={16} /> {order.status}
                                </div>
                            </div>
                            <div className="order-items">
                                {order.items.map(item => (
                                    <div key={item.id} className="order-item-row">
                                        <span>{item.quantity}x {item.name}</span>
                                        <span>₹{item.price * item.quantity}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="order-footer">
                                <span>Total Paid</span>
                                <span className="order-total">₹{order.total}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Orders;
