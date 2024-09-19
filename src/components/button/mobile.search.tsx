import { NavMobileSearchProps } from '@/types/default.types'
import { Box, Input, Popover, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const NavMobileSearch: React.FC<NavMobileSearchProps> = ({ setActive, active }) => {

    return (
        <Popover>
            <PopoverTrigger>
                <Box onClick={() => setActive('4')} className={`aside-menu-text w-full flex flex-col aspect-square justify-center items-center gap-1 ${active === '4' ? 'active' : ''}`}>
                    <IoSearchSharp />
                    <Text className='leading-4'>SEARCH</Text>
                </Box>
            </PopoverTrigger>
            <PopoverContent w={'fit-content'} bg={'#cccccc'}>
                <Input w={'200px'} type='text' placeholder='Search' />
            </PopoverContent>
        </Popover>
    )
}

export default NavMobileSearch
