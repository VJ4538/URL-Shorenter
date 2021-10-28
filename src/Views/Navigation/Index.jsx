import React, { useState } from 'react'
import Container from '../../Components/Container'
import Image from '../../Components/Image'
import NavModal from './NavModal'
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll'
import Button from '../../Components/Button'
import Link from '../../Components/Link'

export default function Index() {
    const [modalOpen, setModalOpen] =useState(false)
    useDisableBodyScroll(modalOpen);
    const handleModalClose = (e) =>{
        // console.log('ModalClose')
        if(e.target.classList.value==='modal-container'){
            setModalOpen(false)
        }
    }
    const handleModalOpen = () =>{
        // console.log('ModalOpen')
        setModalOpen(true)
    }

    return (
        <Container className='navigation content-container'>
                <Container className='desktop-nav'>
                    <Container className='desktop-menu'>
                        <Image
                            className='nav-logo'
                            src='/images/logo.svg' 
                            alt='logo'
                        />
                        <Link link='#Features' text='Features'/>
                        <Link link='#Pricing' text='Pricing'/>
                        <Link link='#Resources' text='Resources'/>
                    </Container>
                    
                    <Container className='desktop-account'>
                        <Link link='#Login' text='Login'/>
                        <Button text='Sign up' fullWidth roundBorder/>
                    </Container>
                </Container>

                <Container className='mobile-nav'>
                    <Image 
                        className='nav-logo'
                        src='/images/logo.svg' 
                        alt='logo'
                    />

                    <Image 
                        className='mobile-menu-button'
                        src='/images/menu.svg' 
                        alt='menu-icon'
                        onClick={handleModalOpen}
                    />
                    <NavModal 
                        modalOpen={modalOpen} 
                        closeModal={handleModalClose} 
                    />
                </Container>
        </Container>
    )
}
