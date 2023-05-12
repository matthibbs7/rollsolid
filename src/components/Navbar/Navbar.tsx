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
import { IoPricetagsOutline } from 'react-icons/io5';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import FeatureDropDown from './FeatureDropDown/FeatureDropDown';

export const Navbar = () => {

    const { colorMode } = useColorMode();
    const router = useRouter();
    const cmb = colorMode === 'light' ? '#161616' : 'white';
    const cmt = colorMode === 'light' ? '#F6F7F9' : '#2F343C';
    const emailRegex = /.+?(?=@)/;
    const [user] = useAuthState(auth);

    return (
        <Flex
            pos={router.pathname === '/about' || router.pathname === '/support' ? 'fixed' : 'relative'}
            zIndex="1111111"
            align="center"
            direction="row"
            w="100%"
            h="45px"
            px="15px"
            borderTop="1px solid"
            borderTopColor={router.pathname === '/about' || router.pathname === '/support' ? '#1D1D1D' : '#2F2F2F'}
            borderBottom="1px solid"
            borderBottomColor={router.pathname === '/about' || router.pathname === '/support' ? '#1D1D1D' : '#2F2F2F'}
            bgColor={cmb}
        >   
            <GiRollingBomb />
            <Text ml={2} color={cmt} fontFamily='TWKEverett-Regular' fontSize='14.5px' fontWeight={600} _hover={{cursor: 'pointer'}} onClick={() => router.push('/')}>Rollsolid</Text>
            <Box w="1px" h="45%" ml={5} borderLeft="1px solid " />
            <Button h="60%" ml={7} fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} onClick={() => router.push('/about')}><SiInformatica color="#A3A3A3" />&nbsp;&nbsp;<Text color='#A3A3A3' fontSize="12px">About</Text></Button>
            {router.pathname === '/about' || router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/reset-password'|| router.pathname === '/support'  ? (
                <>
                    {/* <Button border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} ml={0} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="13pt"><MdOutlineWidgets color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Widgets</Text></Button> */}
                    
                    <FeatureDropDown />
                    <Button h="60%" ml={0} color='#A3A3A3' fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} onClick={() => router.push('/support')}><MdOutlineSupervisorAccount />&nbsp;&nbsp;<Text fontSize="12px">Support</Text></Button>
                    <Button h="60%" ml={0} color='#A3A3A3' fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><IoPricetagsOutline />&nbsp;&nbsp;<Text fontSize="12px">Pricing</Text></Button>
                </>
            ) : (
                <>
                    <WidgetNavbar />
                    <Button h="60%" ml={0} color='#A3A3A3' fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><FaChartLine />&nbsp;&nbsp;<Text fontSize="12px">Charts</Text></Button>
                    <Button h="60%" ml={0} color='#A3A3A3' fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><GiAbstract089 />&nbsp;&nbsp;<Text fontSize="12px">Simulate</Text></Button>
                    <Button h="60%" ml={0} color='#A3A3A3' fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><TbBook2 />&nbsp;&nbsp;<Text fontSize="12px">Resources</Text></Button>
                </>
            )}
            
            {user?.email &&
                <Tooltip mt={1.5} mr={2} fontWeight={700} bg='#434343' label='Status: Connected' placement='bottom'>
                    <Box mr="2px" ml="auto" p={0.4} bg='none' border='1.5px solid #644ED6' borderRadius='14px' _hover={{bg: 'none'}}>
                        <IdenticonImg saturation='50' lightness='50' height="22px" width="22px" username={user.email.match(emailRegex)?.toString()!} />
                    </Box> 
                </Tooltip> 
            }

            <AuthButtons user={user} />
        </Flex>
    );
};