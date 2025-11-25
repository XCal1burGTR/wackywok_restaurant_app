import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>WackyWok</h3>
                        <p>Indian-Chinese Restaurant</p>
                        <p>Patia, Bhubaneswar, Odisha, Pin-751024</p>
                    </div>
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <p>+91 81143 68224</p>
                    </div>
                    <div className="footer-section">
                        <p>&copy; {new Date().getFullYear()} WackyWok. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
