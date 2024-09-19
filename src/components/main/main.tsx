import { Box } from '@chakra-ui/react'
import React from 'react'
import HotGame from './game.carousel'
import CategoryGame from './category.carousel'
import GameMobile from './game.mobile.carousel'


const MainBody = () => {
    return (
        <Box className='w-full'>
            <Box className="w-full max-540:hidden block">
                <HotGame />
            </Box>

            <Box className="w-full max-540:block hidden">
                <GameMobile />
            </Box>

            <CategoryGame />
        </Box>
    )
}

export default MainBody