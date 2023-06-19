import React from 'react';
import { Button, Text, Flex, Menu, MenuButton, MenuItem, MenuList, useToast } from '@chakra-ui/react';
import { MdTimeline } from 'react-icons/md';
import { WindowState } from '@/types/windows';
import { useRecoilState } from 'recoil';
import { windowsState } from '@/atoms/windowsAtom';
import { processSchedulerState } from '@/atoms/processSchedulerAtom';
import { FaChartLine } from 'react-icons/fa';
import { FiPieChart } from 'react-icons/fi';
import { workspaceState } from '@/atoms/workspaceAtom';
const ChartsDropDown:React.FC = () => {
    const cmb = '#161616';
 
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);
    const [processState, setProcessState] = useRecoilState(processSchedulerState);

    const toast = useToast();

    const addTimeseriesWidget = () => {
        const newPid = processState.previousId + 1;
        const timeseriesWindowState: WindowState = {
            processId: newPid,
            type: 'timeseries',
            x: newPid % 2 == 0 ? 65 : 45,
            y: newPid % 2 == 0 ? 65 : 45,
            z: 0,
            width: '460px',
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
        //     stack: [...prevState.stack, timeseriesWindowState],
        // }));

        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: [...workspaces.active.workspace_stack.stack, timeseriesWindowState]}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));
        toast({
            render: () => (
                <Flex align='center' w='190px' mt="62px" p={1.5} px={3} color='white' bg='#121212' border='1px solid #494D51' borderRadius="0px">
                    <MdTimeline fontSize='12.5pt' color='white' />
                    <Text ml={2} color='white' fontSize='12px' >Timeseries Chart loaded</Text>
                </Flex>
            ),
            duration: 1000,
            position: 'top',
            isClosable: true,
        });
    };

    const addPieWidget = () => {
        const newPid = processState.previousId + 1;
        const pieWindowState: WindowState = {
            processId: newPid,
            type: 'pie',
            x: newPid % 2 == 0 ? 65 : 45,
            y: newPid % 2 == 0 ? 65 : 45,
            z: 0,
            width: '460px',
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
        //     stack: [...prevState.stack, pieWindowState],
        // }));
        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: [...workspaces.active.workspace_stack.stack, pieWindowState]}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));
        toast({
            render: () => (
                <Flex align='center' w='150px' mt="62px" p={1.5} px={3} color='white' bg='#121212' border='1px solid #494D51' borderRadius="0px">
                    <FiPieChart fontSize='12.5pt' color='white' />
                    <Text ml={2} color='white' fontSize='12px' >Pie Chart loaded</Text>
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
                                <Text fontSize='11px'><FaChartLine color='#A3A3A3' /></Text>
                                <Text pt={0.5} pl={2.5} color='#A3A3A3' fontSize='12px' fontWeight={400} borderRadius="0px">Charts</Text>    
                            </Flex>
                        </MenuButton>
                        <MenuList w="360px" minW="0" h="124px" mt={1.5} p="1px" py={0} bg="#161616" border="1px solid #494D51" borderRadius="6px" motionProps={{
                            transition: { duration: 0 },
                            animate: 'visible'}}>
                            <Flex direction='column' w='100%' h='100%' ml={2} py={0}>
                                <MenuItem w='68%' h='48px' mt={3} px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}} onClick={() => addTimeseriesWidget()}>
                                    <MdTimeline color='#a3a3a3' fontSize='28px' />
                                    <Flex direction='column' ml={3}>
                                        <Text color='#d1d1d1' fontSize='12px'>Timseries</Text>
                                        <Text color='#a3a3a3' fontSize='11px'>Analyze stack trends over time</Text>
                                    </Flex>
                                </MenuItem>
                                <MenuItem w='68%' h='48px' px={3} color='#A3A3A3' bg='none' borderRadius='6px' _hover={{cursor: 'pointer', bg: '#111111'}} onClick={() => addPieWidget()}>
                                    <FiPieChart color='#a3a3a3' fontSize='24px' />
                                    <Flex direction='column' ml={3}>
                                        <Text color='#d1d1d1' fontSize='12px'>Pie</Text>
                                        <Text color='#a3a3a3' fontSize='11px'>Visualize table stack distributions</Text>
                                    </Flex>
                                </MenuItem>
                            
                            </Flex>
                        </MenuList>
                    </>
                )}
            </Menu>
        </Flex>
    );
};
export default ChartsDropDown;