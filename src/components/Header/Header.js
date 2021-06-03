import React, { useState } from 'react'
import Logo from '../../images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import MobileNav from '../MobileNav/MobileNav.js';
import './Header.css'

function Header() {

    const [toggleNav, setToggleNav] = useState('false');

    return (
        <div className="header-container">
            <div className="header">

                <div className="mobile-nav">
                    <img src={Logo} alt="Shortly"/>
                    <MenuIcon onClick={() => { setToggleNav(!toggleNav)}} className="hamburger" fontSize="large"/>
                </div>

                <div className="desktop-nav">
                    <div className="desktop-nav-links">
                        <img src={Logo} alt="Shortly"/>
                        <a href="/">Features</a>
                        <a href="/">Pricing</a>
                        <a href="/">Resources</a>
                    </div>
                    <div className="desktop-nav-btn">
                        <a href="/">Login</a>
                        <button className="signup-btn">Sign Up</button>
                    </div>
                </div>
            </div>

            <div className="mobile-nav-active">
                { !toggleNav && <MobileNav /> }
            </div>
        </div>
    )
}

export default Header
