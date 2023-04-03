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
        minHeight: "200px"
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
            style={{zIndex: windowState.maxZIndex}}
            {...props}
        >
            {props.children}
        </Rnd>
    )
}
export default TestWindow2;

