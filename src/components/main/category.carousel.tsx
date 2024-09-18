'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'
import { Box, Text } from "@chakra-ui/react";
import { ICarouselCategory } from "@/types/default.types";
import CategoryCard from "./category.card";


const dataPhake = [
    {
        name: 'Music',
        description: 'Music makes everything better, and these games will grove to it!',
        icon: [
            'https://i.imgur.com/own98rX.png',
            'https://i.imgur.com/rYqdMGE.png',
            'https://i.imgur.com/Kpfw8Dq.png',
            'https://i.imgur.com/zoYSVVG.png'
        ],
        logo: 'https://i.imgur.com/r44Aa8k.png'
    },
    {
        name: 'Table Games',
        description: 'The classic table games for the gentlemen and ladies.',
        icon: [
            'https://i.imgur.com/own98rX.png',
            'https://i.imgur.com/rYqdMGE.png',
            'https://i.imgur.com/Kpfw8Dq.png',
            'https://i.imgur.com/zoYSVVG.png'
        ],
        logo: 'https://i.imgur.com/odRwdMm.png'
    },
]

function CategoryGame() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <Box className="slider-container relative my-10">
            <Box>
                <Text className="font-semibold text-large">Hottest Category</Text>
            </Box>
            <Slider {...settings}>
                {dataPhake.map((item: ICarouselCategory, index) => {
                    return (
                        <Box key={index}>
                            <CategoryCard item={item} />
                        </Box>
                    )
                })}
            </Slider>
        </Box>
    );
}

export default CategoryGame
