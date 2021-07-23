import React from 'react'
import Card from './Card'
import Box from './Box'
import cardimage1 from '../../images/android1.svg'
import cardimage2 from '../../images/web-development2.svg'
import cardimage3 from '../../images/c++.svg'
import cardimage4 from '../../images/python2.svg'
import banner from '../../images/banner.svg';
import timeline from '../../images/timeline 1.svg'
import coding3 from '../../images/coding3 1.svg';
import banner2 from '../../images/banner2.svg';
import './Services.css';

const Services = () => {
    return (
        <>
            <section id="services">
                <div className="row1">
                    <div className="card-wrapper">
                        <Card image={cardimage3} title={'Introduction to Coding'} />
                        <Card image={cardimage4} title={'Advance Coding'} />
                        <Card image={cardimage2} title={'Web-Development'} />
                        <Card image={cardimage1} title={'Android App developemnt'} />
                    </div>

                </div>
                <div className="row">
                    <div className="banner">
                        <img src={banner} alt="banner-image" />
                    </div>
                </div>

                <div className="timeline">
                    <h3>Learning Path</h3>

                    <div className="row1">
                        <img src={timeline} alt="" />
                    </div>

                </div>
                <div className="heading">
                    <h3>How it Works</h3>
                </div>
                <div className="row">
                    <div className="leftimg">
                        <img src={coding3} alt="" />
                    </div>
                    <div className="right-part">
                        <Box no={'1'} />
                        <Box no={'2'} />
                        <Box no={'3'}/>
                        <Box no={'4'}/>
                        <Box no={'5'}/>
                    </div>
                </div>
                <div className="banner2">
                    <img src={banner2} alt="" />
                </div>
            </section>
        </>
    )
}

export default Services
