import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Box, Flex, Text } from '@chakra-ui/react'
import Draggable from 'react-draggable';
type Props = {
    children?: React.ReactNode
};

const Window:React.FC<Props> = ({ children }) => {
    
    return (
        <Draggable
            handle=".handle"
        >
            <Flex 
                direction="column" 
                height="500px" 
                width="700px" 
                bg="#252A31"
                border="1px solid #494D51"
                borderRadius="3px"
            >
                <Flex
                    borderTopRadius="5px" 
                    className="handle"
                    bg="#1c2127" 
                    h="28px" 
                    w="100%" 
                    _hover={{cursor: 'all-scroll'}}
                    p={1}
                    px={3}
                    align="center"
                >        
                    <Text fontSize="11pt">Probabilty Hand</Text>
                </Flex>
                <Box px={3} py={7} w="100%" h="100%"> 
                    <main>{children}</main>
                </Box> 
            </Flex>
        </Draggable>
    )
}
export default Window;