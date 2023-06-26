import Head from 'next/head';
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import WidgetTaskbar from '@/components/Widget/WidgetTaskbar/WidgetTaskbar';
import { WorkspaceNavbar } from '@/components/Workspace/WorkspaceNavbar/WorkspaceNavbar';
import { workspaceState } from '@/atoms/workspaceAtom';
import { getWindowComponent } from '@/util/getWindowComponent';
import { getWindowTypeProps } from '@/util/get-window-type-props';
import WindowWrapper from '@/components/Window/WindowWrapper';

export default function Home() {
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);

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
                    <WorkspaceNavbar />
                    <>
                        {workspaces.active.workspace_stack.stack.length === 0 && (
                            <Flex mt={10} ml={10}>
                                <Text fontWeight={600}>Empty (add a widget above)</Text>
                            </Flex>   
                        )}
                        {workspaces.active.workspace_stack.stack.map((w) => {
                            if (!w.isMinimizied) {
                                const windowComponent = getWindowComponent(w.type, w.processId);
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
