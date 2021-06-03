import React from 'react';
import './Landing.css';
import Illustration from '../../images/illustration-working.svg';


function Main() {
    return (
        <div className="landing">

            <img src={Illustration} alt="" />


            <div className="landing-body">
                <h1>
                    More than just shorter links
                </h1>

                <p>
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>

                <button>Get Started</button>
            </div>
        </div>
        )
    }
    export default Main
