import React from 'react'

const Box = (props) => {
    return (
        <>
          <div className="container-sm">
              <div className="img">
                  <img src={props.image} alt="" />
              </div>
              <div className="text">
                  <h2>{props.title}</h2>
              </div>
          </div>  
        </>
    )
}

export default Box
