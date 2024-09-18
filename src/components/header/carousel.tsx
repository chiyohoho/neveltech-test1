'use client'

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from '@chakra-ui/react';
import './styles.css'

const HeaderCarousel: React.FC = () => {
    const images = [
        'https://i.imgur.com/QKITucK.png',
        'https://i.imgur.com/KJWbaLl.jpeg',
        'https://i.imgur.com/QalDjao.jpeg'
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <Box key={index} h={'full'} objectFit={'cover'}>
                    <Image
                        src={image}
                        alt={`Slide ${index}`}
                        objectFit='cover'
                        width="100%"
                        minH={'300px'}
                        maxH={'400px'}
                        h={'100%'}
                    />
                </Box>
            ))}
        </Slider>
    );
};

export default HeaderCarousel
