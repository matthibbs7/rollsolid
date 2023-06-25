import React from 'react';
import Head from 'next/head';
import { Box, Button, Flex, Link, List, ListItem, Text } from '@chakra-ui/react';
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
                    <Flex align="center" mt='60px' mr={5}>
                        <Box mr={3} ml={3}>
                            <GiRollingBomb color="white" fontSize="30px" />
                        </Box>
                        {/* <Image src="/images/logowhite.png" height="64px" minWidth="64px" /> */}
                        <Link href='/' style={{ textDecoration: 'none' }}>
                            <Text color="white" fontSize="32px" fontWeight="600">Rollsolid</Text>
                        </Link>
                        
                    </Flex>
                    <Text w='695px' mt={5} fontFamily='TWKEverett-Regular' fontSize='96px' fontWeight={600} lineHeight='95px' textAlign='center'>Become a Poker Legend.</Text>
                    <Flex w='44%' h='400px' mt='80px'>
                        <Flex direction='column'  w='50%' h='580px' mr={5} bg='#212121' borderRadius='10px'>
                            <Flex w='100%' h='180px' bgImage="url('/images/bg2.png')" bgSize='cover' bgPosition='center' borderTopRadius='10px' >

                            </Flex>
                            <Flex direction='column' w='90%' h='400px' ml={5} bg='#212121' borderRadius='10px'>
                                <Flex direction='column' w='100%' h='100%' ml={-2} px={-6} py={4}>
                                    <Flex align='center' w='120px' h='20px'  p={2} bg='#644ED5' borderRadius={10}>
                                        <Text fontSize='14px' fontWeight={500}>Recommended</Text>
                                    </Flex>
                                    <Text mt={3} ml={0.5} fontSize='28px' fontWeight={600}>Rollsolid Basic</Text>
                                    <Text ml={1} color='#acacac' fontStyle='italic'>Free</Text>
                                    <Text mt={4} ml={1} color='#acacac' fontStyle='italic'>Features</Text>
                                    <Flex justify='center' w='100%' mt={2}>
                                        <List textAlign='center'>
                                            <ListItem>
                                                Customizable Dashboard
                                            </ListItem>
                                            <ListItem>
                                                3 Workspaces
                                            </ListItem>
                                            <ListItem>
                                                All standard widgets
                                            </ListItem>
                                            {/* <ListItem>
                                                Ranges
                                            </ListItem>
                                            <ListItem>
                                                Ranges
                                            </ListItem> */}
                                        </List>
                                    </Flex>
                                    <Button minH='40px' mt='82px' ml={2} bg='#121212' _hover={{bg: '#181818'}}>Register Now</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction='column'  w='50%' h='580px' ml={5} bg='#212121' borderRadius='10px'>
                            <Flex w='100%' h='180px' bgImage="url('/images/bg1.png')" bgSize='cover' bgPosition='center' borderTopRadius='10px' >

                            </Flex>
                            <Flex direction='column' w='90%' h='400px' ml={5} bg='#212121' borderRadius='10px'>
                                <Flex direction='column' w='100%' h='100%' ml={-2} px={-6} py={4}>
                                    <Flex align='center' w='145px' h='20px'  p={2} bg='#AA9BFD' borderRadius={10}>
                                        <Text color='black' fontSize='14px' fontWeight={500}>Advanced Content</Text>
                                    </Flex>
                                    <Text mt={3} ml={0.5} fontSize='28px' fontWeight={600}>Rollsolid Pro</Text>
                                    <Text ml={1} color='#acacac' fontStyle='italic'>$9.99/mo</Text>
                                    <Text mt={4} ml={1} color='#acacac' fontStyle='italic'>Features</Text>
                                    <Flex justify='center' w='100%' mt={2}>
                                        <List textAlign='center'>
                                            <ListItem>
                                                Advanced widgets
                                            </ListItem>
                                            <ListItem>
                                                Unlimited workspaces
                                            </ListItem>
                                            <ListItem>
                                                Additional widget settings
                                            </ListItem>
                                            <ListItem>
                                                24/7 support
                                            </ListItem>
                                            {/* <ListItem>
                                                Ranges
                                            </ListItem>
                                            <ListItem>
                                                Ranges
                                            </ListItem> */}
                                        </List>
                                    </Flex>
                                    <Button minH='40px' mt='48px' ml={2} bg='#121212' _hover={{bg: '#181818'}}>Register Now</Button>
                                </Flex>
                            </Flex>
                            
                        </Flex>
                    </Flex>
                </Flex>
                <Footer />
            </Flex>
        </>
    );
}
