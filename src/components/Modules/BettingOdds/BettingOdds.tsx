import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

interface BettingOddsComponentProps {
    processId: number;
}

const BettingOdds = ({ processId }: BettingOddsComponentProps) => {
    return (
        <Flex direction='column' overflow='scroll' h='100%' minH='80px' mt={1} mb={2} p={2} px={3} bg='#121212' border='1px solid #343434'>
            <Flex direction="column" w="100%" h="100%">
                <Text>Enter countdown duration:</Text>
                <Flex mt={3}>
                    <Input w="50%" h="35px" border="1px solid #353535" borderRadius="0" />
                    
                </Flex>
                <Button w='84px' h='26px' mt={5} mb={1} bg='black' border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} type='submit'>Start</Button>
                
            </Flex>
        </Flex>
    );
};
export default BettingOdds;