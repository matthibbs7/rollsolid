import React from 'react';
import { Button, Text, Flex, Menu, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react';
import { MdAddChart, MdOutlineWidgets, MdStackedLineChart } from 'react-icons/md';

const FeatureDropDown:React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex align="center" h="100%" ml={0}>  
            <Menu isOpen={isOpen}>
                <MenuButton as={Button} w="-moz-fit-content" h="60%" px={3} bg='#161616' border="1px solid #161616" borderRadius="0" _hover={{bg: 'none', cursor: 'pointer', border: '1px solid #494D51'}} _active={{bg: 'none', border: '1px solid #494D51'}} isActive={isOpen} onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <Flex align='center' textAlign="center">
                        <Text fontSize='11px'><MdOutlineWidgets color='#A3A3A3' /></Text>
                        <Text pt={0.5} pl={2.5} color='#A3A3A3' fontSize='12px' fontWeight={400} borderRadius="0px">Features</Text>    
                    </Flex>
                </MenuButton>
                <MenuList w="280px" minW="0" h="236px" mt={1.5} p="1px" py={0} bg="#161616" border="1px solid #494D51" borderRadius="8px" motionProps={{
                    transition: { duration: 40000 },
                    animate: 'visible'}} onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <Flex direction='column' w='100%' h='100%' ml={2} px={2} py={0}>
                        <Flex align='center' h='70px' mt={-1}>
                            <MdOutlineWidgets fontSize='28px' color='#A3A3A3' />
                            <Flex direction='column' ml={3}>
                                <Text color='#d1d1d1' fontSize='12px'>EQ Calculator</Text>
                                <Text color='#a3a3a3' fontSize='11px'>Estimate GTO per hand</Text>
                            </Flex>
                        </Flex>
                        <Flex align='center' h='70px' mt={-6}>
                            <MdAddChart fontSize='28px' color='#A3A3A3' />
                            <Flex direction='column' ml={3}>
                                <Text color='#d1d1d1' fontSize='12px'>Ranges</Text>
                                <Text color='#a3a3a3' fontSize='11px'>100+ scenario specific range charts</Text>
                            </Flex>
                        </Flex>
                        <Flex align='center' h='70px' mt={-6}>
                            <MdStackedLineChart fontSize='28px' color='#A3A3A3' />
                            <Flex direction='column' ml={3}>
                                <Text color='#d1d1d1' fontSize='12px'>Betting Odds</Text>
                                <Text color='#a3a3a3' fontSize='11px'>Calculator for estimating pot odds</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </MenuList>
            </Menu>
        </Flex>
    );
};
export default FeatureDropDown;