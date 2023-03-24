import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Flex } from '@chakra-ui/react'
type Props = {
    children?: React.ReactNode
};

const Layout:React.FC<Props> = ({ children }) => {
    
    return (
        <>  
            {/* <Banner /> */}
            <Navbar />
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}
export default Layout;