'use client'

import React, { useState, useEffect } from 'react'
import { IconButton, Box } from '@chakra-ui/react'
import { FaAngleUp } from 'react-icons/fa6'

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <Box position="fixed" bottom="50px" right="50px">
            {isVisible && (
                <IconButton
                    icon={<FaAngleUp />}
                    colorScheme="teal"
                    aria-label="Scroll to top"
                    onClick={scrollToTop}
                    isRound={true}
                    size="md"
                    boxShadow="lg"
                />
            )}
        </Box>
    )
}

export default ScrollToTopButton
