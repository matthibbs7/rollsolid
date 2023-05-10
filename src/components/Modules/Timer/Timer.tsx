import { Button, Divider, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

const Timer:React.FC = () => {
    return (
        <Flex direction='column' overflow='scroll' minH='80px' mt={1} mb={10} p={2} px={3} bg='#121212' border='1px solid #343434'>
            <Flex direction="column" w="100%" h="100%">
                <Text fontFamily="AvenirNext-Regular" fontSize="1vb">Enter countdown duration:</Text>
                <Divider />
                <Flex mt={3}>
                    <Input w="50%" h="35px" border="1px solid #353535" borderRadius="0" />
                    
                </Flex>
                <Button w='84px' h='26px' mt={5} mb={1} bg='black' border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} type='submit'>Start</Button>
                
            </Flex>
        </Flex>
    );
};
export default Timer;