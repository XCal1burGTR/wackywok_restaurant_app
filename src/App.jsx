import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import User from './pages/User';

// Placeholder components for routes not yet implemented
const About = () => <div className="page-container"><h2>About Us</h2><p>WackyWok is the best Indian-Chinese restaurant in Bhubaneswar.</p></div>;

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/user" element={<User />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Layout>
    );
}

export default App;

