import React, { useMemo, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/firebase/clientApp';
import safeJsonStringify from 'safe-json-stringify';
import WidgetTaskbar from '@/components/Widget/WidgetTaskbar/WidgetTaskbar';
import { WorkspaceNavbar } from '@/components/Workspace/WorkspaceNavbar/WorkspaceNavbar';
import Head from 'next/head';
import { getWindowComponent } from '@/util/getWindowComponent';
import { getWindowTypeProps } from '@/util/get-window-type-props';
import WindowWrapper from '@/components/Window/WindowWrapper';
import { workspaceState } from '@/atoms/workspaceAtom';
import { useRecoilState } from 'recoil';
import { ToolNavbar } from '@/components/Navbar/ToolNavbar/ToolNavbar';
import Footer from '@/components/Footer/Footer';

interface DashboardPageProps {
    dashboardData: any | '';
}

const DashboardPage:React.FC<DashboardPageProps> = ({ dashboardData }) => {
    const router = useRouter();
    const [isFirstRender, setIsFirstRender] = useState(true);

    // used to view time in cal by responses
    const [hoverIndex, setHoverIndex] = useState(-1);

    const [clickState, setClickState] = useState(false);
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [initialWorkspace, setInitialWorkspace] = useState<any>('');

    // pull document data -> store in initialWorkspace -> store that value in recoil atom

    const getDashboardData = async () => {
        if (router.query.dashboardId as string && isFirstRender) {
            setIsFirstRender(false);
            const eventDocRef = doc(firestore, 'dashboard', router.query.dashboardId as string);
            const eventDoc = await getDoc(eventDocRef);
            if (eventDoc.exists()) {
                setInitialWorkspace(eventDoc.exists() ? JSON.parse(safeJsonStringify({...eventDoc.data()})).dashboardWorkspaces : '');
            } else {
                setInitialWorkspace('NOTFOUND');
            }
        }
    };

    if (workspaces === undefined) {
        return <></>;
    }
    getDashboardData();
    useMemo(()=>{
        
        if (initialWorkspace) {
            if (initialWorkspace === 'NOTFOUND') {
                return;
            }
            setWorkspaces(initialWorkspace);
            console.log(workspaces);
        }
    }, [initialWorkspace]);

    if (dashboardData === '') {
        return (
            <Flex direction='column'>
                <Flex justify='center' direction='row' w='100%' h='140px' px={[2, 4, 5, 5]} bg='#F4F7F9' borderBottom='1px dashed #dcdee0'>
                    <Flex
                        align='center'
                        direction='row'
                        w={['100%', '100%', '70%', '70%']}
                        minW='200px'
                        maxW='920px'
                        h='100%'
                        px={[0, 1, 2, 4]}
                        borderRight='1px dashed #dcdee0'
                        borderLeft='1px dashed #dcdee0'>
                        <Text mt='50px' mr={6} ml={2} color='#625BF8' fontSize='38px' fontWeight={600}>
                            Dashboard does not exist :(
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        );
    }

    if (initialWorkspace === 'NOTFOUND') {
        return (
            <Flex
                direction="column"
                h="100%"
            >
                <Head>
                    <title>Rollsolid</title>
                    <meta property="og:url" content="https://rollsolid.com/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Rollsolid - Advanced Poker strategy and analysis" />
                    <meta property="og:title" content="Rollsolid - Advanced Poker strategy and analysis" />
                    <meta property="og:description" content="Data-based tools for Texas Holdem Poker featuring Monte Carlo simulations of dynamic game states, odd ratio calculators, time series analysis, and more!" />
                    <meta property="og:image" content="https://i.imgur.com/cy2cu4e.png" />

                    <meta
                        name="description"
                        content="Advanced Poker Strategy and Analysis"
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
                    direction="column"
                    w="100%"
                >
                    <ToolNavbar />
                    <Flex
                        align="center"
                        direction="column"
                        h="720px"
                    >
                        <Text w='700px' mt="140px" ml='100px' fontFamily='TWKEverett-Regular' fontSize='96px' fontWeight={600} lineHeight='96px'>404 Page Not Found</Text>
                        <Text mt={7} ml='20px' color='#B693F4' fontSize='20px' _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => router.push('/')}>Go back to dashboard →</Text>
                    </Flex>
                    <Footer />
                </Flex>
            </Flex>
        );
    }
    
    return (
        <Flex
            direction="column"
            h="100%"
        >
            <Head>
                <title>Rollsolid</title>
                <meta property="og:url" content="https://rollsolid.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Rollsolid - Advanced Poker strategy and analysis" />
                <meta property="og:title" content="Rollsolid - Advanced Poker strategy and analysis" />
                <meta property="og:description" content="Data-based tools for Texas Holdem Poker featuring Monte Carlo simulations of dynamic game states, odd ratio calculators, time series analysis, and more!" />
                <meta property="og:image" content="https://i.imgur.com/cy2cu4e.png" />

                <meta
                    name="description"
                    content="Advanced Poker Strategy and Analysis"
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
                        {workspaces.active.workspace_stack.stack.map((w: any) => {
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
};

export default DashboardPage;

