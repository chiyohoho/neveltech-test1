'use client'

import { HeaderLogo } from '@/public/export'
import { Box, Center, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import NavDrawer from './drawer'


const HeaderNav = () => {
    const [active, setActive] = useState('GAME')

    return (
        <Box className='bg-nav-gradient h-[90px] max-860:h-fit'>
            <Container maxW='container.lg'>
                <Flex className='header-nav justify-between items-center'>
                    <Box className='header-nav-logo flex-shrink-0 w-[60px] md:w-[80px] lg:w-[108px] h-full py-3 cursor-pointer'>
                        <Image width={108} height={64} layout='responsive' src={HeaderLogo} alt='header-nav-logo' />
                    </Box>

                    <Box className='hidden 860:block h-full'>
                        <Flex className='header-nav-menu gap-5 h-full'>
                            <Center onClick={() => setActive('HOME')} className={`header-nav-menu-text ${active === 'HOME' ? 'active text-white font-normal' : 'text-navText font-light'}`}>HOME</Center>
                            <Center onClick={() => setActive('GAME')} className={`header-nav-menu-text ${active === 'GAME' ? 'active text-white font-normal' : 'text-navText font-light'}`}>GAME</Center>
                            <Center onClick={() => setActive('NEWS')} className={`header-nav-menu-text ${active === 'NEWS' ? 'active text-white font-normal' : 'text-navText font-light'}`}>NEWS</Center>
                            <Center onClick={() => setActive('MATH')} className={`header-nav-menu-text ${active === 'MATH' ? 'active text-white font-normal' : 'text-navText font-light'}`}>MATH</Center>
                            <Center onClick={() => setActive('COMPANY')} className={`header-nav-menu-text ${active === 'COMPANY' ? 'active text-white font-normal' : 'text-navText font-light'}`}>COMPANY</Center>
                            <Center onClick={() => setActive('EVENTS')} className={`header-nav-menu-text ${active === 'EVENTS' ? 'active text-white font-normal' : 'text-navText font-light'}`}>EVENTS</Center>
                            <Center onClick={() => setActive('PARTNERS')} className={`header-nav-menu-text ${active === 'PARTNERS' ? 'active text-white font-normal' : 'text-navText font-light'}`}>PARTNERS</Center>
                        </Flex>
                    </Box>

                    <Box className='block 860:hidden'>
                        <NavDrawer />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default HeaderNav
