import React from 'react'
import image from '../../assets/img.png'
import './Hero.css'
import { Heading } from '@chakra-ui/react'
const Hero = () => {
    return (
        <div style={{
            backgroundImage: `url(${image})`,
        }} className='hero'>
            <Heading as='h1' size='4xl' isTruncated className='h2'>
                Watch <br />something <br />incredible.
            </Heading>
        </div>
    )
}

export default Hero
