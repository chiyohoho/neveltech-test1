import React from 'react'
import { Image, Text, Box, Flex, } from '@chakra-ui/react'
import { ICarouselCategory } from '@/types/default.types'
import { FaMusic } from 'react-icons/fa';
import { GiClubs } from "react-icons/gi";

interface CarouselCardProps {
    item: ICarouselCategory
}

const CategoryCard: React.FC<CarouselCardProps> = ({ item }) => {
    return (
        <Flex mr={3} p={4} rounded={'3xl'} className='gap-3 bg-[#f2f2f2] aspect-auto'>
            <Box className='w-1/2 flex flex-col gap-5'>
                <Box px={[4, 5, 6, 8]} py={[5, 6, 7, 8]} className={`${item.name === 'Music' ? 'bg-[#5c6eff]' : 'bg-[#19796a]'} rounded-3xl aspect-square overflow-hidden`}>
                    {item.name === 'Music' ? <FaMusic color='white' fontSize={20} /> : <GiClubs color='white' fontSize={20} />}

                    <Text className='text-white font-semibold'>
                        {item.name}
                    </Text>

                    <Text className='text-gray-300 text-xtiny font-light'>
                        {item.description}
                    </Text>
                </Box>

                <Flex>
                    <Image w={'50%'} src={item.icon[0]} alt='' />
                    <Image w={'50%'} src={item.icon[1]} alt='' />
                </Flex>
            </Box>

            <Box className='w-1/2 flex flex-col gap-5'>
                <Flex className=''>
                    <Image w={'50%'} src={item.icon[2]} alt='' />
                    <Image w={'50%'} src={item.icon[3]} alt='' />
                </Flex>

                <Box className={`${item.name === 'Music' ? 'bg-[#5c6eff]' : 'bg-[#19796a]'} rounded-3xl overflow-hidden aspect-auto`}>
                    <Image w={'100%'} src={item.logo} alt='' />
                </Box>
            </Box>

        </Flex>
    )
}

export default CategoryCard
