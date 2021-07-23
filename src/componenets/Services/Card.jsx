import React from 'react'
import './Services.css';
const Card = (props) => {
    return (
        <>
         <div className="card">
             <div className="img">
                 <img src={props.image} alt="card-image" />
             </div>
             <div className="content">
                 <h3>{props.title}</h3>
                 <hr />
                 <a href="#">KNOW MORE</a>
             </div>
         </div>   
        </>
    )
}

export default Card
