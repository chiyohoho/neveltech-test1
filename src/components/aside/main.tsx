'use client'

import './styles.css'

import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoAlbums, IoAppsSharp, IoSearchSharp } from "react-icons/io5"
import { IoMdHome } from "react-icons/io"

const MainAside = () => {
    const [active, setActive] = useState('1')

    return (
        <Box className='aside w-[160px]'>
            <InputGroup ml={'-10px'}>
                <InputLeftElement pointerEvents='none'>
                    <IoSearchSharp fontSize={18} color='gray' />
                </InputLeftElement>
                <Input w={'80%'} color={'gray'} _focusVisible={{ border: 'none' }} fontWeight={500} border={'none'} pl={8} type='text' placeholder='Search' />
            </InputGroup>

            <Flex className='flex-col gap-2 pt-4 border-t-[1px] border-t-gray-200'>
                <Flex onClick={() => setActive('1')} className={`aside-menu-text items-center w-fit gap-1 ${active === '1' ? 'active' : ''}`}>
                    <IoMdHome />
                    <Text className='font-semibold'>Games Home</Text>
                </Flex>

                <Flex onClick={() => setActive('2')} className={`aside-menu-text items-center w-fit gap-1 ${active === '2' ? 'active' : ''}`}>
                    <IoAlbums />
                    <Text className='font-semibold'>Timeline</Text>
                </Flex>

                <Flex onClick={() => setActive('3')} className={`aside-menu-text items-center w-fit gap-1 ${active === '3' ? 'active' : ''}`}>
                    <IoAppsSharp />
                    <Text className='font-semibold'>All Games</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default MainAside