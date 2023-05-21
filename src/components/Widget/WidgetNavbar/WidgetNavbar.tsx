import React from 'react';
import { Button, Text, Flex, useColorMode, Menu, MenuButton, MenuItem, MenuList, Divider, useToast } from '@chakra-ui/react';
import { MdOutlineTimer, MdOutlineWidgets } from 'react-icons/md';
import { FaRegStickyNote } from 'react-icons/fa';
import { WindowState } from '@/types/windows';
import { useRecoilState } from 'recoil';
import { windowsState } from '@/atoms/windowsAtom';
import { processSchedulerState } from '@/atoms/processSchedulerAtom';
import { BsInfoLg } from 'react-icons/bs';

const WidgetNavbar:React.FC = () => {
    // const [authenticated, setAuthenticated]
    const { colorMode } = useColorMode();
    const cmb = colorMode === 'light' ? '#161616' : 'white';

    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);
    const [processState, setProcessState] = useRecoilState(processSchedulerState);

    const toast = useToast();

    const addTimerWidget = () => {
        // const timerWindow = getWindowComponent('timer');
        const newPid = processState.previousId + 1;
        const timerWindowState: WindowState = {
            processId: newPid,
            type: 'timer',
            x: newPid % 2 == 0 ? 65 : 45,
            y: newPid % 2 == 0 ? 65 : 45,
            z: 0,
            width: '400px',
            height: '400px',
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212',
        };
        // update processMatrix increase previousId
        setProcessState((prevState: typeof processState) => ({
            ...prevState,
            previousId: newPid,
        }));
        setMinimizedWindows((prevState: typeof minimizedWindows) => ({
            ...prevState,
            stack: [...prevState.stack, timerWindowState],
        }));
    };

    const addNotesWidget = () => {
        const newPid = processState.previousId + 1;
        const notesWindowState: WindowState = {
            processId: newPid,
            type: 'notes',
            x: newPid % 2 == 0 ? 65 : 45,
            y: newPid % 2 == 0 ? 65 : 45,
            z: 0,
            width: '400px',
            height: '400px',
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212',
        };
        setProcessState((prevState: typeof processState) => ({
            ...prevState,
            previousId: newPid,
        }));
        setMinimizedWindows((prevState: typeof minimizedWindows) => ({
            ...prevState,
            stack: [...prevState.stack, notesWindowState],
        }));
        toast({
            render: () => (
                <Flex align='center' w='220px' mt="62px" p={1.5} px={3} color='white' bg='#121212' border='1px solid #494D51' borderRadius="0px">
                    <BsInfoLg fontSize='12.5pt' color='white' />
                    <Text ml={2} color='white' >Notes Widget loaded</Text>
                </Flex>
            ),
            duration: 1000,
            position: 'top',
            isClosable: true,
        });
    };

    return (
        <Flex align="center" h="100%" ml={0}>  
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton as={Button} w="-moz-fit-content" h="60%" px={3} bg={cmb} border="1px solid #161616" borderRadius="0" _hover={{bg: 'none', cursor: 'pointer', border: '1px solid #494D51'}} _active={{bg: 'none', border: '1px solid #494D51'}} isActive={isOpen}>
                            <Flex align='center' textAlign="center">
                                <Text fontSize='11px'><MdOutlineWidgets color='#A3A3A3' /></Text>
                                <Text pt={0.5} pl={2.5} color='#A3A3A3' fontSize='12px' fontWeight={400} borderRadius="0px">Widgets</Text>    
                            </Flex>
                        </MenuButton>
                        <MenuList w="600px" minW="0" h="236px" mt={1.5} p="1px" py={0} bg="#161616" border="1px solid #494D51" borderRadius="0" motionProps={{
                            transition: { duration: 0 },
                            animate: 'visible'}}>
                            <Flex direction='row' ml={2} px={2} py={4}>
                                <Flex direction='column' w='33%'>
                                    <Text mb={4} ml={0} pl={2} py={0.5} color='#C7AE7A' fontFamily='Inter' fontSize='13px' fontWeight={500} fontStyle='italic' border='1px solid grey'>Probability</Text>
                                    <Divider />
                                    
                                    <Flex align='center' direction='row' px={2} py={1} borderLeft='1px solid grey' borderRadius={0} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem>
                                    </Flex>
                                    
                                    <Flex align='center' direction='row' px={2} py={1} borderLeft='1px solid grey' borderRadius={0} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem>
                                    </Flex>
                                    <Flex align='center' direction='row' px={2} py={1} borderLeft='1px solid grey' borderRadius={0} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem>
                                    </Flex>
                                    <Flex align='center' direction='row' p={1} px={2} borderBottom='1px solid grey' borderLeft='1px solid grey' borderRadius={0} _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem>
                                    </Flex>
                                    
                                </Flex>
                                <Flex direction='column' w='33%'>
                                    <Text mb={4} ml={0} pl={2} py={0.5}  color='#C7AE7A' fontFamily='Inter' fontSize='13px' fontWeight={500} fontStyle='italic' border='1px solid grey'>Performance</Text>
                                    <Divider />
                                    <Flex align='center' direction='row' p={1} px={2} borderLeft='1px solid grey' _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem> 
                                    </Flex>
                                    <Flex align='center' direction='row' p={1} px={2} borderLeft='1px solid grey' _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem>
                                    </Flex>
                                    <Flex align='center' direction='row' p={1} px={2} borderLeft='1px solid grey' _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem>
                                    </Flex>
                                    <Flex align='center' direction='row' p={1} px={2} borderBottom='1px solid grey' borderLeft='1px solid grey' _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem>
                                    </Flex>
                                </Flex>
                                <Flex direction='column' w='33%'>
                                    <Text mb={4} ml={0} pl={2}  py={0.5} color='#C7AE7A' fontFamily='Inter' fontSize='13px' fontWeight={500} fontStyle='italic' border='1px solid grey'>Misc</Text>
                                    <Divider />
                                    <Flex align='center' direction='row' p={1} px={2} borderRight='1px solid grey' borderLeft='1px solid grey' _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addTimerWidget()}>
                                            <MdOutlineTimer fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Timer</Text>
                                        </MenuItem>
                                    </Flex>
                                    <Flex align='center' direction='row' p={1} px={2} borderRight='1px solid grey' borderLeft='1px solid grey' _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem>
                                    </Flex>
                                    <Flex align='center' direction='row' p={1} px={2} borderRight='1px solid grey' borderLeft='1px solid grey' _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem>
                                    </Flex>
                                    <Flex align='center' direction='row' p={1} px={2} borderRight='1px solid grey' borderBottom='1px solid grey' borderLeft='1px solid grey' _hover={{bg: '#1c1c1c', cursor: 'pointer', color: '#8784D8'}}>
                                        <MenuItem h='100%' p={0} bg='none' onClick={() => addNotesWidget()}>
                                            <FaRegStickyNote fontSize='14px' color='#87B6D3' />
                                            <Text ml={2} color='#87B6D3' fontSize='14px' fontWeight={600} >Notes</Text>
                                        </MenuItem>
                                    </Flex> 
                                </Flex>
                                  
                            </Flex>
                            <Text mt={-1} ml={4} color='#7083B3' fontSize='14px' fontWeight={500}>Select a widget above to load it on your dashboard.</Text> 
                        </MenuList>
                    </>
                )}
            </Menu>
        </Flex>
    );
};
export default WidgetNavbar;