import React from 'react';
import './FooterStyles.css';
import logo from '../assets/final-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const Footer = () => {
    const tiktokLink = 'https://www.tiktok.com/@tlcsafaris?_t=8ixfI9zCDUz&_r=1';

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
                    <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} size="2x" style={{ color: 'white' }}/>
        </a>
                </div>
            </div>
            {/* ... other content */}
        </div>
    );
}

export default Footer;
