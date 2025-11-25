import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Experience the Best of <br /><span className="highlight">Indian-Chinese</span> Cuisine</h1>
                    <p>Authentic flavors, fresh ingredients, and a wacky twist on your favorites. Delivered hot to your doorstep.</p>
                    <div className="hero-buttons">
                        <Link to="/menu" className="btn btn-primary">Order Now <ArrowRight size={20} /></Link>
                        <Link to="/about" className="btn btn-secondary">Learn More</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80" alt="Delicious Chinese Food" />
                </div>
            </section>

            {/* Features Section */}
            <section className="features page-container">
                <div className="feature-card">
                    <div className="feature-icon"><Star size={32} /></div>
                    <h3>Premium Quality</h3>
                    <p>We use only the finest ingredients to ensure every dish is a masterpiece.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><Clock size={32} /></div>
                    <h3>Fast Delivery</h3>
                    <p>Hot and fresh food delivered to your doorstep in record time.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><MapPin size={32} /></div>
                    <h3>Prime Location</h3>
                    <p>Located in the heart of Bhubaneswar, Patia. Come visit us!</p>
                </div>
            </section>

            {/* Popular Items Preview (Static for now, could be dynamic) */}
            <section className="popular-preview page-container">
                <div className="section-header">
                    <h2>Fan Favorites</h2>
                    <Link to="/menu" className="view-all">View Full Menu <ArrowRight size={16} /></Link>
                </div>
                <div className="popular-grid">
                    <div className="food-card">
                        <img src="https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=500&q=80" alt="Chicken Manchurian" />
                        <div className="food-info">
                            <h3>Chicken Manchurian</h3>
                            <p className="price">₹260</p>
                        </div>
                    </div>
                    <div className="food-card">
                        <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=80" alt="Chilli Chicken" />
                        <div className="food-info">
                            <h3>Chilli Chicken Wet</h3>
                            <p className="price">₹260</p>
                        </div>
                    </div>
                    <div className="food-card">
                        <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80" alt="Noodles" />
                        <div className="food-info">
                            <h3>Chicken Soft Noodles</h3>
                            <p className="price">₹270</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
