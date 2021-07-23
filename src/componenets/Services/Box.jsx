import React from 'react'
import './Services.css';
const Box = (props) => {
    return (
        <>
        <div className="container">
                <div className="wrapper">
                    <div className="circle">
                      <h1>{props.no}</h1>
                    </div>
                    <div className="infor">
                        <h4>Book</h4>
                        <p> Book a free coding classes with us. You just
                            need a laptop with good internet connectivity</p>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Box
