import { Button, Divider, Flex, Input, Text } from '@chakra-ui/react';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer:React.FC = () => {
    const [timeSelected, setTimeSelected] = useState();
    return (
        <Flex w='100%' h='100%'>
            <Flex flexDir="column" width="100%" height="100%">
                <Text fontSize="1vb" fontFamily="AvenirNext-Regular">Enter countdown duration:</Text>
                <Divider />
                <Flex mt={3}>
                    <Input height="35px" w="50%" border="1px solid #353535" borderRadius="0" />
                    
                </Flex>
                <Button _focus={{border: '1px solid #1c1c1c'}} _active={{border: '1px solid #1c1c1c'}} _hover={{border: '1px solid #1c1c1c'}} border="1px solid black" mt={2} w="50%" height="35px" borderRadius="0" bg="black" pl="5px" justifyContent="left">Begin</Button>
                
            </Flex>
        </Flex>
    )
}
export default Timer;