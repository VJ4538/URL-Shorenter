import React from 'react'

export default function Input({
    className='', 
    type='text',
    value,
    placeholder,
    onChange,
    isValid,
    errorMsg,
    refValue
    }) {
    const error=!isValid?'input-error':'';
    return (
        <>
        <input
            type={type}
            className={`${className} ${error}`}
            value={value} 
            placeholder={placeholder}
            onChange={onChange}
            ref={refValue}
        />
        
        {!isValid&&<p className='input-error-text'>{errorMsg}</p>}
        </>
    )
}
