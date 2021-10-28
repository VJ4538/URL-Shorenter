import React from 'react'
import Container from '../../Components/Container'
import Title from '../../Components/Title'
import Button from '../../Components/Button'

export default function Index() {
    return (
        <Container className='boost-link'>
            <Container className='content-container'>
                <Title title='Boost your links today' size='h2' />
                <Button roundBorder={true} text='Get Started'/>
            </Container>
        </Container>
    )
}
