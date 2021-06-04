import React, { useState } from 'react';
import './Input.css';
import LinkCard from '../LinkCard/LinkCard.js';
const axios = require('axios').default;

function Input() {

    const linksList = [];

    const [text, setText] = useState('');
    const [links, setLinks] = useState(linksList);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const addLink = async (e) => {
        e.preventDefault();

        if(text === '')
        {
            setError(true);
        }
        else
        {
            setError(false);
            setSuccess(true);

            try {
                const url = text;
               
                // Reset text state
                setText('');
                
                const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);

                setSuccess(false);

                console.log(res.data);

                const newLink = {
                    id: 1,
                    origLink: text,
                    shortLink: res.data.result.short_link
                };

                setLinks([...links, newLink]);
            } catch(err) {
                console.error(err);
            }
        }
    }

    return (
        <div className="input-container">
            <form onSubmit={addLink}>
                    <div className="input">

                        <div className="input-desktop">
                            <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Shorten a link here..."/> 

                            <button type="submit">    
                                Shorten It!
                            </button>
                        </div>

                        { error && <p className="error message">Url field must not be empty...</p> }
                        { success && !error && <p className="success message">Url succesfully submitted, please wait..</p> }
                </div>
            </form>

            { links.map(link => (<LinkCard key={link.id} link={link} />))}
        </div>
    )
}

export default Input
