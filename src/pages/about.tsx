import React from 'react';
import Head from 'next/head';
import { Flex, Image, Text } from '@chakra-ui/react';
import Footer from '@/components/Footer/Footer';
import { ToolNavbar } from '@/components/Navbar/ToolNavbar/ToolNavbar';
import { useRouter } from 'next/router';

export default function About() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Rollsolid | About</title>
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
                direction="column"
                w="100%"
            >
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
        </>
    );
}
