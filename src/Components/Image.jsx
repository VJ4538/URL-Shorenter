import React from 'react'

export default function Image({
    src, 
    alt, 
    className='', 
    onClick
}) {
    return (
        <img 
            className={className} 
            src={src} 
            alt={alt} 
            onClick={onClick}
        />
    )
}
