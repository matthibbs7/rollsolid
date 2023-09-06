import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Box, Flex } from '@chakra-ui/react';
import { workspaceState } from '@/atoms/workspaceAtom';
import { useRecoilState } from 'recoil';

type Props = {
    children?: React.ReactNode
};

const Layout:React.FC<Props> = ({ children }) => {
    const [unsaved, setUnsaved] = useState(false);
    const [workspaces, _] = useRecoilState(workspaceState);

    useEffect(() => {
        setUnsaved(true);
    }, [workspaces]);

    return (
        <Flex direction="column" h="100%">  
            {/* <Banner /> */}
            <Box zIndex="50">
                <Navbar unsaved={unsaved} setUnsaved={setUnsaved} />
            </Box>
            <Box zIndex="1" overflow="hidden" h="100%">
                <main>{children}</main>
            </Box>
            
        </Flex>
    );
};
export default Layout;