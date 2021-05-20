import React from 'react';
import './Input.css';
import LinkCard from '../LinkCard/LinkCard.js';

function Input() {

    let links = [
            { id: 1, origLink: 'www.facebook.com', shortLink: "hehe" }, 
            { id: 2, origLink: 'www.google.com', shortLink: "test"}
        ];

    return (
        <div className="input-container">
            <div className="input">
                <input type="text" placeholder="Shorten a link here..."/> 

                <button>    
                    Shorten It!
                </button>
            </div>

            { links.map(link => (<LinkCard key={link.id} link={link} />))}
        </div>
    )
}

export default Input
