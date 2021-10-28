import { useState} from 'react'

const useHttp=()=>{
    const [error, setError] = useState()

    const sendingRequest = async (url)=>{
        const response = await fetch(url)
        const data = await response.json()
        if(data.ok===true){
            setError()
        }else{
            setError(data)
        }

        return data
    }

    return{
        error,
        setError,
        sendingRequest
    }
}

export default useHttp