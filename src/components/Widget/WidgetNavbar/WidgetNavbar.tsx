import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, useColorMode, Box, Menu, MenuButton, MenuItem, MenuList, Kbd, Divider } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';
import { BsChevronDown } from 'react-icons/bs'
import { RiAccountBoxFill } from 'react-icons/ri'
import { Tb3DCubeSphere, TbLogout } from 'react-icons/tb';
import { MdOutlineTimer, MdOutlineWidgets, MdSettingsApplications } from 'react-icons/md'
import { FiChevronRight } from 'react-icons/fi';
import {  usePrefersReducedMotion } from "@chakra-ui/react";
import { IoStatsChart } from 'react-icons/io5'
import { FaRegStickyNote } from 'react-icons/fa';
import { GiCubes, GiPokerHand, GiSplitArrows } from 'react-icons/gi';
import { CloseButton } from '@chakra-ui/react'

const WidgetNavbar:React.FC = () => {
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
        <Flex ml={0} height="100%" align="center">  
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton h="60%" motionPreset="none" borderRadius="0" _active={{bg: 'none', border: "1px solid #494D51"}} width="-moz-fit-content" px={3} border="1px solid #121212" _hover={{bg: 'none', cursor: 'pointer', border: "1px solid #494D51"}} bg={cmb} isActive={isOpen} as={Button}>
                        {/* <Button border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} ml={0} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="13pt"><MdOutlineWidgets color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Widgets</Text></Button> */}
                            <Flex textAlign="center" align='center'>
                                    <Text fontSize='13pt'><MdOutlineWidgets color="#D3D8DE" /></Text>
                                    <Text color="white" borderRadius="0px" pt={0.5} pl={2.5} fontFamily="AvenirNext-DemiBold" fontSize='11pt'>Widgets</Text>
                                    
                            </Flex>
                        </MenuButton>
                        <MenuList motionProps={{
transition: { duration: 0 },
animate: 'visible'}} minW="0" width="600px" height="236px" mt={1.5} border="1px solid #494D51" p="1px" bg="#121212" borderRadius="0" py={0}>
                            <Flex ml={2} flexDirection='row' py={4} px={2}>
                                <Flex width='33%' flexDirection='column'>
                                    <Text border='1px solid grey' color='#C7AE7A' ml={0} pl={2} fontSize='11pt' mb={4} fontWeight={700}>PROBABILITY</Text>
                                    <Divider />
                                    
                                    <Flex height='32px' borderLeft='1px solid grey' py={1} px={2} borderRadius={0} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <MenuItem p={0} bg='none' height='100%'>
                                            <IoStatsChart color='#87B6D3' />
                                            <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Ranges</Text>
                                        </MenuItem>
                                    </Flex>
                                    
                                    <Flex borderLeft='1px solid grey' py={1} px={2} borderRadius={0} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <IoStatsChart color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Ranges</Text>
                                    </Flex>
                                    <Flex borderLeft='1px solid grey' py={1} px={2} borderRadius={0} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <IoStatsChart color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Ranges</Text>
                                    </Flex>
                                    <Flex borderBottom='1px solid grey' borderLeft='1px solid grey' p={1} px={2} borderRadius={0} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <GiSplitArrows color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>EQ</Text>
                                    </Flex>
                                    
                                </Flex>
                                <Flex width='33%' flexDirection='column'>
                                    <Text border='1px solid grey' color='#C7AE7A' ml={0} pl={2} fontSize='11pt' mb={4} fontWeight={700}>GRID</Text>
                                    <Divider />
                                    <Flex borderLeft='1px solid grey' p={1} px={2} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <GiPokerHand color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Hand Reference</Text>
                                    </Flex>
                                    <Flex borderLeft='1px solid grey' p={1} px={2} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <GiPokerHand color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Hand Reference</Text>
                                    </Flex>
                                    <Flex borderLeft='1px solid grey' p={1} px={2} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <GiPokerHand color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Hand Reference</Text>
                                    </Flex>
                                    <Flex borderBottom='1px solid grey' borderLeft='1px solid grey' p={1} px={2} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <GiCubes color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Potential Flop</Text>
                                    </Flex>
                                </Flex>
                                <Flex width='33%' flexDirection='column'>
                                    <Text border='1px solid grey' color='#C7AE7A' ml={0} pl={2} fontSize='11pt' mb={4} fontWeight={700}>MISC</Text>
                                    <Divider />
                                    <Flex borderRight='1px solid grey' borderLeft='1px solid grey' p={1} px={2} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <FaRegStickyNote color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Notes</Text>
                                    </Flex>
                                    <Flex borderRight='1px solid grey' borderLeft='1px solid grey' p={1} px={2} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <FaRegStickyNote color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Notes</Text>
                                    </Flex>
                                    <Flex borderRight='1px solid grey' borderLeft='1px solid grey' p={1} px={2} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <FaRegStickyNote color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Notes</Text>
                                    </Flex>
                                    <Flex borderBottom='1px solid grey' borderRight='1px solid grey' borderLeft='1px solid grey' p={1} px={2} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}} flexDir='row' align='center'>
                                        <MdOutlineTimer color='#87B6D3' />
                                        <Text color='#87B6D3' fontFamily='AvenirNext-Demibold' ml={2}>Timer</Text>
                                    </Flex> 
                                </Flex>
                                  
                            </Flex>
                            <Text fontFamily='AvenirNext-DemiBold' ml={5} color='#7083B3'>Select a widget above to load</Text> 
                            {/* <Text mt={3} mb={3} ml={5} fontSize="8pt" fontFamily="AvenirNext-Regular" color="#454545">© 2023 Rollsolid Inc. All rights reserved</Text> */}
                        </MenuList>
                    </>
                        )}
                </Menu>
        </Flex>
    )
}
export default WidgetNavbar;