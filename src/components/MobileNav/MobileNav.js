import React from 'react';
import './MobileNav.css';

function MobileNav() {
    return (
        <div className="navigation">
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Resources</a>
            <hr/>
            <a href="/">Login</a>
            <button>Sign Up</button>
        </div>
    )
}

export default MobileNav
