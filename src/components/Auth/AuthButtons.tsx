import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, useColorMode, Box, Menu, MenuButton, MenuItem, MenuList, Kbd } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';
import { BsChevronDown } from 'react-icons/bs'
import { RiAccountBoxFill } from 'react-icons/ri'
import { TbLogout } from 'react-icons/tb';
import { MdSettingsApplications } from 'react-icons/md'
import { FiChevronRight } from 'react-icons/fi';
import {  usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion"


type AuthButtonsProps = {
    user: any;
}

const AuthButtons:React.FC<AuthButtonsProps> = ({ user }) => {
    // const [authenticated, setAuthenticated]
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#121212' : 'white';
    const emailRegex = /.+?(?=@)/
    const [isHovering, setIsHovering] = useState(0);
    // useEffect(() => {
    //     if (!user) {
    //         router.push('/login')
    //     }
    // }, [user])

    return (
        <Flex ml="auto" height="100%" align="center">  
            {user ? (
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton motionPreset="none" borderRadius="0" _active={{bg: 'none', border: "1px solid #494D51"}} h="30px" width="-moz-fit-content" px={0} border="1px solid #121212" _hover={{bg: 'none', cursor: 'pointer', border: "1px solid #494D51"}} bg="none" isActive={isOpen} as={Button}>
                                    <Flex textAlign="center">
                                         <Text color="white" borderRadius="0px" p={0.5} px={2.5} fontFamily="AvenirNext-DemiBold">{user.email.match(emailRegex)}</Text>
                                         <Text fontSize="10pt" ml={-1} mt="5px" mr={2} as="span"><BsChevronDown /></Text>
                                         {/* <Button onClick={() => signOut(auth)} _hover={{backgroundColor: '#1f1f1f'}} bg={cmb} h="60%" borderRadius="0" fontWeight={500} fontSize="11pt">Profile</Button> */}
                                    </Flex>
                                </MenuButton>
                                <MenuList motionProps={{
    transition: { duration: 0 },
    animate: 'visible'}} minW="0" width="200px" mt={1.5} border="1px solid #494D51" p="1px" bg="#121212" borderRadius="0" py={0}>
                                    <Flex mt={2.5} px={1} borderBottom="1px solid #1c1c1c">
                                        <Flex mb={2.5} ml={3} align='center' border='1px solid grey' p={0.25} pr={2}>
                                            {/* <Text ml={2} color="#C7AE7A"><MdSettingsApplications /></Text> */}
                                            <Text fontSize='10.5pt' color="#C7AE7A" fontWeight={700}>&nbsp; ACCOUNT</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex width="100%">
                                        <Flex width="30px" height="90px" bg={(isHovering === -1 || isHovering === -2 || isHovering === -3) ? 'black' : 'none'}></Flex>
                                        <Flex flexDirection="column">
                                            <MenuItem color='#87B6D3' onClick={() => router.push('/profile')} mt="-1px" ml="0px" width="165px" borderRight="1px solid #121212" borderLeft="1px solid #1c1c1c" borderTop="1px solid #1c1c1c" onMouseEnter={() => setIsHovering(1)} onMouseLeave={() => setIsHovering(0)} height="30px" pl="2px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#1C1C1C', border: '1px solid grey'}} bg="#121212">{isHovering === 1 ? <FiChevronRight color="purple.300" /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 1 && <Text>&nbsp;&nbsp;</Text>}Profile</MenuItem>
                                            <MenuItem color='#87B6D3' ml="0px" width="165px" borderRight="1px solid #121212" borderLeft="1px solid #1c1c1c" onMouseEnter={() => setIsHovering(2)} onMouseLeave={() => setIsHovering(0)} height="30px" pl="2px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#1C1C1C', border: '1px solid grey'}} bg="#121212">{isHovering === 2 ? <FiChevronRight color="purple.300" /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 2 && <Text>&nbsp;&nbsp;</Text>}Subscriptions</MenuItem>
                                            <MenuItem color='#87B6D3' ml="0px" width="165px" borderRight="1px solid #121212" borderLeft="1px solid #1c1c1c" borderBottom="1px solid #1c1c1c" onClick={() => router.push('/reset-password')} mb={4} onMouseEnter={() => setIsHovering(3)} onMouseLeave={() => setIsHovering(0)} height="30px" pl="2px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#1C1C1C', border: '1px solid grey'}} bg="#121212">{isHovering === 3 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 3 && <Text>&nbsp;&nbsp;</Text>}Reset Password</MenuItem>
                                        </Flex>
                                    </Flex>
                                    {/* <Box width="100%" borderBottom="1px solid #1c1c1c"></Box> */}
                                    
                                    <Flex p={2} mt="0px" px={1} borderY="1px solid #1c1c1c" >
                                        <Flex my={1} ml={3} align='center' border='1px solid grey' p={0.25} pr={2}>
                                            {/* <Text ml={2} color="#C7AE7A"><MdSettingsApplications /></Text> */}
                                            <Text fontSize='10.5pt' color="#C7AE7A" fontWeight={700}>&nbsp; SETTINGS</Text>
                                        </Flex>
                                    </Flex>


                                    
                                    
                                    <MenuItem mt="-1px" ml="30px" width="165px" borderLeft="1px solid #1c1c1c" borderTop="1px solid #1c1c1c" onMouseEnter={() => setIsHovering(4)} onMouseLeave={() => setIsHovering(0)} height="30px" pl="2px" fontFamily="AvenirNext-Regular" _hover={{bg: '#1C1C1C', border: '1px solid grey'}} bg="#121212">{isHovering === 4 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 4 && <Text>&nbsp;&nbsp;</Text>}Theme</MenuItem>
                                    <MenuItem ml="30px" width="165px" borderLeft="1px solid #1c1c1c" borderBottom="1px solid #1c1c1c" onMouseEnter={() => setIsHovering(5)} onMouseLeave={() => setIsHovering(0)} height="30px" pl="2px" fontFamily="AvenirNext-Regular" _hover={{bg: '#1C1C1C', border: '1px solid grey'}} bg="#121212">{isHovering === 5 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 5 && <Text>&nbsp;&nbsp;</Text>}Language</MenuItem>
                                    
                                    <Box mt={6} width="100%" borderBottom="1px solid #1c1c1c"></Box>
                                    
                                    <Flex align="center" onClick={() => signOut(auth)} height="35px" px={1} mt={3}>
                                        <Flex _hover={{bg: '#1c1c1c', cursor: 'pointer', border: '1px solid #1c1c1c'}} ml="auto" mr={5} flexDir="row" align="center" border="1px solid #1c1c1c" width="100px" height="30px">
                                            <Text color="white" ml={2}><TbLogout /></Text>
                                            <Text color="white" mt="12px" fontFamily="AvenirNext-Demibold" height="35px">&nbsp; Logout</Text>
                                        </Flex>
                                    </Flex>
                                    <Box mb={4} mt={1} px={3}>
                                        <span style={{fontSize: '7pt'}}>
                                            <Text color="#868686" fontFamily="AvenirNext-Regular" as="span">© 2023 Rollsolid, Inc. All rights reserved</Text>
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
                        <Button border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} onClick={() => router.push('/login')} bg={cmb} h="60%" borderRadius="0" fontWeight={500} fontSize="15pt"><Text fontSize="11pt">Login</Text></Button>
                        <Button border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} onClick={() => router.push('/signup')} bg={cmb} h="60%" borderRadius="0" fontWeight={500} fontSize="15pt"><Text fontSize="11pt">Sign Up</Text></Button>
                    </>
                )
            }
            
        </Flex>
    )
}
export default AuthButtons;