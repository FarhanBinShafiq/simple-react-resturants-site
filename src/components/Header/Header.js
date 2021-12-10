import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
           <img src={logo} class="head-logo" alt="logo"/>
             
            <nav>
                <a href='/home'>Home</a>
                <a href='/menu'>Menu</a>
                <a href='/contact'>Contact</a>
                <a href='/about-us'>About Us</a>
            </nav>

        </div>
    );
};

export default Header;