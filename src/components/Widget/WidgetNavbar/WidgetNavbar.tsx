import React from 'react';
import { Button, Text, Flex, useColorMode, Menu, MenuButton, MenuItem, MenuList, useToast } from '@chakra-ui/react';
import { MdAddChart, MdLibraryBooks, MdOutlineGradient, MdOutlineWidgets, MdStackedLineChart } from 'react-icons/md';
import { WindowState } from '@/types/windows';
import { useRecoilState } from 'recoil';
import { windowsState } from '@/atoms/windowsAtom';
import { processSchedulerState } from '@/atoms/processSchedulerAtom';
import { GiCardPick } from 'react-icons/gi';
import { workspaceState } from '@/atoms/workspaceAtom';
import { TbCards } from 'react-icons/tb';
import { AiOutlineMergeCells } from 'react-icons/ai';

const WidgetNavbar:React.FC = () => {
    const { colorMode } = useColorMode();
    const cmb = colorMode === 'light' ? '#161616' : '#161616';

    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);
    const [processState, setProcessState] = useRecoilState(processSchedulerState);

    const toast = useToast();

    const addPreFlopAnalysisWidget = () => {
        const newPid = processState.previousId + 1;
        const preFlopAnalysisWindowState: WindowState = {
            processId: newPid,
            type: 'pre flop analysis',
            x: newPid % 2 == 0 ? 65 : 45,
            y: newPid % 2 == 0 ? 65 : 45,
            z: 0,
            width: '400px',
            height: '470px',
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212',
        };
        setProcessState((prevState: typeof processState) => ({
            ...prevState,
            previousId: newPid,
        }));

        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: [...workspaces.active.workspace_stack.stack, preFlopAnalysisWindowState]}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));

        toast({
            render: () => (
                <Flex align='center' w='240px' mt="62px" p={1.5} px={3} color='white' bg='#121212' border='1px solid #494D51' borderRadius="0px">
                    <TbCards fontSize='11pt' color='white' />
                    <Text ml={2} color='white' fontSize='12px' >Post Flop Analysis Widget loaded</Text>
                </Flex>
            ),
            duration: 1000,
            position: 'top',
            isClosable: true,
        });
    };

    const addBettingOddsWidget = () => {
        const newPid = processState.previousId + 1;
        const bettingOddsWindowState: WindowState = {
            processId: newPid,
            type: 'pot odds',
            x: newPid % 2 == 0 ? 65 : 45,
            y: newPid % 2 == 0 ? 65 : 45,
            z: 0,
            width: '355px',
            height: '350px',
            isMinimizied: false,
            settingsOpen: false,
            handleColor: '121212',
        };
        setProcessState((prevState: typeof processState) => ({
            ...prevState,
            previousId: newPid,
        }));

        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: [...workspaces.active.workspace_stack.stack, bettingOddsWindowState]}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));

        toast({
            render: () => (
                <Flex align='center' w='240px' mt="62px" p={1.5} px={3} color='white' bg='#121212' border='1px solid #494D51' borderRadius="0px">
                    <TbCards fontSize='11pt' color='white' />
                    <Text ml={2} color='white' fontSize='12px' >Betting Odds Widget loaded</Text>
                </Flex>
            ),
            duration: 1000,
            position: 'top',
            isClosable: true,
        });
    };

    const addImpliedOddsWidget = () => {
        const newPid = processState.previousId + 1;
        const impliedOddsWindowState: WindowState = {
            processId: newPid,
            type: 'implied odds',
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

        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: [...workspaces.active.workspace_stack.stack, impliedOddsWindowState]}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));

        toast({
            render: () => (
                <Flex align='center' w='220px' mt="62px" p={1.5} px={3} color='white' bg='#121212' border='1px solid #494D51' borderRadius="0px">
                    <AiOutlineMergeCells fontSize='11pt' color='white' />
                    <Text ml={2} color='white' fontSize='12px' >Implied Odds Widget loaded</Text>
                </Flex>
            ),
            duration: 1000,
            position: 'top',
            isClosable: true,
        });
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

        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: [...workspaces.active.workspace_stack.stack, notesWindowState]}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));

        toast({
            render: () => (
                <Flex align='center' w='170px' mt="62px" p={1.5} px={3} color='white' bg='#121212' border='1px solid #494D51' borderRadius="0px">
                    <MdLibraryBooks fontSize='11pt' color='white' />
                    <Text ml={2} color='white' fontSize='12px' >Notes Widget loaded</Text>
                </Flex>
            ),
            duration: 1000,
            position: 'top',
            isClosable: true,
        });
    };

    const addHandReferenceWidget = () => {
        const newPid = processState.previousId + 1;
        const notesWindowState: WindowState = {
            processId: newPid,
            type: 'reference',
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
        // setMinimizedWindows((prevState: typeof minimizedWindows) => ({
        //     ...prevState,
        //     stack: [...prevState.stack, notesWindowState],
        // }));

        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: [...workspaces.active.workspace_stack.stack, notesWindowState]}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));

        toast({
            render: () => (
                <Flex align='center' w='280px' mt="62px" p={1.5} px={3} color='white' bg='#121212' border='1px solid #494D51' borderRadius="0px">
                    <GiCardPick fontSize='11pt' color='white' />
                    <Text ml={2} color='white' fontSize='10.5pt' >Hand Reference Widget loaded</Text>
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
                        <MenuButton as={Button} w="-moz-fit-content" minW='93px' h="60%" px={3} bg={cmb} border="1px solid #161616" borderRadius="0" _hover={{bg: 'none', cursor: 'pointer', border: '1px solid #494D51'}} _active={{bg: 'none', border: '1px solid #494D51'}} isActive={isOpen}>
                            <Flex align='center' textAlign="center">
                                <Text fontSize='11px'><MdOutlineWidgets color='#A3A3A3' /></Text>
                                <Text pt={0.5} pl={2.5} color='#A3A3A3' fontSize='12px' fontWeight={400} borderRadius="0px">Widgets</Text>    
                            </Flex>
                        </MenuButton>
                        <MenuList w="580px" minW="0" h="224px" mt={1.5} ml="0px" p="1px" py={0} bg="#161616" border="1px solid #494D51" borderRadius="6px" motionProps={{
                            transition: { duration: 0 },
                            animate: 'visible'}}>
                            <Flex>
                                <Flex direction='column' w='50%' h='100%' ml={2} py={0}>
                                    <MenuItem w='100%' h='48px' mt={3} px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}} onClick={() => addPreFlopAnalysisWidget()}>
                                        <TbCards color='#a3a3a3' fontSize='28px' />
                                        <Flex direction='column' ml={3}>
                                            <Text color='#d1d1d1' fontSize='12px'>Pre-Flop Analysis</Text>
                                            <Text color='#a3a3a3' fontSize='11px'>Estimate hand-strength pre-flop</Text>
                                        </Flex>
                                    </MenuItem>
                                    <MenuItem w='100%' h='48px' px={3}  color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}} onClick={() => addBettingOddsWidget()}>
                                        <MdStackedLineChart fontSize='28px' color='#A3A3A3' />
                                        <Flex direction='column' ml={3}>
                                            <Text color='#d1d1d1' fontSize='12px'>Betting Odds</Text>
                                            <Text color='#a3a3a3' fontSize='11px'>Calculator for estimating pot odds</Text>
                                        </Flex>
                                    </MenuItem>
                                    <MenuItem w='100%' h='48px'  px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}}>
                                        <AiOutlineMergeCells fontSize='28px' color='#A3A3A3' />
                                        <Flex direction='column' ml={3}>
                                            <Text color='#d1d1d1' fontSize='12px'>Implied Odds</Text>
                                            <Text color='#a3a3a3' fontSize='11px'>Estimate GTO per hand</Text>
                                        </Flex>
                                    </MenuItem>
                                    <Flex align='center' w='100%' h='48px' px={3} color='#A3A3A3' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}}>
                                        <MdAddChart fontSize='28px' color='#A3A3A3' />
                                        <Flex direction='column' ml={3}>
                                            <Text color='#d1d1d1' fontSize='12px'>Ranges</Text>
                                            <Text color='#a3a3a3' fontSize='11px'>100+ scenario specific range charts</Text>
                                        </Flex>
                                    </Flex>
                                    
                                </Flex>
                                <Flex direction='column' w='50%' h='100%' mr={2} py={0}>
                                    <MenuItem w='100%' h='48px' mt={3}  px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}}>
                                        <MdOutlineGradient fontSize='28px' color='#A3A3A3' />
                                        <Flex direction='column' ml={3}>
                                            <Text color='#d1d1d1' fontSize='12px'>Ranking Calculator</Text>
                                            <Text color='#a3a3a3' fontSize='11px'>Score hands against 1000s of simulations</Text>
                                        </Flex>
                                    </MenuItem>
                                    <MenuItem w='100%' h='48px'  px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}} onClick={() => addNotesWidget()}>
                                        <MdLibraryBooks color='#a3a3a3' fontSize='28px' />
                                        <Flex direction='column' ml={3}>
                                            <Text color='#d1d1d1' fontSize='12px'>Notes</Text>
                                            <Text color='#a3a3a3' fontSize='11px'>Document your opponents behavior</Text>
                                        </Flex>
                                    </MenuItem>
                                    
                                    <MenuItem w='100%' h='48px'  px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}} onClick={() => addHandReferenceWidget()}>
                                        <GiCardPick fontSize='28px' color='#A3A3A3' />
                                        <Flex direction='column' ml={3}>
                                            <Text color='#d1d1d1' fontSize='12px'>Hand Reference</Text>
                                            <Text color='#a3a3a3' fontSize='11px'>Evaluate Poker Hands ranked</Text>
                                        </Flex>
                                    </MenuItem>
                                    
                                    <Flex align='center' w='100%' h='48px' px={3} color='#A3A3A3' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}}>
                                        <MdStackedLineChart fontSize='28px' color='#A3A3A3' />
                                        <Flex direction='column' ml={3}>
                                            <Text color='#d1d1d1' fontSize='12px'>Betting Odds</Text>
                                            <Text color='#a3a3a3' fontSize='11px'>Calculator for estimating pot odds</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                            {/* <Flex direction='row' ml={2} px={2} py={4}>
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
                                  
                            </Flex> */}
                            {/* <Text mt={-1} ml={4} color='#7083B3' fontSize='14px' fontWeight={500}>Select a widget above to load it on your dashboard.</Text>  */}
                        </MenuList>
                    </>
                )}
            </Menu>
        </Flex>
    );
};
export default WidgetNavbar;