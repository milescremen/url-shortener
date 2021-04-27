import React from 'react'
import Logo from '../../images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'


function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Shortly"/>

            <MenuIcon className="hamburger" fontSize="large"/>

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
    )
}

export default Header
