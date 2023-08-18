import React from 'react';
import './Footer.css';
import SocialLinks from '../Common/SocialLink/ScialLinks'

function Footer(props) {
    return (
        <div className='footer-container'>
            <div className='social-icon'>
                    <SocialLinks/>
            </div>
            <div className='footer-right'>
            <div className='footer-logo'>
                <h2>Ram</h2>
            </div>
            <div className='footer-copyright'>
            &#169; 2025
            </div>
            </div>
            
        </div>
    );
}

export default Footer;