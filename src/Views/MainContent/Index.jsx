import React from 'react'
import Title from '../../Components/Title'
import Container from '../../Components/Container'
import SubText from '../../Components/SubText'
import Card from './Card'
import URLShortener from '../URLShortener/Index'

export default function Index() {
    return (
        <Container className='main-content'> 
            <Container className='content-container'>
            
                <URLShortener />

                <Container className='main-content-title'>
                    <Title title='Advanced Statistics' size='h2' />
                    <SubText text='Track how your links are performing across the web with our advanced statistics dashboard.' />
                </Container>
                <Container className='main-content-info'>
                    <Card 
                        img='/images/icon-brand-recognition.svg'
                        imgAlt='Brand Recognition'
                        title='Brand Recognition' 
                        subText={`Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`}
                        connect={false}
                    />
                    <Card 
                        img='/images/icon-detailed-records.svg'
                        imgAlt='Detailed Records'
                        title='Detailed Records' 
                        subText={`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`}
                        connect={true}
                    />
                    <Card 
                        img='/images/icon-fully-customizable.svg'
                        imgAlt='Fully Customizable'
                        title='Fully Customizable' 
                        subText={`Improve brand awareness and content discoverability through customizable links, superchargin audience engagement.`}
                        connect={true}
                    />
                </Container>
            </Container>
        </Container>
    )
}
