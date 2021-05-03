import React from "react";

const Card = ({src, alt, h2, p}) => (    
    <div className="card">
        <img src={src} alt={alt} />
        <h2>{h2}</h2>
        <p>{p}</p>
    </div>    
)

export default Card;