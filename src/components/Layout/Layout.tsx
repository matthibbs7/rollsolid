import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Box, Flex } from '@chakra-ui/react'
type Props = {
    children?: React.ReactNode
};

const Layout:React.FC<Props> = ({ children }) => {
    
    return (
        <Flex height="100%" flexDir="column">  
            {/* <Banner /> */}
            <Box zIndex="50">
                <Navbar />
            </Box>
            <Box height="100%" zIndex="1" overflow="hidden">
                <main>{children}</main>
            </Box>
            
        </Flex>
    )
}
export default Layout;