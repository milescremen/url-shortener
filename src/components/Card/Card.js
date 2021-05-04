import React from 'react'
import './Card.css';

function Card({title, text, icon}) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={icon} alt=""></img>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Card 