import React, { useState } from 'react';
import './LinkCard.css';

function LinkCard({ link }) {

    const [copied, setCopied] = useState()

    const copyLink = () => {
        navigator.clipboard.writeText(link.shortLink);
        setCopied(true);
    }

    return (
        <div className="link-card">
            <div className="orig-link"><a href={"https://" + link.origLink} target="_blank" rel="noopener noreferrer" alt="">{link.origLink}</a></div>
            <div className="short-link"><a href={"https://" + link.shortLink} target="_blank" rel="noopener noreferrer" alt="">{link.shortLink}</a></div>
            
            <button onClick={copyLink}>
                { !copied ? 'Copy' : 'Copied!' }
            </button>
        </div>
    )
}

export default LinkCard
