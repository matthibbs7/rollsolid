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
                                    <Flex mt={2.5} px={1} >
                                        <Text ml={2} color="orange.300" mt="3px"><RiAccountBoxFill /></Text>
                                        <Text color="orange.300" fontFamily="Avenir Next" fontWeight="semibold" height="35px">&nbsp; Account</Text>
                                        
                                    </Flex>
                                    
                                    <MenuItem onMouseEnter={() => setIsHovering(1)} onMouseLeave={() => setIsHovering(0)} height="30px" pl="13px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#1C1C1C'}} bg="#121212">{isHovering === 1 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 1 && <Text>&nbsp;&nbsp;</Text>}Profile</MenuItem>
                                    <MenuItem onMouseEnter={() => setIsHovering(2)} onMouseLeave={() => setIsHovering(0)} height="30px" pl="13px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#1C1C1C'}} bg="#121212">{isHovering === 2 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 2 && <Text>&nbsp;&nbsp;</Text>}Subscriptions</MenuItem>
                                    <MenuItem onClick={() => router.push('/reset-password')} mb={4} onMouseEnter={() => setIsHovering(3)} onMouseLeave={() => setIsHovering(0)} height="30px" pl="13px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#1C1C1C'}} bg="#121212">{isHovering === 3 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 3 && <Text>&nbsp;&nbsp;</Text>}Reset Password</MenuItem>
                                    
                                    <Box width="100%" borderBottom="1px solid #1c1c1c"></Box>
                                    
                                    <Flex mt={3} px={1} >
                                        <Text ml={2} color="orange.300" mt="3px"><MdSettingsApplications /></Text>
                                        <Text color="orange.300" fontFamily="AvenirNext-Demibold" height="35px">&nbsp; Settings</Text>
                                        
                                    </Flex>


                                    
                                    
                                    <MenuItem onMouseEnter={() => setIsHovering(4)} onMouseLeave={() => setIsHovering(0)} height="30px" pl="13px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#1C1C1C'}} bg="#121212">{isHovering === 4 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 4 && <Text>&nbsp;&nbsp;</Text>}Color Mode</MenuItem>
                                    <MenuItem onMouseEnter={() => setIsHovering(5)} onMouseLeave={() => setIsHovering(0)} height="30px" pl="13px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#1C1C1C'}} bg="#121212">{isHovering === 5 ? <FiChevronRight /> : <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}{isHovering === 5 && <Text>&nbsp;&nbsp;</Text>}Language</MenuItem>
                                    
                                    <Box mt={4} width="100%" borderBottom="1px solid #1c1c1c"></Box>
                                    
                                    <Flex onClick={() => signOut(auth)} height="30px" px={1} mt={3} _hover={{bg: '#1C1C1C', cursor: 'pointer'}} >
                                        <Text color="white" ml={2} mt={1.5}><TbLogout /></Text>
                                        <Text color="white" mt={0.5} fontFamily="AvenirNext-Demibold" height="30px">&nbsp; Logout</Text>
                                        
                                    </Flex>
                                    <Box mb={4} mt={3} px={3}>
                                        <span style={{fontSize: '9.5pt'}}>
                                            <Text fontFamily="AvenirNext-Regular" as="span">Tip: use &nbsp;</Text>
                                            <Kbd bg="black">↑</Kbd> <Text as="span" fontFamily="AvenirNext-Regular">or</Text> <Kbd bg="black">↓</Kbd>
                                            <Text as="span" fontFamily="AvenirNext-Regular">&nbsp;&nbsp;to navigate menu items</Text>
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