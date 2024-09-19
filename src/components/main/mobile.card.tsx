import React from 'react'
import { Image, Text, Box, Flex, Center, } from '@chakra-ui/react'
import { ICarouselCard } from '@/types/default.types'

interface CarouselCardProps {
    item: ICarouselCard;
}

const MobileCard: React.FC<CarouselCardProps> = ({ item }) => {
    return (
        <Box className='max-h-[500px] h-[500px] flex flex-col' mr={3} py={1} px={5}>
            <Center className='w-full h-1/2'>
                <Box
                    bgImage={`url(${item.banner})`}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    h="100%"
                    w="100%"
                    borderRadius={'20px 20px 0px 0px'}
                >
                </Box>
            </Center>

            <Box className='h-1/2 bg-[#c58f03] rounded-b-[20px]'>
                <Center className='w-full h-full px-10'>
                    <Box className='flex flex-col gap-5'>
                        <Flex className='gap-4 items-start'>
                            <Image className='aspect-square w-[60px] h-[60px]' src={item.image} alt='' />

                            <Box>
                                <Text className='text-large font-semibold leading-5 text-white'>
                                    {item.name}
                                </Text>

                                <Text className='pt-1 text-[#ffffff]' noOfLines={2}>{item.description}</Text>
                            </Box>
                        </Flex>

                        <Flex className='justify-between'>
                            <Box>
                                <Text className='text-[18px] text-[#ffffff]'>
                                    MEDIUM
                                </Text>

                                <Text className='text-[#f2f2f2] text-xtiny'>
                                    Volatility
                                </Text>
                            </Box>

                            <Box>
                                <Text className='text-[18px] text-[#ffffff]'>
                                    95.01%
                                </Text>

                                <Text className='text-[#f2f2f2] text-xtiny'>
                                    RTP
                                </Text>
                            </Box>

                            <Box>
                                <Text className='text-[18px] text-[#ffffff]'>
                                    x5000
                                </Text>

                                <Text className='text-[#f2f2f2] text-xtiny'>
                                    Maximum Win
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Center>
            </Box>


        </Box>
    )
}

export default MobileCard
