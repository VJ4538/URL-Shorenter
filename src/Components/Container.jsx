import React from 'react'

export default function Container({
    children, 
    className,
    id, 
    onClick
}) {
    return (
        <div 
            id={id} 
            className={className}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
