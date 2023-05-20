/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, Text, Flex, useColorMode, Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';
import { BsChevronDown } from 'react-icons/bs';
import { TbLogout } from 'react-icons/tb';
import { FiChevronRight } from 'react-icons/fi';
import { MdAccountBox, MdSettingsApplications } from 'react-icons/md';

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
                            <MenuList w="200px" minW="0" mt={1.5} p="1px" py={0} bg="#121212" border="1px solid #2F2F2F" borderRadius="0" motionProps={{
                                transition: { duration: 0 },
                                animate: 'visible'}}>
                                <Flex mt={2.5} px={1} borderBottom="1px solid #1c1c1c">
                                    <Flex align='center' mb={2.5} ml={3} p={0.25} pr={2} bg='none' borderRadius={10}>
                                        <MdAccountBox color='#B693F4' fontSize='13px' />
                                        <Text color='purple.300' fontFamily='Inter' fontSize='13px' fontWeight={600}>&nbsp; Account</Text>
                                    </Flex>
                                </Flex>
                                <Flex w="100%">
                                    <Flex w="30px" h="90px" bg={(isHovering === -1 || isHovering === -2 || isHovering === -3) ? 'black' : 'none'}></Flex>
                                    <Flex direction="column">
                                        <MenuItem w="165px" h="30px" mt="-1px" ml="0px" pl="2px" color='#a3a3a3' fontSize='14px' bg="#121212" borderTop="1px solid #1c1c1c" borderRight="1px solid #121212" borderBottom='1px solid #1c1c1c' borderLeft="1px solid #1c1c1c" _hover={{bg: '#1C1C1C', border: '1px solid #161616'}} onClick={() => router.push('/profile')} onMouseEnter={() => setIsHovering(1)} onMouseLeave={() => setIsHovering(0)}>{isHovering === 1 ? <FiChevronRight color="purple.300" /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 1 && <Text>&nbsp;&nbsp;</Text>}Profile</MenuItem>
                                        <MenuItem w="165px" h="30px" ml="0px" pl="2px" color='#a3a3a3' fontSize='14px' bg="#121212" borderTop='1px solid #121212' borderRight="1px solid #121212" borderBottom='1px solid #1c1c1c' borderLeft="1px solid #1c1c1c" _hover={{bg: '#1C1C1C', border: '1px solid #161616'}} onMouseEnter={() => setIsHovering(2)} onMouseLeave={() => setIsHovering(0)}>{isHovering === 2 ? <FiChevronRight color="purple.300" /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 2 && <Text>&nbsp;&nbsp;</Text>}Subscriptions</MenuItem>
                                        <MenuItem w="165px" h="30px" mb={4} ml="0px" pl="2px" color='#a3a3a3' fontSize='14px' bg="#121212" borderTop='1px solid #121212' borderRight="1px solid #121212" borderBottom="1px solid #1c1c1c" borderLeft="1px solid #1c1c1c" _hover={{bg: '#1C1C1C', border: '1px solid #161616'}} onClick={() => router.push('/reset-password')} onMouseEnter={() => setIsHovering(3)} onMouseLeave={() => setIsHovering(0)}>{isHovering === 3 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 3 && <Text>&nbsp;&nbsp;</Text>}Reset Password</MenuItem>
                                    </Flex>
                                </Flex>
                                {/* <Box width="100%" borderBottom="1px solid #1c1c1c"></Box> */}
                                    
                                <Flex mt="0px" p={2} px={1} borderY="1px solid #1c1c1c" >
                                    <Flex align='center' ml={3} my={1} p={0.25} pr={2} bg='none' borderRadius={10}>
                                        {/* <Text ml={2} color="#C7AE7A"></Text> */}
                                        <MdSettingsApplications color='#B693F4' fontSize='13px' />
                                        <Text color="#B693F4" fontFamily='Inter' fontSize='13px' fontWeight={600}>&nbsp; Settings</Text>
                                    </Flex>
                                </Flex>
                                <MenuItem w="165px" h="30px" mt="-1px" ml="30px" pl="2px" color='#a3a3a3' fontSize='14px' bg="#121212" borderTop="1px solid #1c1c1c" borderRight='1px solid #121212' borderBottom='1px solid #1c1c1c' borderLeft="1px solid #1c1c1c" _hover={{bg: '#1C1C1C', border: '1px solid #161616'}} onMouseEnter={() => setIsHovering(4)} onMouseLeave={() => setIsHovering(0)}>{isHovering === 4 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 4 && <Text>&nbsp;&nbsp;</Text>}Theme</MenuItem>
                                <MenuItem w="165px" h="30px" ml="30px" pl="2px" color='#a3a3a3' fontSize='14px' bg="#121212" borderTop='1px solid #121212' borderRight='1px solid #121212' borderBottom="1px solid #1c1c1c" borderLeft="1px solid #1c1c1c" _hover={{bg: '#1C1C1C', border: '1px solid #161616'}} onMouseEnter={() => setIsHovering(5)} onMouseLeave={() => setIsHovering(0)}>{isHovering === 5 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 5 && <Text>&nbsp;&nbsp;</Text>}Language</MenuItem>
                                    
                                <Box w="100%" mt={6} borderBottom="1px solid #1c1c1c"></Box>
                                    
                                <Flex align="center" h="35px" mt={3} px={1} onClick={() => signOut(auth)}>
                                    <Flex align="center" direction="row" w="100px" h="30px" mr={5} ml="auto" border="1px solid #1f2224" _hover={{bg: '#1c1c1c', cursor: 'pointer', border: '1px solid #323232'}}>
                                        <Text ml={2} color="#a3a3a3"><TbLogout /></Text>
                                        <Text h="35px" mt="12px" color="#a3a3a3" fontSize='14px'>&nbsp; Logout</Text>
                                    </Flex>
                                </Flex>
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