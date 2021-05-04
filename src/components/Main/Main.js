import React from 'react'
import './Main.css';

import Card from '../Card/Card.js';
import BrandIcon from '../../images/icon-brand-recognition.svg';
import DetailedIcon from '../../images/icon-detailed-records.svg';
import CustomizableIcon from '../../images/icon-fully-customizable.svg';
 

function Main() {
    return (
        <div className="main">
            <div className="main-heading">
                <h2>Advanced Statistics</h2> 
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            <div className="main-content">

                <Card 
                    title="Brand Recognition"
                    text="Boost your brand recognition with each click. Generic links don’t 
    mean a thing. Branded links help instil confidence in your content."
                    icon={BrandIcon}
                />            

                <Card 
                    title="Detailed Records"
                    text="Gain insights into who is clicking your links. Knowing when and where 
    people engage with your content helps inform better decisions."
                    icon={DetailedIcon}
                />            

                <Card 
                    title="Fully Customizable"
                    text="Improve brand awareness and content discoverability through customizable 
    links, supercharging audience engagement."
                    icon={CustomizableIcon}
                />     
            </div>

            <div className="main-ending">
                <h2>Boost your links today</h2>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Main
