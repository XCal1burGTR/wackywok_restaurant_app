import React from 'react';
import { useOrders } from '../context/OrderContext';
import OrderCard from '../components/OrderCard';
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
                        <OrderCard key={order.id} order={order} />
                    ))
                )}
            </div >
        </div >
    );
};

export default Orders;
