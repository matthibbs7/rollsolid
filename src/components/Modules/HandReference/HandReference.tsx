import PlayCard from '@/components/PlayCard/PlayCard';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const HandReference = () => {
    return (
        <Flex direction='column' overflow='scroll' w='100%' h='100%' minH='80px' mt={1} mb={10} p={2} px={3} bg='#121212' border='1px solid #343434'>
            <Flex direction="column" overflowY='scroll' w="100%" h="100%" style={{containerType: 'inline-size'}}>
                <Text fontSize='4cqw' fontWeight={600}>Royal Flush</Text>
                <Flex mt={-4}>
                    <PlayCard suit='spade' value='A' fontSize='20cqw' />
                    <PlayCard suit='spade' value='K' fontSize='20cqw' />
                    <PlayCard suit='spade' value='Q' fontSize='20cqw' />
                    <PlayCard suit='spade' value='J' fontSize='20cqw' />
                    <PlayCard suit='spade' value='10' fontSize='20cqw' />
                </Flex>
                <Text mt={-3} mb={3} color='#A3A3A3' fontSize='4cqw'>Five face cards in sequence, all of the same suit</Text>
                <Text fontSize='4cqw' fontWeight={600}>Straight Flush</Text>
                <Flex mt={-4}>
                    <PlayCard suit='heart' value='9' fontSize='20cqw' />
                    <PlayCard suit='heart' value='8' fontSize='20cqw' />
                    <PlayCard suit='heart' value='7' fontSize='20cqw' />
                    <PlayCard suit='heart' value='6' fontSize='20cqw' />
                    <PlayCard suit='heart' value='5' fontSize='20cqw' />
                </Flex>
                <Text mt={-3} mb={3} color='#A3A3A3' fontSize='4cqw'>Five cards in sequence, all of the same suit</Text>
                <Text fontSize='4cqw' fontWeight={600}>Four of a kind</Text>
                <Flex mt={-4}>
                    <PlayCard suit='heart' value='2' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='2' fontSize='20cqw' />
                    <PlayCard suit='spade' value='2' fontSize='20cqw' />
                    <PlayCard suit='club' value='2' fontSize='20cqw' />
                    <PlayCard suit='heart' value='5' fontSize='20cqw' />
                </Flex>
                <Text mt={-3} mb={3} color='#A3A3A3' fontSize='4cqw'>All four cards of one rank and an unmatched card</Text>
                <Text fontSize='4cqw' fontWeight={600}>Full House</Text>
                <Flex mt={-4}>
                    <PlayCard suit='heart' value='4' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='4' fontSize='20cqw' />
                    <PlayCard suit='spade' value='4' fontSize='20cqw' />
                    <PlayCard suit='club' value='Q' fontSize='20cqw' />
                    <PlayCard suit='heart' value='Q' fontSize='20cqw' />
                </Flex>
                <Text mt={-3} mb={3} color='#A3A3A3' fontSize='4cqw'>Three matching cards of one rank and two of another</Text>
                <Text fontSize='4cqw' fontWeight={600}>Flush</Text>
                <Flex mt={-4}>
                    <PlayCard suit='club' value='4' fontSize='20cqw' />
                    <PlayCard suit='club' value='6' fontSize='20cqw' />
                    <PlayCard suit='club' value='2' fontSize='20cqw' />
                    <PlayCard suit='club' value='Q' fontSize='20cqw' />
                    <PlayCard suit='club' value='A' fontSize='20cqw' />
                </Flex>
                <Text mt={-3} mb={3} color='#A3A3A3' fontSize='4cqw'>Five cards of the same suit, but not in sequence</Text>
                <Text fontSize='4cqw' fontWeight={600}>Straight</Text>
                <Flex mt={-4}>
                    <PlayCard suit='club' value='4' fontSize='20cqw' />
                    <PlayCard suit='club' value='5' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='6' fontSize='20cqw' />
                    <PlayCard suit='heart' value='7' fontSize='20cqw' />
                    <PlayCard suit='spade' value='8' fontSize='20cqw' />
                </Flex>
                <Text mt={-3} mb={3} color='#A3A3A3' fontSize='4cqw'>Five cards of sequential rank in at least two suits</Text>
                <Text fontSize='4cqw' fontWeight={600}>Three of a kind</Text>
                <Flex mt={-4}>
                    <PlayCard suit='club' value='A' fontSize='20cqw' />
                    <PlayCard suit='club' value='5' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='5' fontSize='20cqw' />
                    <PlayCard suit='heart' value='5' fontSize='20cqw' />
                    <PlayCard suit='spade' value='J' fontSize='20cqw' />
                </Flex>
                <Text mt={-3} mb={3} color='#A3A3A3' fontSize='4cqw'>Three cards of the same rank with two unrelated cards</Text>
                <Text fontSize='4cqw' fontWeight={600}>Two Pair</Text>
                <Flex mt={-4}>
                    <PlayCard suit='club' value='K' fontSize='20cqw' />
                    <PlayCard suit='club' value='6' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='J' fontSize='20cqw' />
                    <PlayCard suit='heart' value='J' fontSize='20cqw' />
                    <PlayCard suit='spade' value='K' fontSize='20cqw' />
                </Flex>
                <Text mt={-3} mb={3} color='#A3A3A3' fontSize='4cqw'>Two pairs of two cards of the same rank</Text>
                <Text fontSize='4cqw' fontWeight={600}>Pair</Text>
                <Flex mt={-4}>
                    <PlayCard suit='club' value='9' fontSize='20cqw' />
                    <PlayCard suit='club' value='8' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='3' fontSize='20cqw' />
                    <PlayCard suit='heart' value='2' fontSize='20cqw' />
                    <PlayCard suit='spade' value='8' fontSize='20cqw' />
                </Flex>
                <Text mt={-3} mb={3} color='#A3A3A3' fontSize='4cqw'>Two cards of the same rank</Text>
                <Text fontSize='4cqw' fontWeight={600}>High Card</Text>
                <Flex mt={-4}>
                    <PlayCard suit='club' value='A' fontSize='20cqw' />
                    <PlayCard suit='club' value='8' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='3' fontSize='20cqw' />
                    <PlayCard suit='heart' value='2' fontSize='20cqw' />
                    <PlayCard suit='spade' value='5' fontSize='20cqw' />
                </Flex>
                <Text mt={-3} color='#A3A3A3' fontSize='4cqw'>Made of any 5 cards not matching above criteria</Text>
                
            </Flex>
        </Flex>
    );
};
export default HandReference;