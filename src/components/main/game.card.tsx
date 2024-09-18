import React from 'react'
import { Image, Text, Box, Flex, } from '@chakra-ui/react'
import { ICarouselCard } from '@/types/default.types'

interface CarouselCardProps {
    item: ICarouselCard;
}

const GameCard: React.FC<CarouselCardProps> = ({ item }) => {
    return (
        <Box mr={3} p={1}>
            <Image src={item.banner} alt='' />

            <Flex className='items-center gap-4 mt-2'>
                <Image w={[12, 14, 16, 20]} src={item.image} alt='' />

                <Box>
                    <Text className='font-semibold'>{item.name}</Text>
                    <Text noOfLines={2} className='text-xtiny'>
                        {item.description}
                    </Text>
                </Box>

                <Box px={4} rounded={6} cursor={'pointer'} border={'1px solid #ccc'} h={'fit-content'}>
                    View
                </Box>
            </Flex>
        </Box>
    )
}

export default GameCard
