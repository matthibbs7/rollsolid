import React, { useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Draggable from 'react-draggable';
import { RxCross1 } from 'react-icons/rx';
import { FiMinimize2 } from 'react-icons/fi';

type Props = {
    children?: React.ReactNode
    render: boolean;
    setRender: (a: boolean) => void;
    id?: number;
};

const WindowDark:React.FC<Props> = ({ children, render, setRender, id }) => {

    useEffect(() => {
    }, [render])

    return (
        <>
            {render && <Draggable
                handle=".handle"
            >
                <Flex
                    zIndex="10"
                    direction="column" 
                    height="500px" 
                    width="700px" 
                    bg="#121212"
                    border="1px solid black"
                >
                    <Flex 
                        className="handle"
                        bg="#282828" 
                        h="28px" 
                        w="100%" 
                        p={1}
                        px={3}
                        align="center"
                        borderBottom="1px solid black"
                    >   
                        <Flex width="90%" _hover={{cursor: 'all-scroll'}}>   
                            <Text fontSize="11pt">Probabilty Hand</Text>
                        </Flex>  
                        <Flex align="center" mr={-2}>
                            <Button borderRadius='0' _hover={{bg: '#282828'}} width="10px" height="22px" padding="0" fontSize="11pt" bg="#353535">
                                <FiMinimize2 color="white" />
                            </Button>
                            <Button onClick={() => setRender(false)} borderRadius='0' _hover={{bg: '#282828'}} width="10px" height="22px" padding="0" fontSize="11pt" bg="#353535">
                                <RxCross1 color="#fa7970" />
                            </Button>
                        </Flex>
                    </Flex>
                    <Box px={3} py={5} w="100%" h="100%"> 
                        <main>{children}</main>
                    </Box> 
                </Flex>
            </Draggable> }
        </>
    )
}
export default WindowDark;