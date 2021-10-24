import React from 'react';
import './input.css';

export default function Input(props) {

    const element =
        props.element === 'input' ? (
            <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={props.onChange} onClick={props.onSubmit} />
        ) : (
            <textarea id={props.id} rows={props.rows || 3} placeholder={props.placeholder} onChange={props.onChange} /> 
        );

    return (
        <div className={`form-control`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element} 
        </div>
    )
}

export function Required() {
    return (
        <p className='required'>(Required)</p>
    )
}

export function Optional() {
    return (    
        <p className='optional'>(Optional)</p>
    )    
}

