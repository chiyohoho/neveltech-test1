import { Box } from '@chakra-ui/react'
import React from 'react'
import HotGame from './game.carousel'
import CategoryGame from './category.carousel'
import NavMobile from './nav.mobile'


const MainBody = () => {
    return (
        <Box className='w-full'>
            <HotGame />

            <CategoryGame />
        </Box>
    )
}

export default MainBody