import PlayCard from '@/components/PlayCard/PlayCard';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const HandReference = () => {
    return (
        <Flex direction='column' overflow='scroll' w='100%' h='100%' minH='80px' mt={1} mb={10} p={2} px={3} bg='#121212' border='1px solid #343434'>
            <Flex direction="column" overflowY='scroll' w="100%" h="100%" style={{containerType: 'inline-size'}}>
                <Text fontSize='5cqw' fontWeight={500}>Poker Hands Ranked</Text>
                <Flex>
                    <PlayCard suit='spade' value='A' fontSize='20cqw' />
                    <PlayCard suit='spade' value='K' fontSize='20cqw' />
                    <PlayCard suit='spade' value='Q' fontSize='20cqw' />
                    <PlayCard suit='spade' value='J' fontSize='20cqw' />
                    <PlayCard suit='spade' value='10' fontSize='20cqw' />
                </Flex>
                <Flex mt={-5}>
                    <PlayCard suit='heart' value='9' fontSize='20cqw' />
                    <PlayCard suit='heart' value='8' fontSize='20cqw' />
                    <PlayCard suit='heart' value='7' fontSize='20cqw' />
                    <PlayCard suit='heart' value='6' fontSize='20cqw' />
                    <PlayCard suit='heart' value='5' fontSize='20cqw' />
                </Flex>
                <Flex mt={-5}>
                    <PlayCard suit='heart' value='2' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='2' fontSize='20cqw' />
                    <PlayCard suit='spade' value='2' fontSize='20cqw' />
                    <PlayCard suit='club' value='2' fontSize='20cqw' />
                    <PlayCard suit='heart' value='5' fontSize='20cqw' />
                </Flex>
                <Flex mt={-5}>
                    <PlayCard suit='heart' value='4' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='4' fontSize='20cqw' />
                    <PlayCard suit='spade' value='4' fontSize='20cqw' />
                    <PlayCard suit='club' value='Q' fontSize='20cqw' />
                    <PlayCard suit='heart' value='Q' fontSize='20cqw' />
                </Flex>
                <Flex mt={-5}>
                    <PlayCard suit='club' value='4' fontSize='20cqw' />
                    <PlayCard suit='club' value='6' fontSize='20cqw' />
                    <PlayCard suit='club' value='2' fontSize='20cqw' />
                    <PlayCard suit='club' value='Q' fontSize='20cqw' />
                    <PlayCard suit='club' value='A' fontSize='20cqw' />
                </Flex>
                <Flex mt={-5}>
                    <PlayCard suit='club' value='4' fontSize='20cqw' />
                    <PlayCard suit='club' value='5' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='6' fontSize='20cqw' />
                    <PlayCard suit='heart' value='7' fontSize='20cqw' />
                    <PlayCard suit='spade' value='8' fontSize='20cqw' />
                </Flex>
                <Flex mt={-5}>
                    <PlayCard suit='club' value='A' fontSize='20cqw' />
                    <PlayCard suit='club' value='5' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='5' fontSize='20cqw' />
                    <PlayCard suit='heart' value='5' fontSize='20cqw' />
                    <PlayCard suit='spade' value='J' fontSize='20cqw' />
                </Flex>
                <Flex mt={-5}>
                    <PlayCard suit='club' value='K' fontSize='20cqw' />
                    <PlayCard suit='club' value='6' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='J' fontSize='20cqw' />
                    <PlayCard suit='heart' value='J' fontSize='20cqw' />
                    <PlayCard suit='spade' value='K' fontSize='20cqw' />
                </Flex>
                <Flex mt={-5}>
                    <PlayCard suit='club' value='9' fontSize='20cqw' />
                    <PlayCard suit='club' value='8' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='3' fontSize='20cqw' />
                    <PlayCard suit='heart' value='2' fontSize='20cqw' />
                    <PlayCard suit='spade' value='8' fontSize='20cqw' />
                </Flex>
                <Flex mt={-5}>
                    <PlayCard suit='club' value='A' fontSize='20cqw' />
                    <PlayCard suit='club' value='8' fontSize='20cqw' />
                    <PlayCard suit='diamond' value='3' fontSize='20cqw' />
                    <PlayCard suit='heart' value='2' fontSize='20cqw' />
                    <PlayCard suit='spade' value='5' fontSize='20cqw' />
                </Flex>
                
            </Flex>
        </Flex>
    );
};
export default HandReference;