import React, { useState } from 'react'
import Logo from '../../images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import Navigation from '../Navigation/Navigation.js';
import './Header.css'



function Header() {

    const [toggleNav, setToggleNav] = useState('false');

    return (
        <div className="header-container">
            <div className="header">
                <img src={Logo} alt="Shortly"/>

                <MenuIcon onClick={() => { setToggleNav(!toggleNav)}} className="hamburger" fontSize="large"/>

                {
                    /*

                    <a href="">Features</a>      
                    <a href="">Pricing</a>      
                    <a href="">Resources</a>      

                    <button>Login</button>
                    <button>Sign Up</button>
                    */
                }
            </div>

            { toggleNav && <Navigation /> }
        </div>
    )
}

export default Header
