import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Box, Flex } from '@chakra-ui/react';

type Props = {
    children?: React.ReactNode
};

const Layout:React.FC<Props> = ({ children }) => {
    
    return (
        <Flex direction="column" h="100%">  
            {/* <Banner /> */}
            <Box zIndex="50">
                <Navbar />
            </Box>
            <Box zIndex="1" overflow="hidden" h="100%">
                <main>{children}</main>
            </Box>
            
        </Flex>
    );
};
export default Layout;