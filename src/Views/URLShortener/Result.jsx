import React, {useRef} from 'react'
import Button from '../../Components/Button'
import Container from '../../Components/Container'
import Title from '../../Components/Title'

export default function Result({data}) {
    const originalLink= data.original_link&&data.original_link
    const shortenLink= data.full_short_link&&data.full_short_link
    const shortenLinkRef =useRef(null)


    const copyToClipBoard = (e) =>{
        //Copy to clipboard
        navigator.clipboard.writeText(shortenLinkRef.current.textContent)

        //Handle button change
        const buttons=document.querySelectorAll('.copied-button')
        if(buttons[0]){
            buttons[0].classList.remove('copied-button')
            buttons[0].innerText='Copy'
        }
        e.target.classList.add('copied-button')
        e.target.innerText='Copied!'
    }
    
    return (
        <Container className='result'>
            <Title className='original-link' size='h3' title={originalLink} />
            <Container className='copy-button'>
                <Title 
                    refValue={shortenLinkRef} 
                    className='shorten-link' 
                    size='h3' 
                    title={shortenLink} 
                />
                <Button  
                    onClick={copyToClipBoard} 
                    text={'Copy'}
                />
            </Container>
        </Container>
    )
}
