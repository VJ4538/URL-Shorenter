import React from 'react'

export default function Link({
    className, 
    link, 
    text, 
    children
}) {
    
    return (
        <a className={className} href={link}>
            {text} {children}
        </a>
    )
}
