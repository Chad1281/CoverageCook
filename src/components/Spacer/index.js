import React from "react";

import './Spacer.css';

export default function Spacer(props) {
    return(
        <div className={`spacer ${props.custClass}`}>
            {props.children}
        </div>
    )
}