'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'
import { Box, Text } from "@chakra-ui/react";
import GameCard from "./game.card";
import { ICarouselCard } from "@/types/default.types";


const dataPhake = [
    {
        name: 'Mahjong Ways',
        description: '4TECH™ has just launched their very first Mahjong inspired slot machine game bla bla bla bla bla bla bla bla bla bla bla bla',
        image: 'https://i.imgur.com/DfH2TZq.png',
        banner: 'https://i.imgur.com/y3QBJ53.png'
    },
    {
        name: 'Wild Bandito',
        description: 'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is active bla bla bla bla bla bla bla bla bla bla',
        image: 'https://i.imgur.com/TIgWgRx.png',
        banner: 'https://i.imgur.com/9qkRNwj.png'
    }
]

function HotGame() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <Box className="slider-container relative">
            <Box>
                <Text className="font-semibold text-large">Hot Games</Text>
            </Box>
            <Slider {...settings}>
                {dataPhake.map((item: ICarouselCard, index) => {
                    return (
                        <Box key={index}>
                            <GameCard item={item} />
                        </Box>
                    )
                })}
            </Slider>
        </Box>
    );
}

export default HotGame
