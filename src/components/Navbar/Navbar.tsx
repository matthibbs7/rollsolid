/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import { Box, Button, Flex, Text, Tooltip, useColorMode } from '@chakra-ui/react';
import { GiRollingBomb, GiAbstract089 } from 'react-icons/gi';
import AuthButtons from '../Auth/AuthButtons';
import { workspaceState } from '@/atoms/workspaceAtom';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/clientApp';
import { SiInformatica } from 'react-icons/si';
import WidgetNavbar from '../Widget/WidgetNavbar/WidgetNavbar';
import { IdenticonImg } from './IdenticonImage.tsx/IdenticonImage';
import { TbBook2 } from 'react-icons/tb';
import { IoPricetagsOutline } from 'react-icons/io5';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import FeatureDropDown from './FeatureDropDown/FeatureDropDown';
import ChartsDropDown from '../Charts/ChartsDropDown/ChartsDropDown';
import ResourcesModal from '../Resources/ResourcesModal/ResourcesModal';
import { doc, updateDoc } from 'firebase/firestore';
import { useRecoilState } from 'recoil';
import ShareDropDown from './ShareDropDown/ShareDropDown';

interface NavbarProps {
    unsaved: boolean;
    setUnsaved: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = ({
    unsaved,
    setUnsaved,
}: NavbarProps) => {
    const { colorMode } = useColorMode();
    const router = useRouter();
    const { asPath } = useRouter();
    const cmb = colorMode === 'light' ? '#161616' : '#161616';
    const cmt = colorMode === 'light' ? '#F6F7F9' : '#F6F7F9C';
    const emailRegex = /.+?(?=@)/;
    const [user] = useAuthState(auth);

    const [open, setOpen] = useState(false);
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);

    const publishDoc = async () => {
        // setError('');
        const slashIndex = asPath.lastIndexOf('/');
        const getDocId = asPath.substring(slashIndex + 1);
        try {
            await updateDoc(doc(firestore, 'dashboard', getDocId), {dashboardWorkspaces: {...workspaces}});
        } catch (err) {
            console.log(err);
            return;
        }
    };

    return (
        <Flex
            pos={router.pathname !== '/dashboard' && router.pathname !== '/' && router.pathname !== '/login' && router.pathname !== '/signup' && router.pathname !== '/reset-password' && router.pathname !== '/profile' ? 'fixed' : 'relative'}
            zIndex="1111111"
            align="center"
            direction="row"
            w="100%"
            h="45px"
            px="15px"
            borderTop="1px solid"
            borderTopColor={router.pathname === '/about' || router.pathname === '/pricing' ? '#1D1D1D' : '#2F2F2F'}
            borderBottom="1px solid"
            borderBottomColor={router.pathname === '/about' || router.pathname === '/pricing' ? '#1D1D1D' : '#2F2F2F'}
            bgColor={cmb}
        >   <Box minW='20px'>
                <GiRollingBomb fontSize='18px' />
            </Box>
            <Text mt={0} ml={2} color={cmt} fontFamily='Kosmos' fontSize='14px' _hover={{cursor: 'pointer'}} onClick={() => router.push('/')}>Rollsolid</Text>
            <Box w="1px" h="45%" ml={5} borderLeft="1px solid " />
            <Flex align='center' overflow='scroll' h='100%'>
                <Button minW='85px' h="60%" ml={5} fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} onClick={() => router.push('/about')}><SiInformatica color="#A3A3A3" />&nbsp;&nbsp;<Text color='#A3A3A3' fontSize="12px">About</Text></Button>
                {router.pathname === '/' || router.pathname === '/about' || router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/reset-password' || router.pathname === '/support' || router.pathname === '/pricing'  ? (
                    <>
                        {/* <Button border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} ml={0} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="13pt"><MdOutlineWidgets color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Widgets</Text></Button> */}
                    
                        <FeatureDropDown />
                        <Button h="60%" ml={0} color='#A3A3A3' fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} onClick={() => router.push('/support')}><MdOutlineSupervisorAccount />&nbsp;&nbsp;<Text fontSize="12px">Support</Text></Button>
                        <Button h="60%" ml={0} color='#A3A3A3' fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} onClick={() => router.push('/pricing')}><IoPricetagsOutline />&nbsp;&nbsp;<Text fontSize="12px">Pricing</Text></Button>
                    </>
                ) : (
                    <>
                        <WidgetNavbar />
                        <ChartsDropDown />
                        {/* <Button h="60%" ml={0} color='#A3A3A3' fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><FaChartLine />&nbsp;&nbsp;<Text fontSize="12px">Charts</Text></Button> */}
                        <Button h="60%" ml={0} color='#A3A3A3' fontSize="11px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}}><GiAbstract089 />&nbsp;&nbsp;<Text fontSize="12px">Simulate</Text></Button>
                        <Button h="60%" ml={0} color='#A3A3A3' fontSize="12px" fontWeight={400} bg={cmb} border="1px solid #161616" borderRadius="0px" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} onClick={() => setOpen(true)}><TbBook2 />&nbsp;&nbsp;<Text fontSize="12px">Resources</Text></Button>
                    </>
                )}
            </Flex>
            {!(router.pathname === '/' || router.pathname === '/about' || router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/reset-password' || router.pathname === '/support' || router.pathname === '/pricing') ? (
                <>
                    {unsaved ? (
                        <Flex mr={4} ml='auto' p="3.5px" px="9px" bg="#121212" border="1px solid #303030" borderRadius={3} _hover={{bg: '#191919', border: '1px solid #303030', cursor: 'pointer'}} onClick={() => {publishDoc();setUnsaved(false);}}>
                            <Text color='white' fontSize='11px' fontWeight={500}>Publish Changes</Text>
                        </Flex>
                    ) : (
                        <Flex mr={4} ml='auto' p="3.5px" px="9px" bg="#202020" borderRadius={3}>
                            <Text  color='white' fontSize='11px' fontWeight={500}>Saved</Text>
                        </Flex>
                    )}
                    <ShareDropDown />
                </>
            ) : (
                <Flex ml='auto' />
            )}
            
            {user?.email &&
                <Tooltip mt={0} mr={0} fontSize='12px' fontWeight={500} bg='black' border='0.5px solid #404040' label='You' placement='left'>
                    <Box mr="2px" p={0.4} bg='none' border='1.5px solid none' borderRadius='14px' _hover={{bg: 'none'}}>
                        <IdenticonImg saturation='50' lightness='50' height="22px" width="22px" username={user.email.match(emailRegex)?.toString()!} />
                    </Box> 
                </Tooltip> 
            }
            <ResourcesModal isOpen={open} handleClose={() => setOpen(false)} />
            <AuthButtons user={user} />
        </Flex>
    );
};