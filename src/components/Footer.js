import React from 'react';
import './FooterStyles.css';
import logo from '../assets/final-logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <img src={logo} alt='TLC' style={{ width: '80px', height: 'auto' }} />
                <div>
                    <a href='https://instagram.com/tlcsafaris'>
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a href='https://youtube.com/@TLCSAFARIS'>
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href='https://twitter.com/tlcsafaris'>
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>
                </div>
            </div>
            {/* ... other content */}
        </div>
    );
}

export default Footer;
