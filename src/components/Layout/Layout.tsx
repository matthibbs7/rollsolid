import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Box, Flex } from '@chakra-ui/react'
type Props = {
    children?: React.ReactNode
};

const Layout:React.FC<Props> = ({ children }) => {
    
    return (
        <>  
            {/* <Banner /> */}
            <Box zIndex="50">
                <Navbar />
            </Box>
            <Box zIndex="1">
                <main>{children}</main>
            </Box>
            
            {/* <Footer /> */}
        </>
    )
}
export default Layout;