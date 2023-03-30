import React, { useEffect } from 'react';
import { Button, Text, Flex, useColorMode, Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';
import { BsChevronDown } from 'react-icons/bs'
import { RiAccountBoxFill } from 'react-icons/ri'
import { TbLogout } from 'react-icons/tb';
import { MdSettingsApplications } from 'react-icons/md'

type AuthButtonsProps = {
    user: any;
}

const AuthButtons:React.FC<AuthButtonsProps> = ({ user }) => {
    // const [authenticated, setAuthenticated]
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#121212' : 'white';
    const emailRegex = /.+?(?=@)/

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
                                <MenuButton borderRadius="0" _active={{bg: 'none', border: "1px solid #494D51"}} h="30px" width="-moz-fit-content" px={0} border="1px solid #121212" _hover={{bg: 'none', cursor: 'pointer', border: "1px solid #494D51"}} bg="none" isActive={isOpen} as={Button}>
                                    <Flex textAlign="center">
                                         <Text borderRadius="0px" p={0.5} px={2.5} fontFamily="AvenirNext-DemiBold">{user.email.match(emailRegex)}</Text>
                                         <Text fontSize="10pt" ml={-1} mt="5px" mr={2} as="span"><BsChevronDown /></Text>
                                         {/* <Button onClick={() => signOut(auth)} _hover={{backgroundColor: '#1f1f1f'}} bg={cmb} h="60%" borderRadius="0" fontWeight={500} fontSize="11pt">Profile</Button> */}
                                    </Flex>
                                </MenuButton>
                                <MenuList width="210px" mt={1.5} border="1px solid #494D51" p="1px" bg="#121212" borderRadius="0" py={0}>
                                    <Flex mt={2} px={3} >
                                        <Text ml={2} color="#454545" mt="3px"><RiAccountBoxFill /></Text>
                                        <Text color="#454545" fontFamily="AvenirNext-Demibold" height="35px">&nbsp; Account</Text>
                                        
                                    </Flex>
                                    
                                    <MenuItem height="30px" pl="46px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#282828'}} bg="#121212">Profile</MenuItem>
                                    <MenuItem height="30px" pl="46px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#282828'}} bg="#121212">Subscriptions</MenuItem>
                                    <MenuItem height="30px" pl="46px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#282828'}} bg="#121212">Reset Password</MenuItem>
                                    <Flex mt={6} px={3} >
                                        <Text ml={2} color="#454545" mt="3px"><MdSettingsApplications /></Text>
                                        <Text color="#454545" fontFamily="AvenirNext-Demibold" height="35px">&nbsp; Settings</Text>
                                        
                                    </Flex>
                                    
                                    <MenuItem height="30px" pl="46px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#282828'}} bg="#121212">Color Mode</MenuItem>
                                    <MenuItem height="30px" pl="46px" fontFamily="AvenirNext-DemiBold" _hover={{bg: '#282828'}} bg="#121212">Language</MenuItem>
                                    <Flex onClick={() => signOut(auth)} height="30px" px={3} mt={3} _hover={{bg: '#282828', cursor: 'pointer'}} >
                                        <Text color="red.300" ml={2} mt={1.5}><TbLogout /></Text>
                                        <Text color="red.300" mt={0.5} fontFamily="AvenirNext-Demibold" height="30px">&nbsp; Logout</Text>
                                        
                                    </Flex>
                                    <Text mt={3} mb={3} ml={5} fontSize="8pt" fontFamily="AvenirNext-Regular" color="#454545">© 2023 Rollsolid. All rights reserved</Text>
                                </MenuList>
                            </>
                             )}
                        </Menu>
                    // 
                ) : (
                    <>
                        <Button onClick={() => router.push('/login')} _hover={{backgroundColor: '#1f1f1f'}} bg={cmb} h="60%" borderRadius="0" fontWeight={500} fontSize="15pt"><Text fontSize="11pt">Login</Text></Button>
                        <Button onClick={() => router.push('/signup')} _hover={{backgroundColor: '#1f1f1f'}} bg={cmb} h="60%" borderRadius="0" fontWeight={500} fontSize="15pt"><Text fontSize="11pt">Sign Up</Text></Button>
                    </>
                )
            }
            
        </Flex>
    )
}
export default AuthButtons;