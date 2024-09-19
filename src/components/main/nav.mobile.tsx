"use client"

import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoAlbums, IoAppsSharp } from "react-icons/io5"
import { IoMdHome } from "react-icons/io"
import { FaFilter } from "react-icons/fa6";
import NavMobileSearch from '../button/mobile.search'

const NavMobile = () => {
    const [active, setActive] = useState('1')

    return (
        <Flex className='w-full'>
            <Flex className='w-full items-start border-b-[1px] border-b-gray-200'>
                <Box onClick={() => setActive('1')} className={`aside-menu-text w-full flex flex-col aspect-square justify-center items-center gap-1 ${active === '1' ? 'active' : ''}`}>
                    <IoMdHome />
                    <Text className='leading-4'>HOME</Text>
                </Box>

                <Box onClick={() => setActive('2')} className={`aside-menu-text w-full flex flex-col aspect-square justify-center items-center gap-1 ${active === '2' ? 'active' : ''}`}>
                    <IoAlbums />
                    <Text className='leading-4'>TIMELINE</Text>
                </Box>

                <Box onClick={() => setActive('3')} className={`aside-menu-text w-full flex flex-col aspect-square justify-center items-center gap-1 ${active === '3' ? 'active' : ''}`}>
                    <IoAppsSharp />
                    <Text className='leading-4'>ALL GAMES</Text>
                </Box>

                <NavMobileSearch active={active} setActive={setActive} />

                <Box onClick={() => setActive('5')} className={`aside-menu-text w-full flex flex-col aspect-square justify-center border-l-[1px] border-l-gray-200 items-center gap-1 ${active === '5' ? 'active' : ''}`}>
                    <FaFilter />
                    <Text className='leading-4'>Filter</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default NavMobile
