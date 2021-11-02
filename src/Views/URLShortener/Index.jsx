import React from 'react'
import Button from '../../Components/Button'
import Container from '../../Components/Container'
import Input from '../../Components/Input'
import useInput from '../../hooks/useInput'
import useHttp from '../../hooks/useHttp'
import Result from './Result'
import ErrorMsg from '../../Components/ErrorMsg'

export default function Index() {
    const validateInput = (urlInput,isTouched) =>{
        return urlInput.length>0&&isTouched===true
    }   

    //Custom Input hook
    const {
        inputValue:urlInput,
        // isInputValid:urlInputValid, Validate on input Change
        handleInputChange:handleUrlInputChange,
        reset:urlReset,
        checkValidOnSubmit:urlValidaiton,
    }=useInput(validateInput)

    //Custom http hook
    const {
        error,
        InputRef,
        isLoading,
        response,
        sendingRequest
    }=useHttp(urlReset)

    const handleSendingRequest = () =>{
        const isValid= urlValidaiton()
        if(isValid){
            sendingRequest(`https://api.shrtco.de/v2/shorten?url=${urlInput.value}`)
        }else{
            //if input missing focus input
            InputRef.current.focus()
        }
    }

    return (
        <>
        <Container className='url-shortener'> 
            <Input  
                value={urlInput.value}
                placeholder='Shorten a link here...'
                onChange={handleUrlInputChange}
                // error={urlInputValid}
                isValid={urlInput.isValid}
                errorMsg={'Please add a link'}
                refValue={InputRef}
            />
            <Button 
                text='Shorten It!'
                onClick={()=>{
                    handleSendingRequest()
                }}
            />
        </Container>
        <Container className='results-container'>
            {error&&
                <ErrorMsg 
                    className='error-msg' 
                    errorMsg={error.error} 
                />
            }
            
            {response.length>0&&response.map((each,idx)=>{
                return(
                    isLoading
                    ?<p>Loading ...</p>
                    :<Result data={each} />
                    
                    
                )
            })}
            
        </Container>
        </>
    )
}

