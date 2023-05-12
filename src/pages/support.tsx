import React from 'react';
import Head from 'next/head';
import { Flex, Text } from '@chakra-ui/react';
import Footer from '@/components/Footer/Footer';
import { ToolNavbar } from '@/components/Navbar/ToolNavbar/ToolNavbar';

export default function Support() {
    return (
        <>
            <Head>
                <title>Rollsolid | Support</title>
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
                    h="720px"
                >
                    <Flex align='center' wrap='wrap' direction='column' w='100%' h='100%'>
                        <Text w='700px' mt="140px" ml='100px' fontFamily='TWKEverett-Regular' fontSize='96px' fontWeight={600} lineHeight='96px'>Contact our Support team.</Text>
                        <Text mt={7} ml="40px" color='#969696' fontSize='24px'>Have questions? Our Support team is here to help you!</Text>
                        <Text mt={7} ml='20px' color='#B693F4' fontSize='20px' _hover={{cursor: 'pointer', textDecoration: 'underline'}}>Send an Email →</Text>
                    </Flex>
                </Flex>
                <Footer />
            </Flex>
        </>
    );
}
