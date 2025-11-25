import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { menuData } from '../data/menuData';
import MenuSection from '../components/MenuSection';

const Menu = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'starters', label: 'Starters' },
        { id: 'soups', label: 'Soups' },
        { id: 'combos', label: 'Combos' },
        { id: 'mainCourse', label: 'Main Course' },
        { id: 'riceNoodles', label: 'Rice & Noodles' },
    ];

    const filteredData = Object.entries(menuData).reduce((acc, [key, section]) => {
        if (activeCategory !== 'all' && key !== activeCategory) return acc;

        const filteredItems = section.items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredItems.length > 0) {
            acc[key] = { ...section, items: filteredItems };
        }
        return acc;
    }, {});

    return (
        <div className="menu-page page-container">
            <div className="menu-header">
                <h1>Our Menu</h1>
                <div className="search-bar">
                    <Search size={20} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search for dishes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="category-filter">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="menu-content">
                {Object.entries(filteredData).map(([key, section]) => (
                    <MenuSection key={key} title={section.title} items={section.items} />
                ))}
                {Object.keys(filteredData).length === 0 && (
                    <div className="no-results">
                        <p>No items found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
