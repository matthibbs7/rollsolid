import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { WindowState } from '@/types/windows';
import { RxCross1 } from 'react-icons/rx';
import { workspaceState } from '@/atoms/workspaceAtom';

const WidgetTaskbar:React.FC = () => {
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    
    const removeFromStack = (pId: number) => {
        const newActiveStack = workspaces.active.workspace_stack.stack.filter((w: WindowState) =>
            w.processId !== pId
        );

        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: newActiveStack}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));
    };

    const toggleMinimized = (pId: number) => {

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
            {workspaces.active.workspace_stack.stack.map((w) => {
                if (w.isMinimizied) {
                    return (
                        <Flex key={w.processId} align='center' m={0.5} pr={1} bg={`#${w.handleColor}`} border='1px solid #434343' borderRadius={3} _hover={{bg: '#222222', cursor: 'pointer'}} >
                            <Flex align='center' h='100%' pr={2} pl={2} onClick={() => toggleMinimized(w.processId)}>
                                <Text fontSize='12.5px' fontWeight={600}>{w.widgetName ? w.widgetName.toLowerCase() : w.type.toLowerCase()}</Text>
                            </Flex>
                            <Text fontSize="8pt" _hover={{color: 'purple.300'}} onClick={() => removeFromStack(w.processId)}><RxCross1 /></Text>
                        </Flex>
                    ); 
                } 
            })

            }

        </Flex>
    );
};
export default WidgetTaskbar;