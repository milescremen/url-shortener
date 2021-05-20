import React from 'react';
import './Input.css';
import InputCard from '../InputCard/InputCard.js';

function Input() {
    return (
        <div className="input-container">
            <div className="input">
                <input type="text" placeholder="Shorten a link here..."/> 

                <button>    
                    Shorten It!
                </button>


            </div>

            <InputCard />
            <InputCard />
        </div>
    )
}

export default Input
