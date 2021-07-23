import React from 'react'
import Navbar from '../Navbar/Navbar';
import coding1 from '../../images/coding1.svg';
import image1 from '../../images/python1.svg';
import image2 from '../../images/cyber-security 1.svg';
import image3 from '../../images/artificial-intelligence 1.svg';
import image4 from '../../images/game-development 1.svg';
import image5 from '../../images/machine-learning 1.svg';
import image6 from '../../images/web-development 1.svg';
import Box from './Box'
import './Header.css';
const Header = () => {
    return (
        <>
        <Navbar />
        <section id="header">
                <div className="container">
                    <div className="left">
                        <h1><span>Creating Future </span>Tech Leaders</h1>
                        <p>Live coding classes for age 6 -15 to help your child learn to code</p>
                        <button>Join Now</button>
                    </div>
                    <div className="right">
                        <img src={coding1} alt="" />
                    </div>

                </div>
                <h3>Cutting edge courses to make your child future ready</h3>
                <div className="row">
                    <Box image={image1} title={'Python'} />
                    <Box image={image2} title={'Web Development'} />
                    <Box image={image3} title={'Artificial Intelligence'} />
                    <Box image={image4} title={'Machine Learning'} />
                    <Box image={image5} title={'Cyber Security'} />
                    <Box image={image6} title={'App Development'} />
                </div>
        </section>
            
        
            
        </>
    )
}

export default Header
