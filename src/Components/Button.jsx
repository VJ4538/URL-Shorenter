import React from 'react'

export default function Button({
    roundBorder=false, 
    fullWidth=false, 
    className='',
    text, 
    onClick
}) {

    const roundButton =roundBorder?'button-round':'button-regular'
    const fullWidthButton = fullWidth?'full-width':''

    return (
        <button 
        className={`button ${roundButton} ${fullWidthButton} ${className}`}
        onClick={onClick}
        >
            {text}
        </button>
    )
}
