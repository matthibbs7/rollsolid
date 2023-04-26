import { Button, Divider, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

const Timer:React.FC = () => {
    return (
        <Flex w='100%' h='100%'>
            <Flex direction="column" w="100%" h="100%">
                <Text fontFamily="AvenirNext-Regular" fontSize="1vb">Enter countdown duration:</Text>
                <Divider />
                <Flex mt={3}>
                    <Input w="50%" h="35px" border="1px solid #353535" borderRadius="0" />
                    
                </Flex>
                <Button justifyContent="left" w="50%" h="35px" mt={2} pl="5px" bg="black" border="1px solid black" borderRadius="0" _hover={{border: '1px solid #1c1c1c'}} _active={{border: '1px solid #1c1c1c'}} _focus={{border: '1px solid #1c1c1c'}}>Begin</Button>
                
            </Flex>
        </Flex>
    );
};
export default Timer;