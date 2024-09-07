'use client'
import iconImg from '../assets/icons/icon.png'
import { FiUser } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


interface Props {
    children: React.ReactNode
}

const NavLink = (props: Props) => {
    const { children } = props
    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box className='flex'>
                            <img className='size-9' src={iconImg} alt="" />
                            <h1 className="text-2xl font-bold" style={{ fontFamily: 'barlow' }}>
                                Furni<span className="text-blue-500">Flex</span>
                            </h1>
                        </Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} style={{ fontFamily: 'barlow' }}>
                            <NavLink>Home</NavLink>
                            <NavLink>Products</NavLink>
                            <NavLink>Categories</NavLink>
                            <NavLink>Custom</NavLink>
                            <NavLink>Blog</NavLink>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Link to='/cart'>
                            <div className="mr-9 hover:cursor-pointer">
                                <div className="relative py-2">
                                    <div className="absolute t-0 left-3">
                                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                                            3
                                        </p>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="mt-4 h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList style={{ fontFamily: 'barlow' }}>
                                <MenuItem><Link to='/profile'><div className='flex items-center gap-2'><FiUser /><h1>Profile</h1></div></Link></MenuItem>
                                <MenuDivider />
                                <MenuItem><Link to='/login'><div className='flex items-center gap-2'><CiLogout /><h1>Logout</h1></div></Link></MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4} style={{ fontFamily: 'barlow' }}>
                            <NavLink>Home</NavLink>
                            <NavLink>Products</NavLink>
                            <NavLink>Categories</NavLink>
                            <NavLink>Custom</NavLink>
                            <NavLink>Blog</NavLink>
                        </Stack>
                    </Box>
                ) : null}
            </Box>

        </>
    )
}