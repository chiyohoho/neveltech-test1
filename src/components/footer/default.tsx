import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import './styles.css'
import Image from 'next/image'
import { FooterLogo, Linkedin, Twitter, YouTube } from '@/public/export'
import NavFooter from './nav'

const DefaultFooter = () => {
    return (
        <Box className='border-t-[1px] border-t-gray-200 py-[100px] max-[576px]:py-[40px]'>
            <Container maxW='container.lg'>
                <Flex className='footer justify-between max-[576px]:flex-col-reverse max-[576px]:border-none max-[576px]:gap-5 max-[1000px]:gap-20 border-b-[1px] border-b-gray-200 pb-[50px]'>
                    <Box className='footer-left cursor-pointer max-[1000px]:w-full max-[576px]:text-center max-[576px]:hidden'>
                        <Image className='max-[576px]:hidden' width={53} height={31} src={FooterLogo} alt='' />

                        <Text mt={2} mb={5} className='text-textFooterLeft'>
                            Valletta Buildings, South Street,
                            <br />
                            Valletta - VLT 1103 Malta
                        </Text>

                        <Flex gap={5} className='max-[576px]:justify-center'>
                            <Image className='hover:opacity-50 duration-200 ease-in-out transition-all' width={20} height={20} src={Twitter} alt='Twitter' />
                            <Image className='hover:opacity-50 duration-200 ease-in-out transition-all' width={20} height={20} src={YouTube} alt='YouTube' />
                            <Image className='hover:opacity-50 duration-200 ease-in-out transition-all' width={20} height={20} src={Linkedin} alt='Linkedin' />
                        </Flex>
                    </Box>

                    <Box className='footer-left cursor-pointer max-[1000px]:w-full max-[576px]:block hidden'>
                        <Image className='max-[576px]:hidden' width={53} height={31} src={FooterLogo} alt='' />

                        <Text mt={2} mb={5} className='text-textFooterLeft text-xtiny'>
                            Valletta Buildings, South Street,
                            Valletta - VLT 1103 Malta
                        </Text>

                        <Flex gap={5} className=''>
                            <Image className='hover:opacity-50 duration-200 ease-in-out transition-all' width={20} height={20} src={Twitter} alt='Twitter' />
                            <Image className='hover:opacity-50 duration-200 ease-in-out transition-all' width={20} height={20} src={YouTube} alt='YouTube' />
                            <Image className='hover:opacity-50 duration-200 ease-in-out transition-all' width={20} height={20} src={Linkedin} alt='Linkedin' />
                        </Flex>

                        <Text className='text-gray-400 text-base mt-5 max-[576px]:visible'>COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</Text>

                    </Box>

                    <Box className='max-[1000px]:hidden block'>
                        <Flex className='footer-right gap-20'>
                            <Box>
                                <Text mb={3} className='font-semibold'>WEB MAP</Text>

                                <Flex className='flex-col text-textFooterLeft'>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Home</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Games</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>News</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Math</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Company</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Events</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Partners</Text>
                                </Flex>
                            </Box>

                            <Box>
                                <Text mb={3} className='font-semibold'>ABOUT US</Text>

                                <Flex className='flex-col text-textFooterLeft'>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Licensing</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Certification</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Responsible Gaming</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Exhibitions</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Copyright Protection</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Privacy Policy</Text>
                                </Flex>
                            </Box>

                            <Box>
                                <Text mb={3} className='font-semibold'>EVENTS</Text>

                                <Flex className='flex-col text-textFooterLeft'>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>PG ICE 2017</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>PG ICE 2018</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>PG ICE 2019</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>About ICE</Text>
                                </Flex>
                            </Box>

                            <Box>
                                <Text mb={3} className='font-semibold'>OUR PARTNERS</Text>

                                <Flex className='flex-col text-textFooterLeft'>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Relax Gaming</Text>
                                    <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Leander Games</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>

                    <Box className='max-[1000px]:block max-[1000px]:w-full hidden'>
                        <NavFooter />
                    </Box>
                </Flex>

                <Text className='text-gray-400 text-base mt-[40px] max-[576px]:hidden'>COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</Text>

            </Container>
        </Box>
    )
}

export default DefaultFooter
