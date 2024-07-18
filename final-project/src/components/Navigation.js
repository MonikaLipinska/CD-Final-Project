import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/browse">Browse</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/help">Help</NavLink>
        </nav>
    );
}

export default Navigation;