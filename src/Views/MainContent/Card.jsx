import React from 'react'
import SubText from '../../Components/SubText'
import Title from '../../Components/Title'
import Container from '../../Components/Container'
import Image from '../../Components/Image'

export default function Card({title, img , imgAlt, subText ,connect}) {
    return (
        <Container className='card-container'>
            {connect&&<Container className='connect'></Container>}
            <Container className='card-icon'>
                <Image src={img} alt={imgAlt} />
            </Container>

            <Container className='card-text'>
                <Title title={title} size='h3' />
                <SubText text={subText} />
            </Container>
        </Container>
    )
}
