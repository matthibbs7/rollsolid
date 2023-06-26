import { Button, Divider, Flex, HStack, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { GiCoins, GiTwoCoins } from 'react-icons/gi';

interface BettingOddsComponentProps {
    processId: number;
}

const BettingOdds = ({ processId }: BettingOddsComponentProps) => {
    return (
        <Flex direction='column' overflow='scroll' h='100%' minH='80px' mt={1} mb={2} p={2} px={3} bg='#121212' border='1px solid #343434'>
            <Flex direction="column" w="100%" h="100%" px={3.5}>
                <HStack align='center'>
                    <GiCoins color='#acacac' />
                    <Text pt={1} fontSize='14.5px' fontWeight={600}>Pot Size</Text>
                </HStack>
                <Text color='#a3a3a3' fontSize='12.5px'>Numerical state of current pot</Text>
                <Input w="100%" minW='100px' maxW='270px' h="28px" mt={0.5} fontSize='9.5pt' border="1px solid #353535" borderRadius="0" _focus={{boxShadow: 'none', border: '1px solid gray'}} _placeholder={{color: '#4B4B4B'}} name='sims' placeholder="Ex: 1500" required />
                <HStack align='center' mt={4}>
                    <GiTwoCoins color='#acacac' />
                    <Text mt={4} fontSize='14.5px' fontWeight={600}>Bet Size</Text>
                </HStack>
                <Text color='#a3a3a3' fontSize='12.5px'>Calculate pot odds for a given bet</Text>
                <Input w="100%" minW='100px' maxW='270px' h="28px" mt={0.5} fontSize='9.5pt' border="1px solid #353535" borderRadius="0" _focus={{boxShadow: 'none', border: '1px solid gray'}} _placeholder={{color: '#4B4B4B'}} name='sims' placeholder="Ex: 300" required />
                <Button w='94px' h='24px' minH='25px' maxH='25px' mt={6} mb={3} fontSize='10pt' bg='#121212'  border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} type='submit'>Calculate</Button>
                <Divider mt={3} borderColor='#434343' />
            </Flex>
        </Flex>
    );
};
export default BettingOdds;