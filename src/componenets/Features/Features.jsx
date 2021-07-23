import React from 'react'
import LeftFeature  from './LeftFeature'
import RightFeaturesBox from './RightFeaturesBox'
import coding2 from '../../images/coding2.svg'
import './Feautres.css';
const Features = () => {
    return (
        <>
        <section id="features">
                <div className="heading">
                    <h1>Why Coding?</h1>
                    <p>Vidyayan Focuses on developing ‘skills’ rather than ‘syntax’, to make children</p>
                </div>
                <din className="row">
                    <LeftFeature />
                    <div className="center">
                        <img src={coding2} alt="coding-image" />
                    </div>
                    <RightFeaturesBox />
                </din>
                <div className="button">
                    <button>Book a free class</button>
                </div>
        </section>
           
        </>
    )
}

export default Features
