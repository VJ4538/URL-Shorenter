import React, {useEffect, useRef, useState} from 'react'
import Button from '../../Components/Button'
import Container from '../../Components/Container'
import Input from '../../Components/Input'
import useInput from '../../hooks/useInput'
import useHttp from '../../hooks/useHttp'
import Result from './Result'
import ErrorMsg from '../../Components/ErrorMsg'

export default function Index() {
    const urlInputRef=useRef()
    const [shortenedUrl, setShortenedUrl] = useState([])

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
        sendingRequest,
        error,
        setError,
    }=useHttp()

    const handleSendingRequest = async () =>{
        const isValid= urlValidaiton()
        //Reset error state when sending request
        setError()
        //If input valid then send request
        if(isValid){
            const response = await sendingRequest(`https://api.shrtco.de/v2/shorten?url=${urlInput.value}`)   
            if(response.ok===true){
                //if no error then reset url input field, localstorage and shortenedUrl list
                setShortenedUrl([...shortenedUrl,response])
                sessionStorage.setObj('ShortenUrl', [...shortenedUrl,response])
                urlReset()
                urlInputRef.current.classList.remove('input-error')
            }else{
                //if reponse return error focus input
                urlInputRef.current.focus()
                urlInputRef.current.classList.add('input-error')
            } 
        }else{
            //if error focus input
            urlInputRef.current.focus()
        }
    }

    useEffect(()=>{
        const list =sessionStorage.getObj('ShortenUrl')
        // console.log('list',list)
        if(list){
            setShortenedUrl([...list])
        }
    },[])

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
                refValue={urlInputRef}
            />
            <Button 
                text='Shorten It!'
                onClick={()=>{
                    handleSendingRequest()
                }}
            />
        </Container>
        <Container className='results-container'>
            {error&&!error.ok&&
                <ErrorMsg 
                    className='error-msg' 
                    errorMsg={error.error} 
                />
            }
            {shortenedUrl.length>0&&shortenedUrl.map((each,idx)=>{
                return(
                    <Result data={each} />
                )
            })}
            
        </Container>
        </>
    )
}

//Storing obj & array
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}