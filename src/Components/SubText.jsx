import React from 'react'

export default function SubText({
    text, 
    className
}) {
    return (
        <p 
            className={className} 
        >
            {text}
        </p>
    )
}
