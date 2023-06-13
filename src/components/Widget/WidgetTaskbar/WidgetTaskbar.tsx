import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { windowsState } from '@/atoms/windowsAtom';
import { WindowState } from '@/types/windows';
import { RxCross1 } from 'react-icons/rx';
import { workspaceState } from '@/atoms/workspaceAtom';

const WidgetTaskbar:React.FC = () => {
    
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);
    
    const removeFromStack = (w: WindowState) => {
        // if (minimizedWindows.stack.includes(w)) {
        //     const index = minimizedWindows.stack.indexOf(w);
        //     setMinimizedWindows((prevState) => ({
        //         ...prevState,
        //         stack: [...prevState.stack.slice(0, index), ...prevState.stack.slice(index + 1)],
        //     }));
        // }
        // if (minimizedWindows.stack.includes(w)) {
        //     const index = minimizedWindows.stack.indexOf(w);
        //     setMinimizedWindows((prevState) => ({
        //         ...prevState,
        //         stack: [...prevState.stack.slice(0, index), ...prevState.stack.slice(index + 1)],
        //     }));
        // }
    };

    const toggleMinimized = (pId: number) => {

        // const newMinimizedStack = minimizedWindows.stack.map((w: WindowState) => {
        //     if (w.processId === pId) {
        //         return {
        //             ...w,
        //             isMinimizied: !w.isMinimizied,
        //         };
        //     } else {
        //         return w;
        //     }
        // });

        // setMinimizedWindows((prevState) => ({
        //     ...prevState,
        //     stack: newMinimizedStack,
        // }));

        const newActiveStack = workspaces.active.workspace_stack.stack.map((w: WindowState) => {
            if (w.processId === pId) {
                return {
                    ...w,
                    isMinimizied: !w.isMinimizied,
                };
            } else {
                return w;
            }
        });

        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: newActiveStack}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));
    };

    return (
        <Flex pos='absolute' zIndex="1111111" top="calc(100vh - 80px)" direction='row' w="100%" h="30px" ml={1} my={0.5}>
            {/* {minimizedWindows.stack.map((w) => {
                if (w.isMinimizied) {
                    return (
                        <Flex key={w.processId} align='center' m={0.5} pr={1} pl={2} bg={`#${w.handleColor}`} border='1px solid #434343' borderRadius={3} _hover={{bg: '#222222', cursor: 'pointer'}} onClick={() => toggleMinimized(w.processId)}>
                            <Text fontSize='12.5px' fontWeight={600}>{w.widgetName ? w.widgetName.toLowerCase() : w.type.toLowerCase()}</Text>
                            <Text ml={2} fontSize="8pt" _hover={{color: 'red'}}><RxCross1 color="white" /></Text>
                        </Flex>
                    ); 
                } 
            })} */}
            {workspaces.active.workspace_stack.stack.map((w) => {
                if (w.isMinimizied) {
                    return (
                        <Flex key={w.processId} align='center' m={0.5} pr={1} pl={2} bg={`#${w.handleColor}`} border='1px solid #434343' borderRadius={3} _hover={{bg: '#222222', cursor: 'pointer'}} onClick={() => toggleMinimized(w.processId)}>
                            <Text fontSize='12.5px' fontWeight={600}>{w.widgetName ? w.widgetName.toLowerCase() : w.type.toLowerCase()}</Text>
                            <Text ml={2} fontSize="8pt" _hover={{color: 'red'}}><RxCross1 color="white" /></Text>
                        </Flex>
                    ); 
                } 
            })

            }

        </Flex>
    );
};
export default WidgetTaskbar;