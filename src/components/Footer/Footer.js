import React from 'react';
import './Footer.css';

import FacebookIcon from '../../images/icon-facebook.svg';
import TwitterIcon from '../../images/icon-twitter.svg';
import PinterestIcon from '../../images/icon-pinterest.svg';
import InstagramIcon from '../../images/icon-instagram.svg';

function Footer() {
    return (
        <div className="footer">
            <h1>Shortly</h1>

            <div className="link-group">
                <h6>Features</h6>
                <a href="/">Link Shortening</a>
                <a href="/">Branded Links</a>
                <a href="/">Analytics</a>
            </div>

            <div className="link-group">
                <h6>Resources</h6>
                <a href="/">Blog</a>
                <a href="/">Developers</a>
                <a href="/">Support</a>
            </div>

            <div className="link-group">
                <h6>Company</h6>
                <a href="/">About</a>
                <a href="/">Our Team</a>
                <a href="/">Careers</a>
                <a href="/">Contact</a>
            </div>

            <div className="social-icons">
                <img src={FacebookIcon} alt=""/>
                <img src={TwitterIcon} alt=""/>
                <img src={InstagramIcon} alt=""/>
                <img src={PinterestIcon} alt=""/>
            </div>
        </div>
    )
}

export default Footer




