import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { Truck, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';

const Checkout = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const { addOrder } = useOrders();
    const navigate = useNavigate();

    const [orderType, setOrderType] = useState('delivery'); // 'delivery' or 'takeaway'
    const [isOrderComplete, setIsOrderComplete] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);

        // Simulate payment processing
        setTimeout(() => {
            const order = {
                items: cart,
                total: getCartTotal() + (orderType === 'delivery' ? 40 : 0),
                type: orderType,
                shippingDetails: {
                    name: formData.name,
                    phone: formData.phone,
                    address: orderType === 'delivery' ? formData.address : 'Takeaway - No Address'
                }
            };
            addOrder(order);
            clearCart();
            setIsOrderComplete(true);
            setIsSubmitting(false);
        }, 1500);
    };

    if (cart.length === 0 && !isOrderComplete) {
        navigate('/menu');
        return null;
    }

    if (isOrderComplete) {
        return (
            <div className="checkout-page page-container">
                <div className="order-success-card">
                    <CheckCircle size={64} color="#2ed573" />
                    <h1>Thank You for Ordering!</h1>
                    <p className="success-message">
                        {orderType === 'delivery'
                            ? "Your item will be delivered in 40 minutes."
                            : "Your item will be ready in 30 minutes. Kindly collect it from the restaurant."}
                    </p>
                    <button onClick={() => navigate('/orders')} className="btn btn-primary">
                        View My Orders <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page page-container">
            <h1>Checkout</h1>
            <div className="checkout-container">
                <form onSubmit={handleSubmit} className="checkout-form">

                    {/* Order Type Selection */}
                    <div className="form-section">
                        <h2>Order Type</h2>
                        <div className="order-type-selector">
                            <button
                                type="button"
                                className={`type-btn ${orderType === 'delivery' ? 'active' : ''}`}
                                onClick={() => setOrderType('delivery')}
                            >
                                <Truck size={24} />
                                <span>Delivery</span>
                            </button>
                            <button
                                type="button"
                                className={`type-btn ${orderType === 'takeaway' ? 'active' : ''}`}
                                onClick={() => setOrderType('takeaway')}
                            >
                                <ShoppingBag size={24} />
                                <span>Takeaway</span>
                            </button>
                        </div>
                    </div>

                    <div className="form-section">
                        <h2>Contact Details</h2>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        {orderType === 'delivery' && (
                            <div className="form-group">
                                <label>Delivery Address</label>
                                <textarea
                                    name="address"
                                    required
                                    value={formData.address}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        )}
                    </div>

                    <div className="form-section">
                        <h2>Payment Details</h2>
                        <div className="form-group">
                            <label>Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="0000 0000 0000 0000"
                                required
                                value={formData.cardNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Expiry Date</label>
                                <input
                                    type="text"
                                    name="expiry"
                                    placeholder="MM/YY"
                                    required
                                    value={formData.expiry}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="123"
                                    required
                                    value={formData.cvv}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary place-order-btn"
                        disabled={isSubmitting}
                        style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                    >
                        {isSubmitting ? 'Processing...' : `Pay ₹${getCartTotal() + (orderType === 'delivery' ? 40 : 0)} & Place Order`}
                    </button>
                </form>

                <div className="order-summary-sidebar">
                    <h3>Order Summary</h3>
                    {cart.map(item => (
                        <div key={item.id} className="summary-item">
                            <span>{item.name} x {item.quantity}</span>
                            <span>₹{item.price * item.quantity}</span>
                        </div>
                    ))}
                    <div className="summary-divider"></div>
                    {orderType === 'delivery' && (
                        <div className="summary-row">
                            <span>Delivery Fee</span>
                            <span>₹40</span>
                        </div>
                    )}
                    <div className="summary-row total">
                        <span>Total to Pay</span>
                        <span>₹{getCartTotal() + (orderType === 'delivery' ? 40 : 0)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
