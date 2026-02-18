import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#282c34', // Dark background
            color: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Movie Catalog</Link>
            </div>
            <ul style={{
                display: 'flex',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                gap: '20px'
            }}>
                <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Home</Link></li>
                <li><Link to="/search" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Search</Link></li>
                <li><Link to="/favorites" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Favorites</Link></li>
                <li><Link to="/category/popular" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Category</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
