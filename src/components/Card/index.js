import React from "react";

const Card = ({cardClass, src, alt, h2, p1, p2, p3, children}) => (    
    <div className={cardClass}>
        <img src={src} alt={alt} />
        <h2>{h2}</h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <div>{children}</div>
    </div>    
)

export default Card;