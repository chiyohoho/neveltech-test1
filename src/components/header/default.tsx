import { Box } from '@chakra-ui/react'
import React from 'react'
import HeaderNav from './nav'
import './styles.css'
import HeaderCarousel from './carousel'

const DefaultHeader = () => {
    return (
        <Box className='max-h-[576px]'>
            <Box className='fixed top-0 left-0 w-full z-10'>
                <HeaderNav />
            </Box>

            <Box className='w-[calc(100%)] min-h-[300px] max-h-[400px]'>
                <HeaderCarousel />
            </Box>
        </Box>
    )
}

export default DefaultHeader
