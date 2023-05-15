import React from 'react';
import Head from 'next/head';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import Footer from '@/components/Footer/Footer';
import { ToolNavbar } from '@/components/Navbar/ToolNavbar/ToolNavbar';
import { GiRollingBomb } from 'react-icons/gi';

export default function Pricing() {
    return (
        <>
            <Head>
                <title>Rollsolid | Pricing</title>
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
                    h="1720px"
                >
                    <Flex align="center" mt='100px' mr={5}>
                        <Box mr={3} ml={3}>
                            <GiRollingBomb color="white" fontSize="30px" />
                        </Box>
                        {/* <Image src="/images/logowhite.png" height="64px" minWidth="64px" /> */}
                        <Link href='/' style={{ textDecoration: 'none' }}>
                            <Text color="white" fontSize="32px" fontWeight="600">Rollsolid</Text>
                        </Link>
                        
                    </Flex>
                    <Text w='670px' mt={5} fontFamily='TWKEverett-Regular' fontSize='96px' fontWeight={600} lineHeight='95px' textAlign='center'>Become a Poker Legend.</Text>
                    <Flex w='44%' h='400px' mt='100px'>
                        <Flex direction='column' w='50%' h='400px' mr={5} bg='green.300'>

                        </Flex>
                        <Flex direction='column' w='50%' h='400px' ml={5} bg='red.300'>

                        </Flex>
                    </Flex>
                </Flex>
                <Footer />
            </Flex>
        </>
    );
}
