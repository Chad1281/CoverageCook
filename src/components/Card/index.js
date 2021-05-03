import React from "react";

const Card = ({src, alt, h2, p1, p2, p3}) => (    
    <div className="card">
        <img src={src} alt={alt} />
        <h2>{h2}</h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
    </div>    
)

export default Card;