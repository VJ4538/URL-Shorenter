import React from 'react'
import Title from '../../Components/Title'
import Button from '../../Components/Button'
import SubText from '../../Components/SubText'
import Container from '../../Components/Container'
import Image from '../../Components/Image'

export default function index() {
    return (
        <Container className='content-container introduction'>
            <Container className='introduction-image'>
                <Image src='/images/illustration-working.svg' alt='illustration-working' />
            </Container>

            <Container className='introduction-info'>
                <Title className='introduction-header' title='More than just shorter links' />
                <SubText text= {`Build your brand's recognition and get detailed insights on how your links are performing.`} />
                <Button text='Get Started' roundBorder/>
            </Container>
        </Container>
    )
}
