import React from 'react';
import Head from 'next/head';
import { Flex, Image, Text } from '@chakra-ui/react';
import Footer from '@/components/Footer/Footer';
import { ToolNavbar } from '@/components/Navbar/ToolNavbar/ToolNavbar';

export default function About() {
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
                    <Flex justify='center' wrap='wrap' direction='row' w='100%'>
                        <Flex justify='space-around' display='flex' mt='80px' mr={8}>
                            <Image maxW='680px' h='460px' src='https://i.imgur.com/cy2cu4e.png' />
                        </Flex>
                        <Flex direction='column' display='flex' maxW='510px' h='500px' mt='120px' ml={8} pr={4}>
                            <Text fontFamily='TWKEverett-Regular' fontSize='38px' fontWeight={500}>Advanced Poker Analysis</Text>
                            <Text color='#999999' fontFamily='TWKEverett-Regular' fontSize='34px' fontWeight={500}>Supercharge your gameplay</Text>
                            <Text mt={3} mb={3.5} color='#969696' fontSize='17px'>Rollsolid is a Data-based customizable dashboard for applications of advanced Texas Holdem Poker theory</Text>
                            <Text mt={3} mb={3.5} color='#969696' fontSize='16.5px'>Inside, you will find widgets for Hand/flop scenario estimations using Monte Carlo simulations, Odds Ratio calculators, Ranges, Timeseries analysis and many more.</Text>
                            <Text mt={1} color='#B693F4' fontSize='18px' _hover={{cursor: 'pointer', textDecoration: 'underline'}}>Explore the features →</Text>
                        </Flex>
                    </Flex>
                    {/* <Text
                        maxW="555px"
                        mt={5}
                        fontFamily="AvenirNext-DemiBold"
                        fontSize="22pt"
                        textAlign="center"
                    >
Explore your Poker games and simulate your strategy through the power of data!
                    </Text>
                    <Flex mt={5}>
                        <Flex
                            align="center"
                            direction="column"
                            w="240px"
                            h="280px"
                            p={5}
                            bg="black"
                            border="1.5px solid #353535"
                        >
                            <Text
                                fontFamily="AvenirNext-DemiBold"
                                fontSize="20pt"
                            >
Basic
                            </Text>
                            <Text>$4.99/month</Text>
                            <Text
                                mt={3}
                                fontFamily="AvenirNext-Italic"
                            >
• Math Functions
                            </Text>
                            <Text fontFamily="AvenirNext-Italic">• All Charting</Text>
                            <Text fontFamily="AvenirNext-Italic">• EQ Calculator</Text>
                            <Text fontFamily="AvenirNext-Italic">• Probability Grid</Text>
                            <Button
                                mt={5}
                                color="black"
                                bg="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
                                borderRadius="0"
                                _hover={{color: 'white'}}
                            >
Subscribe Now
                            </Button>
                        </Flex>
                        <Flex
                            align="center"
                            direction="column"
                            w="240px"
                            h="280px"
                            ml={10}
                            p={5}
                            bg="black"
                            border="1.5px solid #353535"
                        >
                            <Text
                                fontFamily="AvenirNext-DemiBold"
                                fontSize="20pt"
                            >
Advanced
                            </Text>
                            <Text>$9.99/month</Text>
                            <Text
                                mt={3}
                                fontFamily="AvenirNext-Italic"
                            >
                              • All Functions
                            </Text>
                            <Text fontFamily="AvenirNext-Italic">• All Charting</Text>
                            <Text fontFamily="AvenirNext-Italic">• EQ Calculator</Text>
                            <Text fontFamily="AvenirNext-Italic">• Probability Grid</Text>
                            <Button
                                mt={5}
                                color="black"
                                bg="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
                                borderRadius="0"
                                _hover={{color: 'white'}}
                            >
Subscribe Now
                            </Button>
                        </Flex>
                    </Flex> */}
                </Flex>
                <Footer />
            </Flex>
        </>
    );
}
