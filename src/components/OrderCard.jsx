import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, Printer, Phone, MapPin, User } from 'lucide-react';

const OrderCard = ({ order }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const printBill = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Bill - Order #${order.id}</title>
                    <style>
                        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 20px; color: #333; }
                        .header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 20px; }
                        .header h1 { margin: 0; color: #ff4757; }
                        .header p { margin: 5px 0; color: #666; }
                        .order-info { margin-bottom: 20px; }
                        .order-info h3 { margin: 0 0 10px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
                        .info-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
                        .items-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                        .items-table th { text-align: left; border-bottom: 1px solid #ddd; padding: 10px 0; }
                        .items-table td { padding: 10px 0; border-bottom: 1px solid #eee; }
                        .total-section { text-align: right; font-size: 1.2rem; font-weight: bold; margin-top: 20px; border-top: 2px solid #eee; padding-top: 10px; }
                        .footer { text-align: center; margin-top: 40px; font-size: 0.8rem; color: #999; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>WackyWok</h1>
                        <p>Authentic Indian-Chinese Fusion</p>
                    </div>
                    
                    <div class="order-info">
                        <h3>Order Details</h3>
                        <div class="info-row"><span>Order ID:</span> <strong>#${order.id}</strong></div>
                        <div class="info-row"><span>Date:</span> <span>${new Date(order.date).toLocaleString()}</span></div>
                        <div class="info-row"><span>Type:</span> <span>${order.type === 'delivery' ? 'Delivery' : 'Takeaway'}</span></div>
                        <div class="info-row"><span>Status:</span> <span>${order.status}</span></div>
                    </div>

                    <div class="order-info">
                        <h3>Customer Details</h3>
                        <div class="info-row"><span>Name:</span> <span>${order.shippingDetails?.name || 'N/A'}</span></div>
                        <div class="info-row"><span>Phone:</span> <span>${order.shippingDetails?.phone || 'N/A'}</span></div>
                        ${order.type === 'delivery' ? `<div class="info-row"><span>Address:</span> <span>${order.shippingDetails?.address || 'N/A'}</span></div>` : ''}
                    </div>

                    <h3>Items</h3>
                    <table class="items-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Qty</th>
                                <th style="text-align: right;">Price</th>
                                <th style="text-align: right;">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${order.items.map(item => `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>${item.quantity}</td>
                                    <td style="text-align: right;">₹${item.price}</td>
                                    <td style="text-align: right;">₹${item.price * item.quantity}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>

                    <div class="total-section">
                        ${order.deliveryFee > 0 ? `<div class="info-row" style="font-size: 1rem; font-weight: normal;"><span>Delivery Fee:</span> <span>₹${order.deliveryFee}</span></div>` : ''}
                        <div class="info-row"><span>Total Amount:</span> <span>₹${order.total}</span></div>
                    </div>

                    <div class="footer">
                        <p>Thank you for dining with WackyWok!</p>
                        <p>This is a computer generated receipt.</p>
                    </div>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div className={`order-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand} style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}>
            <div className="order-header">
                <div className="order-id">
                    <h3>Order #{order.id} <span style={{ fontSize: '0.8rem', color: '#666', marginLeft: '0.5rem' }}>({order.type === 'delivery' ? 'Delivery' : 'Takeaway'})</span></h3>
                    <span className="order-date">{new Date(order.date).toLocaleString()}</span>
                </div>
                <div className="order-status-group" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="order-status">
                        <Clock size={16} /> {order.status}
                    </div>
                    {isExpanded ? <ChevronUp size={20} color="#666" /> : <ChevronDown size={20} color="#666" />}
                </div>
            </div>

            {/* Always show total in collapsed view if not expanded, or maybe just keep header simple */}
            {!isExpanded && (
                <div className="order-footer-preview" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', color: '#666' }}>
                    <span>{order.items.length} items</span>
                    <span style={{ fontWeight: 'bold', color: '#2f3542' }}>₹{order.total}</span>
                </div>
            )}

            {isExpanded && (
                <div className="order-details-expanded" onClick={(e) => e.stopPropagation()} style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem', cursor: 'default' }}>

                    <div className="customer-details" style={{ marginBottom: '1.5rem', background: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
                        <h4 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={16} /> Customer Details</h4>
                        <p><strong>Name:</strong> {order.shippingDetails?.name}</p>
                        <p><strong>Phone:</strong> {order.shippingDetails?.phone}</p>
                        {order.type === 'delivery' && (
                            <p style={{ marginTop: '0.5rem' }}><strong><MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Address:</strong> {order.shippingDetails?.address}</p>
                        )}
                    </div>

                    <div className="order-items">
                        <h4 style={{ marginBottom: '0.5rem' }}>Items</h4>
                        {order.items.map(item => (
                            <div key={item.id} className="order-item-row">
                                <span>{item.quantity}x {item.name}</span>
                                <span>₹{item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>

                    {order.deliveryFee > 0 && (
                        <div className="order-item-row" style={{ borderTop: '1px dashed #eee', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                            <span>Delivery Fee</span>
                            <span>₹{order.deliveryFee}</span>
                        </div>
                    )}

                    <div className="order-footer" style={{ marginTop: '1rem', borderTop: '2px solid #eee', paddingTop: '1rem' }}>
                        <span>Total Paid</span>
                        <span className="order-total">₹{order.total}</span>
                    </div>

                    <div className="order-actions" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            onClick={printBill}
                            className="btn"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                background: '#2f3542',
                                color: 'white',
                                borderRadius: '4px',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <Printer size={18} /> Print Bill
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderCard;
