import React, { useState } from 'react';
import './Input.css';
import LinkCard from '../LinkCard/LinkCard.js';
const axios = require('axios').default;

function Input() {

    const linksList = [
            
        ];

    const [text, setText] = useState('');
    const [links, setLinks] = useState(linksList);

    const addLink = async (e) => {
        e.preventDefault();

        try {
            const url = text;
            setText('');
            
            const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);

            const newLink = {
                id: 1,
                origLink: text,
                shortLink: res.data.result.full_share_link
            };

            setLinks([...links, newLink]);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className="input-container">
            <div className="input">
                <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Shorten a link here..."/> 

                <button onClick={addLink}>    
                    Shorten It!
                </button>
            </div>

            { links.map(link => (<LinkCard key={link.id} link={link} />))}
        </div>
    )
}

export default Input
