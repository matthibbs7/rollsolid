import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { windowsState } from '@/atoms/windowsAtom';
import { WindowState } from '@/types/windows';
import { RxCross1 } from 'react-icons/rx';

const WidgetTaskbar:React.FC = () => {
    
    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);
    
    const removeFromStack = (w: WindowState) => {
        if (minimizedWindows.stack.includes(w)) {
            const index = minimizedWindows.stack.indexOf(w);
            setMinimizedWindows((prevState) => ({
                ...prevState,
                stack: [...prevState.stack.slice(0, index), ...prevState.stack.slice(index + 1)],
            }));
        }
    };

    const toggleMinimized = (pId: number) => {

        const newMinimizedStack = minimizedWindows.stack.map((w: WindowState) => {
            if (w.processId === pId) {
                return {
                    ...w,
                    isMinimizied: !w.isMinimizied,
                };
            } else {
                return w;
            }
        });

        setMinimizedWindows((prevState) => ({
            ...prevState,
            stack: newMinimizedStack,
        }));
    };

    return (
        <Flex pos='absolute' zIndex="1111111" top="calc(100vh - 84px)" direction='row' w="100%" h="34px" ml={1} my={0.5}>
            {minimizedWindows.stack.map((w) => {
                if (w.isMinimizied) {
                    return (
                        <Flex key={w.processId} align='center' m={0.5} pr={1} pl={2} bg='#434343' borderRadius={3} _hover={{bg: '#636363', cursor: 'pointer'}} onClick={() => toggleMinimized(w.processId)}>
                            <Text fontWeight={600}>{w.type}</Text>
                            <Text ml={2} fontSize="9pt" _hover={{color: 'red'}}><RxCross1 color="white" /></Text>
                        </Flex>
                    ); 
                } 
            })

            }
        </Flex>
    );
};
export default WidgetTaskbar;