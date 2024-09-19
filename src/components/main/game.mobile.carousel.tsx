'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'
import { Box, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ICarouselCard } from "@/types/default.types";
import MobileCard from "./mobile.card";
import { FaAngleDown } from "react-icons/fa6";


const dataPhake = [
    {
        name: 'Tree Of Fortune',
        description: 'Legend has it that a farmer was granted a seed from a deity.',
        image: 'https://i.imgur.com/hp2hvnd.png',
        banner: 'https://i.imgur.com/53gjzrf.png'
    },
    {
        name: 'Fortune Of Tree',
        description: 'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is active bla bla bla bla bla bla bla bla bla bla',
        image: 'https://i.imgur.com/hp2hvnd.png',
        banner: 'https://i.imgur.com/53gjzrf.png'
    }
]

function GameMobile() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
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
            <Flex className="mb-5 w-full justify-between">
                <Text className="font-semibold text-large">HOT GAME</Text>

                <Menu>
                    <MenuButton
                        px={4}
                        py={2}
                        transition='all 0.2s'
                        borderRadius='sm'
                        borderWidth='1px'
                        borderColor={'#ccc'}
                        _hover={{ bg: '#f2f2f2' }}
                        _expanded={{ bg: '#f2f2f2' }}
                        _focus={{ boxShadow: 'outline' }}
                        className="w-fit"
                    >
                        <Flex className="items-center gap-5">
                            <Text className="font-semibold">Release Date</Text>

                            <Flex className="items-center gap-1">
                                <Text className="text-tiny font-bold">AZ</Text>
                                <FaAngleDown />
                            </Flex>
                        </Flex>
                    </MenuButton>

                    <MenuList>
                        <MenuItem>Sort by name</MenuItem>
                        <MenuItem>Sort by date</MenuItem>
                        <MenuDivider />
                        <MenuItem>Reset Filter</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>

            <Slider {...settings}>
                {dataPhake.map((item: ICarouselCard, index) => {
                    return (
                        <Box key={index}>
                            <MobileCard item={item} />
                        </Box>
                    )
                })}
            </Slider>
        </Box>
    );
}

export default GameMobile
