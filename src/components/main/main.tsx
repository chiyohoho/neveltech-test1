import { Box } from '@chakra-ui/react'
import React from 'react'
import HotGame from './game.carousel'
import CategoryGame from './category.carousel'


const MainBody = () => {
    return (
        <Box className='w-full'>
            <HotGame />

            <CategoryGame />
        </Box>
    )
}

export default MainBody