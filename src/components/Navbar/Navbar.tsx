/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { Box, Button, Flex, Text, Tooltip, useColorMode } from '@chakra-ui/react';
import { GiRollingBomb, GiAbstract089 } from 'react-icons/gi';
import { FaChartLine } from 'react-icons/fa';
import AuthButtons from '../Auth/AuthButtons';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { SiInformatica } from 'react-icons/si';
import WidgetNavbar from '../Widget/WidgetNavbar/WidgetNavbar';
import { IdenticonImg } from './IdenticonImage.tsx/IdenticonImage';
import { TbBook2 } from 'react-icons/tb';

export const Navbar = () => {

    const { colorMode } = useColorMode();
    const router = useRouter();
    const cmb = colorMode === 'light' ? '#121212' : 'white';
    const cmt = colorMode === 'light' ? '#F6F7F9' : '#2F343C';
    const emailRegex = /.+?(?=@)/;
    const [user] = useAuthState(auth);

    return (
        <Flex
            pos="relative"
            zIndex="1111111"
            align="center"
            direction="row"
            w="100%"
            h="45px"
            px="15px"
            borderTop="1px solid #494D51"
            borderBottom="1px solid #494D51"
            bgColor={cmb}
        >   
            <GiRollingBomb />
            <Text ml={2} color={cmt} fontWeight={700} _hover={{cursor: 'pointer'}} onClick={() => router.push('/')}>Rollsolid</Text>
            <Box w="1px" h="45%" ml={5} borderLeft="1px solid " />
            <Button h="60%" ml={7} fontSize="11pt" fontWeight={700} bg={cmb} border="1px solid #121212" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} onClick={() => router.push('/about')}><SiInformatica color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">About</Text></Button>
            {/* {user && (
                <>
        
                    <WidgetNavbar />
                    <Button h="60%" ml={0} fontSize="12pt" fontWeight={500} bg={cmb} border="1px solid #121212" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><FaChartLine color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Charts</Text></Button>
                    <Button h="60%" ml={0} fontSize="11pt" fontWeight={500} bg={cmb} border="1px solid #121212" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><GiAbstract089 color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Simulate</Text></Button>
                    <Button h="60%" ml={0} fontSize="15pt" fontWeight={500} bg={cmb} border="1px solid #121212" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><FaChartLine color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Play</Text></Button>
                </>
            )} */}
            <>
                {/* <Button border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} ml={0} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="13pt"><MdOutlineWidgets color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Widgets</Text></Button> */}
                <WidgetNavbar />
                <Button h="60%" ml={0} fontSize="12pt" fontWeight={700} bg={cmb} border="1px solid #121212" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><FaChartLine color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Charts</Text></Button>
                <Button h="60%" ml={0} fontSize="11pt" fontWeight={700} bg={cmb} border="1px solid #121212" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><GiAbstract089 color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Simulate</Text></Button>
                <Button h="60%" ml={0} fontSize="15pt" fontWeight={700} bg={cmb} border="1px solid #121212" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><TbBook2 color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Resources</Text></Button>
            </>
            
            {/* <Button _hover={{backgroundColor: '#252A30'}} ml={7} bg={cmb} h="55%" borderRadius="3px" fontWeight={500}>Hands</Button> */}
            {/* <Box w="1px" h="45%" mr={3} ml="auto" borderLeft="1px solid " /> */}
            
            {user?.email &&
                <Tooltip mt={1.5} mr={2} fontWeight={700} bg='#434343' label='Status: Connected' placement='bottom'>
                    <Box mr="6px" ml="auto" p={0.5} bg='none' border='1.5px solid none' borderRadius='12px' _hover={{bg: 'none'}}>
                        <IdenticonImg saturation='50' lightness='50' height="28px" width="28px" username={user.email.match(emailRegex)?.toString()!} />
                    </Box> 
                </Tooltip> 
            }

            <AuthButtons user={user} />
            
            {/* <Button onClick={toggleColorMode} ml="auto" mr="5px" border="2px solid red" colorScheme="facebook">Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button> */}
            {/* <Switch /> */}
        </Flex>
    );
};