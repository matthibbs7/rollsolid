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
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { RxCross1 } from "react-icons/rx";
import { FiMinimize2 } from "react-icons/fi";
import { useWindowSize } from "rooks";

interface State {
  width: number | string;
  height: number | string;
  x: number;
  y: number;
  maxZIndex: number;
}

interface Props extends RndProps {
  componentKey: string;
}

type RndManagerRef = {
  maxZIndex: string;
  node: null | HTMLElement;
};

const TestWindow2:React.FC<Props> = (props) => {
    const root = "ResizableElement";
    const [frontWindow, setFrontWindow] = useRecoilState(frontWindowState);
    const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

    // const [windowState, setWindowState] = useRecoilState(frontWindowState) ;
    const [windowState, setWindowState] = useState<State>({
        width: "400px",
        height: "400px",
        x: 0,
        y: 0,
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
        console.log(frontWindow, "TEST", windowState.maxZIndex)

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

    return (
        <Rnd
            key={props.componentKey}
            className={`${props.className}`}
            size={{ height: windowState.height, width: windowState.width }}
            position={{ x: windowState.x, y: windowState.y }}
            onDragStart={onDragStart}
            onDragStop={onDragStop}
            onResize={onResize}
            onResizeStop={onResizeStop}
            enableUserSelectHack
            bounds="parent"
            style={{zIndex: windowState.maxZIndex, border: '1px solid #494D51', background: 'black'}}
            {...defaultStyle}
        >
            <Flex flexDir="column" width="100%" height="100%">
                {/* <Flex className="handle" width="100%" minHeight="44px" height="10%" border="1px solid red">
                    
                </Flex> */}
                <Flex 
                    className="handle"
                    bg="#353535" 
                    h="28px" 
                    w="100%" 
                    p={1}
                    px={3}
                    align="center"
                    borderBottom="1px solid black"
                >   
                    <Flex width="90%" _hover={{cursor: 'all-scroll'}}>   
                        <Text fontSize="11pt" fontFamily="AvenirNext-DemiBold">Probabilty Hand</Text>
                    </Flex>  
                    <Flex align="center" mr={-2}>
                        <Button borderRadius='0' _hover={{bg: '#282828'}} width="10px" height="22px" padding="0" fontSize="11pt" bg="#353535">
                            <FiMinimize2 color="white" />
                        </Button>
                        <Button onClick={() => {}} borderRadius='0' _hover={{bg: '#282828'}} width="10px" height="22px" padding="0" fontSize="11pt" bg="#353535">
                            <RxCross1 color="#fa7970" />
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
