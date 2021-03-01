import React from 'react';
import logo from '../../../src/images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt="" srcset=""/>
           <nav><a href="shop">Shop</a><a href="review">Review</a><a href="Manage">Manage Events</a></nav>
        </div>
    );
};

export default Header;