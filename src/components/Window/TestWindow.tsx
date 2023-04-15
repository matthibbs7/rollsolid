import * as React from "react";
import {
  DraggableData,
  Rnd,
  RndDragCallback,
  RndResizeCallback,
  Props as RndProps
} from "react-rnd";
import { DraggableEvent } from "react-draggable";
import { useRecoilState } from "recoil";
import { frontWindowState } from "@/atoms/frontWindowAtom";
import { useEffect, useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { RxCross1 } from "react-icons/rx";
import { FiMinimize2 } from "react-icons/fi";
import { useWindowSize } from "rooks";
import { minimizedWindowsState } from "@/atoms/minimizedWindowsAtom";
import { WindowState } from "@/types/windows";

interface State {
  width: number | string;
  height: number | string;
  x: number;
  y: number;
  maxZIndex: number;
}

interface Props extends RndProps {
  componentKey: string;
  type: WindowState;
  moduleSize?: {width: string, height: string};
  title?: string;
  x?: number;
  y?: number;
}

type RndManagerRef = {
  maxZIndex: string;
  node: null | HTMLElement;
};

const TestWindow2:React.FC<Props> = (props) => {
    const root = "ResizableElement";
    const [frontWindow, setFrontWindow] = useRecoilState(frontWindowState);
    const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
    const [minimizedWindows, setMinimizedWindows] = useRecoilState(minimizedWindowsState);
    
    const [windowState, setWindowState] = useState<State>({
        width: props.moduleSize ? props.moduleSize.width : "400px",
        height: props.moduleSize ? props.moduleSize.height : "400px",
        x: props.x ? props.x : 0,
        y: props.y ? props.y : 0,
        maxZIndex: 0
    })
    
    const defaultStyle = {
        className: "",
        minWidth: "200px",
        minHeight: "200px",
        maxWidth: innerWidth,
        maxHeight: innerHeight,
    } as Props;

    useEffect(() => {
        windowState.maxZIndex = frontWindow.maxZ + 1
        setFrontWindow(prev => ({
            ...prev,
            maxZ: prev.maxZ + 1,
        }))
    }, [])

    useEffect(() => {}, [windowState.maxZIndex])

    const setZindex = (current: number, next: number) => {
        if (next === current) {
            return current
        }
        if (next > current) {
            setFrontWindow(prev => ({
                ...prev,
                maxZ: prev.maxZ + 1,
            }))
            return next
        } 
        return current;
    };

    const onDragStart: RndDragCallback = (
        event: DraggableEvent,
        data: DraggableData
      ) => {
        

        if (windowState.maxZIndex === frontWindow.maxZ) {
            return
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
        }))
        return
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

    const addToQue = (type: WindowState) => {
        // if (minimizedWindows.stack.includes(w)) {
        //   toast({
        //     position: 'top-right',
        //     render: () => (
        //       <Box borderRadius="12px" color="black" fontWeight={800} p={3} bg="white">
        //         Tool already on your dashboard!
        //       </Box>
        //     ),
        //   });
        //   return;
        // }
    
        setMinimizedWindows((prevState) => ({
          ...prevState,
          stack: [...prevState.stack, type],
        }));
      };

    return (
        <Rnd
            key={props.componentKey}
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
            style={{zIndex: windowState.maxZIndex, border: '1px solid #494D51', background: '#1c1c1c'}}
            {...defaultStyle}
            onClick={onDragStart}
        >
            <Flex flexDir="column" width="100%" height="100%">
                {/* <Flex className="handle" width="100%" minHeight="44px" height="10%" border="1px solid red">
                    
                </Flex> */}
                <Flex 
                    className="handle"
                    bg={windowState.maxZIndex === frontWindow.maxZ ? '#121212' : '#2b2b2b'}
                    h="30px" 
                    w="100%" 
                    p={1}
                    px={3}
                    align="center"
                    
                >   
                    <Flex width="90%" _hover={{cursor: 'all-scroll'}}>   
                        <Text fontSize="11pt" fontFamily="AvenirNext-DemiBold">{props.title}</Text>
                    </Flex>  
                    <Flex align="center" mr={-2} height="100%">
                        <Button onClick={() => addToQue(props.type)} borderRadius='0' _hover={{bg: '#383838', cursor: 'default'}} width="10px" height="100%" padding="0" fontSize="11pt" bg='none'>
                            <FiMinimize2 color="white" />
                        </Button>
                        <Button height="100%" onClick={() => {}} borderRadius='0' _hover={{bg: 'red.400', cursor: 'default'}} width="10px" padding="0" fontSize="11pt" bg='none'>
                            <RxCross1 color="white" />
                        </Button>
                    </Flex>
                </Flex>
                <Flex fontFamily="AvenirNext-Regular" height="100%" width="100%" _hover={{cursor: 'default'}} px={3} py={1.5}>
                {props.children}
                </Flex>
            </Flex>
        </Rnd>
    )
}
export default TestWindow2;

