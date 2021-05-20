import React from 'react';
import './Navigation.css';

function Navigation() {
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

export default Navigation
