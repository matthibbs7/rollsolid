import React from 'react';
import { Button, Text, Flex, Menu, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react';
import { MdOutlineWidgets, MdStackedLineChart, MdTimeline } from 'react-icons/md';
import { TbCards } from 'react-icons/tb';
import { AiOutlineMergeCells } from 'react-icons/ai';

const FeatureDropDown:React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex align="center" h="100%" ml={0}>  
            <Menu isOpen={isOpen}>
                <MenuButton as={Button} w="-moz-fit-content" h="60%" px={3} bg='#161616' border="1px solid #161616" borderRadius="0" shadow='none' _hover={{bg: 'none', cursor: 'pointer', border: '1px solid #494D51'}} _active={{bg: 'none', border: '1px solid #494D51'}} _focus={{boxShadow: 'none'}} isActive={isOpen} onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <Flex align='center' textAlign="center">
                        <Text fontSize='11px'><MdOutlineWidgets color='#A3A3A3' /></Text>
                        <Text pt={0.5} pl={2.5} color='#A3A3A3' fontSize='12px' fontWeight={400} borderRadius="0px">Features</Text>    
                    </Flex>
                </MenuButton>
                <MenuList w="280px" minW="0" h="236px" mt={1.5} p="1px" py={0} bg="#161616" border="1px solid #494D51" borderRadius="6px" motionProps={{
                    animate: 'active'}} onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <Flex direction='column' w='100%' h='100%' ml={2} px={2} py={0}>
                        
                        <Flex align='center' h='70px' mt={-1}>
                            <TbCards color='#a3a3a3' fontSize='28px' />
                            <Flex direction='column' ml={3}>
                                <Text color='#d1d1d1' fontSize='12px'>Post Flop Analysis</Text>
                                <Text color='#a3a3a3' fontSize='11px'>Utilize stochastic simulations for win %</Text>
                            </Flex>
                        </Flex>
                        <Flex align='center' h='70px' mt={-6}>
                            <MdStackedLineChart fontSize='28px' color='#A3A3A3' />
                            <Flex direction='column' ml={3}>
                                <Text color='#d1d1d1' fontSize='12px'>Betting Odds</Text>
                                <Text color='#a3a3a3' fontSize='11px'>Calculator for estimating pot odds</Text>
                            </Flex>
                        </Flex>
                        <Flex align='center' h='70px' mt={-6}>
                            <AiOutlineMergeCells fontSize='28px' color='#A3A3A3' />
                            <Flex direction='column' ml={3}>
                                <Text color='#d1d1d1' fontSize='12px'>Implied Odds</Text>
                                <Text color='#a3a3a3' fontSize='11px'>Derive implied probabilites</Text>
                            </Flex>
                        </Flex>
                        <Flex align='center' h='70px' mt={-6}>
                            <MdTimeline color='#a3a3a3' fontSize='28px' />
                            <Flex direction='column' ml={3}>
                                <Text color='#d1d1d1' fontSize='12px'>Charts</Text>
                                <Text color='#a3a3a3' fontSize='11px'>Timeseries and Pie charts</Text>
                            </Flex>
                        </Flex>
                        <Flex align='center' h='70px' mt={-6}>
                            <MdOutlineWidgets fontSize='28px' color='#A3A3A3' />
                            <Flex direction='column' ml={3}>
                                <Text color='#d1d1d1' fontSize='12px'>Widgets</Text>
                                <Text color='#a3a3a3' fontSize='11px'>Text Editors, References, and more</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </MenuList>
            </Menu>
        </Flex>
    );
};
export default FeatureDropDown;