import { useReducer } from 'react'

const initValue={
    value:'',
    isTouched:false,
    isValid:true,
}

const inputReducer = (state, action)=>{
    switch(action.type){
        case 'setValue' :{
            return {...state,value:action.payload}
        }
        case 'setTouched' :{
            return {...state,isTouched:action.payload}
        }
        case 'setIsValid' :{
            return {...state,isValid:action.payload}
        }
        default:
            return state
    }
}

const useInput=(validationFn)=>{
    const [inputState, dispatch]= useReducer(inputReducer, initValue)
    //Validate on Change
    // const isInputValid=validationFn(inputValue.value,inputValue.isTouched)
  
    const setValue=(value)=>{
        dispatch({type:'setValue',payload:value})
    }

    const setInputIsTouched=(value)=>{
         dispatch({type:'setTouched',payload:value})
    }

    const setInputIsValid=(value)=>{
        dispatch({type:'setIsValid',payload:value})
    }

    const handleInputChange=(e)=>{
        setValue(e.target.value)
        setInputIsTouched(true)
    }

    const checkValidOnSubmit= () =>{
        const isInputValid=validationFn(inputState.value,inputState.isTouched)
        setInputIsValid(isInputValid)
        return isInputValid
    }

    const reset=()=>{
        setValue('')
        setInputIsTouched(false)
    }

    return{
        inputValue: inputState,
        reset,
        // isInputValid,
        checkValidOnSubmit,
        handleInputChange,
    }
}

export default useInput