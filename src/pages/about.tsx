import React from 'react';
import Head from 'next/head';
import { Button, Flex, Text } from '@chakra-ui/react';
import Footer from '@/components/Footer/Footer';

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
                <Flex
                    align="center"
                    direction="column"
                    h="720px"
                >
                    <Text
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
                    </Flex>
                </Flex>
                <Footer />
            </Flex>
        </>
    );
}
