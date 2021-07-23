import React from 'react'

const BoxSm = (props) => {
    return (
        <>
         <div className="box-sm">
             <div className="img">
                 <img src={props.image} alt="image" />
             </div>
             <div className="content-text">
                 <h2>{props.title}</h2>
                 <p>{props.info}</p>
             </div>
         </div>   
        </>
    )
}

export default BoxSm
