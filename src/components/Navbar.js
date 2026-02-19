import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_movinest.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="MovieNest" style={{ height: '50px' }} />
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <li><Link to="/category/popular">Category</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
