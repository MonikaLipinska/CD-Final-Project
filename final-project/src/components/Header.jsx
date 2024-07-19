import React from "react";
import {Link} from 'react-router-dom';
import '.Header.scss';

const Header = () => {
return (
    <header className="header">
        <div className="logo">Gallery</div>
        <nav className="nav">
            <Link to= "/">Home</Link>
            <Link to="about">About</Link>
            <Link to="/browse">Browse</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/help">Help</Link>
        </nav>
    </header>
);
};

export default Header;
