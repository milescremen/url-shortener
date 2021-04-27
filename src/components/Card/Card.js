import React from 'react'

function Card({title, text, icon}) {
    return (
        <div>
            <img src={icon} alt=""></img>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Card 