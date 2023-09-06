import Head from 'next/head';
import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { workspaceState } from '@/atoms/workspaceAtom';
import { auth } from '@/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GuardSpinner } from 'react-spinners-kit';
import Footer from '@/components/Footer/Footer';
import { ToolNavbar } from '@/components/Navbar/ToolNavbar/ToolNavbar';
import { useRouter } from 'next/router';
import { DashboardComponent } from '@/Dashboard/Dashboard';

export default function Home() {
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

    if (loading) {
        return (
            <Flex p={8}>
                <GuardSpinner size='32' frontColor='#A99AFB' />
                
            </Flex>
        );
    } else if (error) {
        return (
            <Text>Error occurred</Text>
        );
    } else if (!user) {
        return (
            <Flex direction="column" w="100%"
                mt="-45px">
                <ToolNavbar />
                <Flex
                    align="center"
                    direction="column"
                    h="100%"
                >
                    <Flex justify='center' wrap='wrap' direction='row' w='100%' mb={8}>
                        <Flex justify='space-around' display='flex' mt='80px' mr={8} mb={-8}>
                            <Image w='100%' maxW={[null, '680px']} h='auto' maxH='480px' pl={2} src='https://i.imgur.com/cy2cu4e.png' />
                        </Flex>
                        <Flex direction='column' display='flex' maxW='510px' h='500px' mt='120px' mb={8} ml={8} pr={4}>
                            <Text fontFamily='TWKEverett-Regular' fontSize='38px' fontWeight={500}>Advanced Poker Analysis</Text>
                            <Text color='#999999' fontFamily='TWKEverett-Regular' fontSize='34px' fontWeight={500}>Supercharge your gameplay</Text>
                            <Text mt={3} mb={3.5} color='#969696' fontSize='17px'>Rollsolid is a Data-based customizable dashboard for applications of advanced Texas Holdem Poker theory</Text>
                            <Text mt={3} mb={3.5} color='#969696' fontSize='16.5px'>Inside, you will find widgets for Hand/flop scenario estimations using Monte Carlo simulations, Odds Ratio calculators, Ranges, Timeseries analysis and many more.</Text>
                            <Text mt={1} color='#B693F4' fontSize='18px' _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => router.push('/login')}>Create an account today →</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Footer />
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
                
                direction="column"
                
            >
                <DashboardComponent />
                {/* <Flex
                    direction="column"
                    h="100%"
                > */}
                {/* <WorkspaceNavbar />
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
                <WidgetTaskbar /> */}
                {/* <Footer /> */}
            </Flex>
        </Flex>
    );
}
