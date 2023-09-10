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
            <img src={require("../../assets/logo.png")} alt="" style={{width:"52px", borderRadius: "50%", marginRight: '20px'}}/>
            <div className='footer-copyright'>
            &#169; 2025
            </div>
            </div>
            
        </div>
    );
}

export default Footer;