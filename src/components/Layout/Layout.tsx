import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Box, Flex } from '@chakra-ui/react'
import Footer from '../Footer/Footer';
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
            
        </>
    )
}
export default Layout;