import React from 'react'

export default function ErrorMsg({
    errorMsg, 
    className
}) {
    return (
        <p className={className}>
            {errorMsg}
        </p>
    )
}
