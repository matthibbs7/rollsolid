import Head from 'next/head';
import React from 'react';
import { Flex } from '@chakra-ui/react';
import { windowsState } from '@/atoms/windowsAtom';
import { useRecoilState } from 'recoil';
import { WindowState } from '@/types/windows';
import WidgetTaskbar from '@/components/Widget/WidgetTaskbar/WidgetTaskbar';
import { getWindowComponent } from '@/util/getWindowComponent';
import WindowWrapper from '@/components/Window/WindowWrapper';
import { getWindowTypeProps } from '@/util/get-window-type-props';
import { processSchedulerState } from '@/atoms/processSchedulerAtom';

export default function Home() {
    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);
    const [processState, setProcessState] = useRecoilState(processSchedulerState);

    const clearQue = () => {
        setMinimizedWindows((prevState) => ({
            ...prevState,
            que: [],
            empty: true,
        }));
    };

    const addToMinimizedQue = (w: WindowState) => {
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
            stack: [...prevState.stack, w],
        }));
    };

    return (
        <Flex
            direction="column"
            h="100%"
        >
            <Head>
                <title>Rollsolid</title>
                <meta
                    name="description"
                    content="Advanced Poker strategy and analysis"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <Flex
                pos="fixed"
                top="45px"
                right="0"
                bottom="0"
                left="0"
                direction="column"
                h='calc(100vh - 47px)'
            >
                <Flex
                    direction="column"
                    h="100%"
                >
                    <>
                        {minimizedWindows.stack.map((w) => {
                            if (!w.isMinimizied) {
                                const windowComponent = getWindowComponent(w.type);
                                const windowProps = getWindowTypeProps(w.type);
                                return (
                                    <WindowWrapper {...windowProps} x={w.x} y={w.y} type={w} key={w.processId} processId={w.processId.toString()}>
                                        {windowComponent}
                                    </WindowWrapper>
                                );
                            }
                        })}
                    </>
                </Flex> 
                <WidgetTaskbar />
            </Flex>
        </Flex>
    );
}
