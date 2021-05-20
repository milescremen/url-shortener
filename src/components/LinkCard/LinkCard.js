import React from 'react';
import './LinkCard.css';

function LinkCard({ link }) {
    return (
        <div className="link-card">
            <div className="orig-link"><a href="/" alt="">{link.origLink}</a></div>
            <div className="short-link"><a href="/" alt="">{link.shortLink}</a></div>
            
            <button>Copy</button>
        </div>
    )
}

export default LinkCard
