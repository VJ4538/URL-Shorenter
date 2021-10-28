import React from 'react'

export default function Title({
    title, 
    size='h1', 
    className, 
    refValue
}) {
    const CustomHTag = size
    return (
        <CustomHTag 
            className={className}
            ref={refValue}
        > 
            {title} 
        </CustomHTag>
    )
}
