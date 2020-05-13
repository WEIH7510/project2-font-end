import React from 'react';

export function  swatch(props){
    const color = props.color;
    return (
        <div className="swatch">
            <span className="hex">{color.hex}</span>
            <span className="delete-button">&#x2716;</span>
            <span className="name">{color.name}</span>
        </div>
    )
}