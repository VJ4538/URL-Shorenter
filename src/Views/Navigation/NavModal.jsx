import React from 'react'
import Container from '../../Components/Container'
import Button from '../../Components/Button'
import Link from '../../Components/Link'

export default function NavModal({modalOpen, closeModal}) {
    return (
        modalOpen&&(
            <Container 
                className='modal-container' 
                onClick={closeModal}
            > 
                <Container className='modal-content'>
                    <Container className='modal-item links'>
                        <Link className='text-white' link='#Features' text='Features'/>
                        <Link className='text-white' link='#Pricing' text='Pricing'/>
                        <Link className='text-white' link='#Resources' text='Resources'/>
                    </Container>
                    <Container className='modal-item text-center'>
                        <Link className='text-white' link='#Login' text='Login'/>
                        <Button text='Sign up' fullWidth roundBorder/>
                    </Container>
                </Container>
            </Container>
        )
    
       
    )
}
