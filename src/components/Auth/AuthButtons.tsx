/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, Text, Flex, useColorMode, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsChevronDown } from 'react-icons/bs';
import { MdAccountBox, MdLanguage, MdLockPerson, MdLogout } from 'react-icons/md';
import { auth } from '@/firebase/clientApp';
import { signOut } from 'firebase/auth';

type AuthButtonsProps = {
    user: any;
}

const AuthButtons:React.FC<AuthButtonsProps> = ({ user }) => {
    const { colorMode } = useColorMode();
    const router = useRouter();
    const cmb = colorMode === 'light' ? '#121212' : 'white';
    const emailRegex = /.+?(?=@)/;
    const [isHovering, setIsHovering] = useState(0);

    return (
        <Flex align="center" h="100%" ml={user ? '0px' : 'auto'} >  
            {user ? (
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton as={Button} w="-moz-fit-content" h="30px" px={0} color='#a3a3a3' bg="none" border="1px solid none" borderRadius="0" _hover={{cursor: 'pointer', color: '#D1D1D1'}} _active={{color: '#D1D1D1'}} isActive={isOpen}>
                                <Flex textAlign="center">
                                    <Text p={0.5} px={2}  fontSize='12px' fontWeight={400} borderRadius="0px">{user.email.match(emailRegex)}&nbsp;&nbsp;</Text>
                                    <Text as="span" mt="4px" mr={2} ml={-2} fontSize="10px"><BsChevronDown /></Text>
                                </Flex>
                            </MenuButton>
                            <MenuList w="240px" minW="0" h='250px' mt={1.5} px={2} py={0} bg="#161616" border="1px solid #494D51" borderRadius='6px' motionProps={{
                                transition: { duration: 0 },
                                animate: 'visible'}}>
                                <MenuItem h='48px' mt={3} px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}} onClick={() => router.push('/profile')}>
                                    <MdAccountBox color='#a3a3a3' fontSize='28px' />
                                    <Flex direction='column' ml={3}>
                                        <Text color='#d1d1d1' fontSize='12px'>Profile</Text>
                                        <Text color='#a3a3a3' fontSize='11px'>Configure user settings</Text>
                                    </Flex>
                                </MenuItem>
                                <MenuItem h='48px' mt={0} px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}}>
                                    <MdLanguage color='#a3a3a3' fontSize='28px' />
                                    <Flex direction='column' ml={3}>
                                        <Text color='#d1d1d1' fontSize='12px'>Language</Text>
                                        <Text color='#a3a3a3' fontSize='11px'>Selected Language: EN</Text>
                                    </Flex>
                                </MenuItem>
                                <MenuItem h='48px' mt={0} px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}} onClick={() => router.push('/reset-password')}>
                                    <MdLockPerson color='#a3a3a3' fontSize='28px' />
                                    <Flex direction='column' ml={3}>
                                        <Text color='#d1d1d1' fontSize='12px'>Reset Password</Text>
                                        <Text color='#a3a3a3' fontSize='11px'>Configure user settings</Text>
                                    </Flex>
                                </MenuItem>
                                
                                <MenuItem h='48px' mt={0} px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}} onClick={() => signOut(auth)}>
                                    <MdLogout color='#a3a3a3' fontSize='28px' />
                                    <Flex direction='column' ml={3}>
                                        <Text color='#d1d1d1' fontSize='12px'>Logout</Text>
                                        <Text color='#a3a3a3' fontSize='11px'>Sign out of Rollsolid</Text>
                                    </Flex>
                                </MenuItem>
                                <Box mt={2} mb={2} px={3}>
                                    <span style={{fontSize: '8.5px'}}>
                                        <Text as="span" color="#d1d1d1">© 2023 Rollsolid, Inc. All rights reserved</Text>
                                        {/* <Kbd bg="black">↑</Kbd> <Text as="span" fontFamily="AvenirNext-Regular">or</Text> <Kbd bg="black">↓</Kbd>
                                            <Text as="span" fontFamily="AvenirNext-Regular">&nbsp;&nbsp;to navigate menu items</Text> */}
                                    </span>
                                </Box>
                                {/* <Text mt={3} mb={3} ml={5} fontSize="8pt" fontFamily="AvenirNext-Regular" color="#454545">© 2023 Rollsolid Inc. All rights reserved</Text> */}
                            </MenuList>
                        </>
                    )}
                </Menu>
            // 
            ) : (
                <>
                    <Button h="60%" mr={2} color='#a3a3a3' fontSize="12px" fontWeight={400} bg='none' borderRadius="0" _hover={{color: '#d1d1d1'}} _active={{color: '#d1d1d1'}} onClick={() => router.push('/login')}><Text fontSize="12px">Sign In</Text></Button>
                    <Flex align='center' justify='center' w='80px' h='60%' color='black' bg='purple.300' borderRadius='4px' _hover={{bg: 'purple.400', cursor: 'pointer'}} onClick={() => router.push('/signup')}>
                        <Text fontSize='12px' fontWeight={400}>Try for free</Text>
                    </Flex>
                    {/* <Button h="60%" color='#a3a3a3' fontSize="15pt" fontWeight={600} bg='none' border="1px solid #161616" borderRadius="0" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} onClick={() => router.push('/signup')}><Text fontSize="12px">Sign Up</Text></Button> */}
                </>
            )
            }
            
        </Flex>
    );
};
export default AuthButtons;