import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Flex,
    Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import { FaAlignJustify } from "react-icons/fa6";

function NavDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [active, setActive] = useState('GAME')


    useEffect(() => {
        const handleResize = () => {
            onClose()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [onClose])

    return (
        <>
            <Button colorScheme='transparent' onClick={onOpen}>
                <FaAlignJustify />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent bg={'rgba(0,0,0,0.7)'}>
                    <DrawerCloseButton color={'white'} border={'1px solid #ccc'} />

                    <DrawerBody mt={10}>
                        <Flex className='header-nav-menu flex-col gap-5'>
                            <Text onClick={() => setActive('HOME')} className={`header-nav-menu-text-mobile ${active === 'HOME' ? 'active text-white font-normal' : 'text-navText font-light'}`}>HOME</Text>
                            <Text onClick={() => setActive('GAME')} className={`header-nav-menu-text-mobile ${active === 'GAME' ? 'active text-white font-normal' : 'text-navText font-light'}`}>GAME</Text>
                            <Text onClick={() => setActive('NEWS')} className={`header-nav-menu-text-mobile ${active === 'NEWS' ? 'active text-white font-normal' : 'text-navText font-light'}`}>NEWS</Text>
                            <Text onClick={() => setActive('MATH')} className={`header-nav-menu-text-mobile ${active === 'MATH' ? 'active text-white font-normal' : 'text-navText font-light'}`}>MATH</Text>
                            <Text onClick={() => setActive('COMPANY')} className={`header-nav-menu-text-mobile ${active === 'COMPANY' ? 'active text-white font-normal' : 'text-navText font-light'}`}>COMPANY</Text>
                            <Text onClick={() => setActive('EVENTS')} className={`header-nav-menu-text-mobile ${active === 'EVENTS' ? 'active text-white font-normal' : 'text-navText font-light'}`}>EVENTS</Text>
                            <Text onClick={() => setActive('PARTNERS')} className={`header-nav-menu-text-mobile ${active === 'PARTNERS' ? 'active text-white font-normal' : 'text-navText font-light'}`}>PARTNERS</Text>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavDrawer