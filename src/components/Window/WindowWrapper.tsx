import * as React from 'react';
import {
    DraggableData,
    Rnd,
    RndDragCallback,
    RndResizeCallback,
    Props as RndProps
} from 'react-rnd';
import { DraggableEvent } from 'react-draggable';
import { useRecoilState } from 'recoil';
import { frontWindowState } from '@/atoms/frontWindowAtom';
import { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { RxCross1 } from 'react-icons/rx';
import { IoCube, IoReorderThree } from 'react-icons/io5';
import { FiMinimize2 } from 'react-icons/fi';
import { useWindowSize } from 'rooks';
import { windowsState } from '@/atoms/windowsAtom';
import { WindowState } from '@/types/windows';
import { WindowSettings } from './WindowSettings/WindowSettings';

interface State {
  width: number | string;
  height: number | string;
  x: number;
  y: number;
  maxZIndex: number;
}

interface Props extends RndProps {
  processId: string;
  type: WindowState;
  moduleSize?: {width: string, height: string, minWidth: string, minHeight: string};
  title?: string;
  x?: number;
  y?: number;
}

const WindowWrapper:React.FC<Props> = (props) => {
    const [frontWindow, setFrontWindow] = useRecoilState(frontWindowState);
    const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);

    const [windowSettings, setWindowSettings] = useState(false);
    const [windowColor, setWindowColor] = useState('242424');
    const [windowTitle, setWindowTitle] = useState<string>('');

    // default 400 x 400 size
    const [windowState, setWindowState] = useState<State>({
        width: props.type.width ? props.type.width : '400px',
        height: props.type.height ? props.type.height : '400px',
        x: props.x ? props.x : 0,
        y: props.y ? props.y : 0,
        maxZIndex: 0
    });
    
    // default 200 x 200 minimum size
    const defaultStyle = {
        className: '',
        minWidth: props.moduleSize ? props.moduleSize.minWidth : '200px',
        minHeight: props.moduleSize ? props.moduleSize.minHeight : '200px',
        maxWidth: innerWidth,
        maxHeight: innerHeight,
    } as Props;

    useEffect(() => {
        windowState.maxZIndex = frontWindow.maxZ + 1;
        setFrontWindow(prev => ({
            ...prev,
            maxZ: prev.maxZ + 1,
        }));
    }, []);

    const onDragStart: RndDragCallback = (
        event: DraggableEvent,
        data: DraggableData
    ) => {

        if (windowState.maxZIndex === frontWindow.maxZ) {
            return;
        }

        setWindowState(
            {
                ...windowState,
                maxZIndex: frontWindow.maxZ + 1
            },
        );
        
        setFrontWindow(prev => ({
            ...prev,
            maxZ: prev.maxZ + 1,
        }));
        return;
    };

    const onDragStop: RndDragCallback = (
        event: DraggableEvent,
        data: DraggableData
    ) => {
        setWindowState({
            ...windowState,
            x: data.x,
            y: data.y
        });
    };

    const onResize: RndResizeCallback = (event, direction, ref, delta, position) => {
        setWindowState({
            ...windowState,
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            ...position
        });
    };

    const onResizeStop: RndResizeCallback = (
        event,
        direction,
        ref,
        delta,
        position
    ) => {
        setWindowState({
            ...windowState,
            width: ref.style.width,
            height: ref.style.height,
            ...position
        });
    };

    // save x y position
    const toggleMinimized = (pId: number) => {

        const newMinimizedStack = minimizedWindows.stack.map((w: WindowState) => {
            if (w.processId === pId) {
                return {
                    ...w,
                    isMinimizied: !w.isMinimizied,
                    x: windowState.x,
                    y: windowState.y,
                    width: windowState.width,
                    height: windowState.height,
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

    const closeWindow = (pId: number) => {
        const newMinimizedStack = minimizedWindows.stack.filter((w: WindowState) =>
            w.processId !== pId
        );

        setMinimizedWindows((prevState) => ({
            ...prevState,
            stack: newMinimizedStack,
        }));
    };

    return (
        <Rnd
            key={props.processId}
            className={`${props.className}`}
            size={{ height: windowState.height, width: windowState.width }}
            dragHandleClassName="handle"
            position={{ x: windowState.x, y: windowState.y }}
            onDragStart={onDragStart}
            onDragStop={onDragStop}
            onResize={onResize}
            onResizeStop={onResizeStop}
            enableUserSelectHack
            bounds="parent"
            style={{zIndex: windowState.maxZIndex, border: '1px solid #2f2f2f', background: '#171717'}}
            {...defaultStyle}
            onClick={onDragStart}
        >
            <Flex direction="column" w="100%" h="100%">
                <Flex 
                    className="handle"
                    align="center"
                    w="100%" 
                    h="30px" 
                    p={1}
                    px={3}
                    bg={windowState.maxZIndex === frontWindow.maxZ ? '#121212' : '#121212'}
                    borderBottom='1px solid #2f2f2f'
                >   
                    <Flex w="100%" _hover={{cursor: 'all-scroll'}}>   
                        <Text fontSize="11pt" fontWeight={700}>{windowTitle ? windowTitle : props.title}</Text>
                    </Flex>  
                    <Flex align="center" h="100%" mr={-2} color='#C2C2C2'>
                        {/* {windowState.maxZIndex === frontWindow.maxZ && (
                            <Button w="10px" h="100%" p="0" color="white" fontSize="12pt" bg='none' borderRadius='0' _hover={{bg: '#383838', cursor: 'pointer', color: 'white'}} onClick={onOpen}>
                                <IoReorderThree  />
                            </Button>
                        )} */}
                        <Flex align='center' w="25px" h="100%" p="5px" fontSize="11pt" bg='none' borderRadius='0' _hover={{bg: '#383838', cursor: 'pointer'}} onClick={() => setWindowSettings(!windowSettings)}>
                            {windowSettings ? <IoCube /> : <IoReorderThree  />}
                        </Flex>
                        <Flex align='center' w="25px" h="100%" p="5px" fontSize="11pt" bg='none' borderRadius='0' _hover={{bg: '#383838', cursor: 'pointer'}} onClick={() => toggleMinimized(props.type.processId)}>
                            <FiMinimize2  />
                        </Flex>
                        <Flex align='center' w="25px" h="100%" p="5px" fontSize="11pt" bg='none' borderRadius='0' _hover={{bg: 'red.400', cursor: 'pointer'}} onClick={() => closeWindow(props.type.processId)}>
                            <RxCross1 />
                        </Flex>
                        {/* <Button w="10px" h="100%" p="0" fontSize="11pt" bg='none' borderRadius='0' _hover={{bg: '#383838', cursor: 'pointer'}} onClick={() => toggleMinimized(props.type.processId)}>
                            <FiMinimize2 color="white" />
                        </Button>
                        <Button w="10px" h="100%" p="0" fontSize="11pt" bg='none' borderRadius='0' _hover={{bg: 'red.400', cursor: 'pointer'}} onClick={() => closeWindow(props.type.processId)}>
                            <RxCross1 color="white" />
                        </Button> */}
                    </Flex>
                </Flex>
                <Flex direction='column' w="100%" h="100%" px={3} py={1.5} fontFamily="AvenirNext-Regular" _hover={{cursor: 'default'}}>
                    {windowSettings ? (
                        <WindowSettings windowTitle={windowTitle} windowDefaultTitle={props.title ? props.title : 'Undefined'} setWindowTitle={setWindowTitle} windowColor={windowColor} setWindowColor={setWindowColor} />
                    ) : (
                        props.children
                    )}
                </Flex>
            </Flex>
        </Rnd>
    );
};
export default WindowWrapper;

