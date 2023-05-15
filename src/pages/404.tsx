import Footer from '@/components/Footer/Footer';
import { ToolNavbar } from '@/components/Navbar/ToolNavbar/ToolNavbar';
import { Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';
import router from 'next/router';
import React from 'react';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Rollsolid | 404</title>
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
                    <Text w='700px' mt="140px" ml='100px' fontFamily='TWKEverett-Regular' fontSize='96px' fontWeight={600} lineHeight='96px'>404 Page Not Found</Text>
                    <Text mt={7} ml='20px' color='#B693F4' fontSize='20px' _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => router.push('/')}>Go back home →</Text>
                </Flex>
                <Footer />
            </Flex>
        </>
    );
}