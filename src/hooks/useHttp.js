import { useReducer, useEffect, useRef} from 'react'

const initialState ={
    error:null,
    isLoading:false,
    response:[],
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'Success' :
            return state ={
                error:null, 
                response:[...state.response, action.payload],
                isLoading:false,
            }
        case 'Error' :
           return state={
                ...state, 
                error:action.payload,
                isLoading:false,
            }
        case 'Sending' :
            return state = {
                ...state, 
                isLoading:true,
                error:null
            }
        case 'Init' :
            return state ={
                ...state,
                response:[...action.payload]
            }
        default:
            return state
    }
}

const useHttp=(resetFn)=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const InputRef=useRef()
    const {error, isLoading, response } =state

    useEffect(()=>{
        const list =sessionStorage.getObj('ShortenUrl')
        // console.log('list',list)
        if(list){
            dispatch({type:'Init', payload:list})
        }
    },[])

    const sendingRequest = async (url, method ='GET', body={})=>{
        try{
            //Sending
            dispatch({type:'Sending'})
            InputRef.current.classList.remove('input-error')
            const response = await fetch(url,{
                method:method,
                // body: JSON.stringify(body)
            })
            const data = await response.json()
            if(data.ok===true){
                // console.log('Success')
                const result = data.result
                sessionStorage.setObj('ShortenUrl', [...state.response,result])
                dispatch({type:'Success', payload:result})
                InputRef.current.classList.remove('input-error')
                resetFn()
            }else{
                // console.log('Error')
                const result = data
                dispatch({type:'Error', payload:result})
                InputRef.current.classList.add('input-error')
                InputRef.current.focus()
            }
    
        }catch(e){
            console.log(e)
            dispatch({type:'Error',payload:'Something went wrong!'})
        }
    }

    return{
        error,
        InputRef,
        isLoading,
        response,
        sendingRequest
    }
}

export default useHttp

//Storing obj & array
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}