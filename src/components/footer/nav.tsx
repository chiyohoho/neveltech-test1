'use client'

import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Text,
    Flex,
} from '@chakra-ui/react'

import { FaPlus, FaMinus } from "react-icons/fa6";

const NavFooter = () => {
    return (
        <Accordion allowToggle>
            <AccordionItem borderBottom={'1px solid #e2e8f0'} borderTop={'none'}>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton paddingBottom={6}>
                                <Box as='span' flex='1' textAlign='left'>
                                    WEB MAP
                                </Box>
                                {isExpanded ? (
                                    <FaMinus />
                                ) : (
                                    <FaPlus />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex className='flex-col text-textFooterLeft'>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Home</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Games</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>News</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Math</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Company</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Events</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Partners</Text>
                            </Flex>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>

            <AccordionItem borderBottom={'1px solid #e2e8f0'} borderTop={'none'}>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton paddingBottom={6}>
                                <Box as='span' flex='1' textAlign='left'>
                                    ABOUT US
                                </Box>
                                {isExpanded ? (
                                    <FaMinus />
                                ) : (
                                    <FaPlus />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex className='flex-col text-textFooterLeft'>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Licensing</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Certification</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Responsible Gaming</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Exhibitions</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Copyright Protection</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Privacy Policy</Text>
                            </Flex>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>

            <AccordionItem borderBottom={'1px solid #e2e8f0'} borderTop={'none'}>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton paddingBottom={6}>
                                <Box as='span' flex='1' textAlign='left'>
                                    EVENTS
                                </Box>
                                {isExpanded ? (
                                    <FaMinus />
                                ) : (
                                    <FaPlus />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex className='flex-col text-textFooterLeft'>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>PG ICE 2017</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>PG ICE 2018</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>PG ICE 2019</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>About ICE</Text>
                            </Flex>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>

            <AccordionItem borderBottom={'1px solid #e2e8f0'} borderTop={'none'}>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton paddingBottom={6}>
                                <Box as='span' flex='1' textAlign='left'>
                                    OUR PARTNERS
                                </Box>
                                {isExpanded ? (
                                    <FaMinus />
                                ) : (
                                    <FaPlus />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex className='flex-col text-textFooterLeft'>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Relax Gaming</Text>
                                <Text className='cursor-pointer hover:text-black transition-all duration-300 ease-in-out'>Leander Games</Text>
                            </Flex>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    )
}

export default NavFooter
