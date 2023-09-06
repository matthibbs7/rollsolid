/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, Text, Flex, useColorMode, Menu, MenuButton, MenuList, Input, Box, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HiShare } from 'react-icons/hi';
import { GiEarthAmerica } from 'react-icons/gi';
import { BsCaretDownFill, BsFillEnvelopeFill } from 'react-icons/bs';
import CanEditDropDown from './CanEditDropDown/CanEditDropDown';
import { IdenticonImg } from '../IdenticonImage.tsx/IdenticonImage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { sleep } from '@/util/utility';

const ShareDropDown:React.FC = () => {
    const { colorMode } = useColorMode();
    const router = useRouter();
    const { asPath } = useRouter();
    const [user] = useAuthState(auth);
    const [copied, setCopied] = useState(false);
    const [invitedUsersList, setInvitedUsersList] = useState<Array<string>>(['spade']);

    const copyLink = async () => {
        setCopied(true);
        navigator.clipboard.writeText(`https://rollsolid.com${asPath}`);
        await sleep(1200);
        setCopied(false);
    };

    const emailRegex = /.+?(?=@)/;

    return (
        <Flex align="center" h="100%" >  
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton as={Button} flexDir='column' w="-moz-fit-content"  h="26px" mr={4} p="5px" px="9px" color='#a3a3a3' bg="#121212" border="1px solid #303030" borderRadius={3} _hover={{bg: '#191919', border: '1px solid #303030', cursor: 'pointer'}} _active={{color: '#D1D1D1', bg: '#191919'}} isActive={isOpen}>
                            <Flex>
                                <Text align='center' mt='1.5px' color='white' fontSize='11px' fontWeight={500}><HiShare /></Text>
                                <Text align='center' color='white' fontSize='11px' fontWeight={500}>&nbsp;&nbsp;Share</Text>
                            </Flex>
                        </MenuButton>
                        <MenuList w="390px" minW="0" h='300px' mt={1.5} mr={-10} p={4}  bg="#121212" border="1px solid #343434" borderRadius='3px' motionProps={{
                            transition: { duration: 0 },
                            animate: 'visible'}}>
                            <Flex w='100%'>
                                <Flex align='center' justify='center' w='34px' h='34px' bg='#343434' borderRadius={2.5}>
                                    <GiEarthAmerica fontSize='14pt' color='#E6E6E6' />
                                </Flex>
                                <Flex align='center' ml={3} color="#383838" fontSize='13px' _hover={{cursor: 'not-allowed'}}>
                                    <Text mr={1} fontWeight={500}>Public</Text>
                                    <BsCaretDownFill fontSize='10.5px' />
                                    
                                </Flex>
                                <Text mt={2} ml='auto' color='#999999' fontSize='13px'>Everyone can view</Text>
                            </Flex>
                            <Flex align='center' direction='row' mt={3}>
                                <Text color='#999' fontSize='13px'>Changing dashboard access is available with&nbsp;</Text>
                                <Text color='white' fontSize='13px' _hover={{cursor: 'pointer'}} onClick={() => router.push('/pricing')}>Rollsolid Pro</Text>
                            </Flex>
                            {/* <Text mt={3} mb={3} ml={5} fontSize="8pt" fontFamily="AvenirNext-Regular" color="#454545">© 2023 Rollsolid Inc. All rights reserved</Text> */}
                            <Flex align='center' mt={4}>
                                <Input w='85%' h='28px' pl={2} fontSize='13px' bg='#343434' border='none' borderRadius={2.5} shadow='none' _active={{border: 'none'}} _focus={{border: 'none', boxShadow: 'none'}} _placeholder={{color: '#999999'}} placeholder='Enter username or email' />
                                <CanEditDropDown />
                                <Button w='54px' h='28px' ml={3} p={1} px={0} color='black' fontSize='13px' bg='#A99BFC' borderRadius={3}>
                                    Send
                                </Button>
                            </Flex>
                            <Box w='109%' mt={5} ml={-4} borderTop='1px solid #343434'></Box>
                            <Flex direction='column' overflowX='scroll' w='100%' h='100px'>
                                <Flex align='center' w='100%' mt={3.5}>
                                    {user?.email && (
                                        <Tooltip mt={0} mr={0} fontSize='12px' fontWeight={500} bg='black' border='0.5px solid #404040' label='You' placement='left'>
                                            <Flex align='center' justify='center' w='34px' h='34px' mr="2px" p={0.4} bg='#343434' border='1.5px solid none' borderRadius={2.5} _hover={{bg: 'none'}}>
                                                <IdenticonImg saturation='50' lightness='50' height="28px" width="28px" username={user.email.match(emailRegex)?.toString()!} />
                                            </Flex> 
                                        </Tooltip>
                                    )}
                                    <Text ml={2} fontSize='13px'>{user?.email?.match(emailRegex)?.toString()}</Text>
                                    <Text ml='auto' color='#999999' fontSize='13px'>Owner</Text>
                                </Flex>
                                {invitedUsersList.map((u, i) => {
                                    return (
                                        <Flex key={i} align='center' w='100%' mt={1.5}>
                                    
                                            <Flex align='center' justify='center' w='34px' h='34px' mr="2px" p={0.4} bg='#343434' border='1.5px solid none' borderRadius={2.5} _hover={{bg: 'none'}}>
                                                <BsFillEnvelopeFill />
                                            </Flex> 
                                            <Flex  direction='column' ml={2}>
                                                <Text fontSize='13px'>{u}</Text>
                                                <Text color='#999999' fontSize='13px'>Invited</Text>
                                            </Flex>
                                            <Text ml='auto' color='#999999' fontSize='13px'>Can Edit</Text>
                                        </Flex>
                                    );
                                })}
                            </Flex>
                            <Box w='109%' ml={-4} borderTop='1px solid #343434'></Box>
                            <Flex w='100%' mt={3}>
                                <Button w='74px' h='26px' ml='auto' p={0} fontSize='12.5px' bg='#343434' borderRadius={2.5} onClick={copyLink}>{copied ? 'Copied!' : 'Copy link'}</Button>
                            </Flex>
                        </MenuList>
                    </>
                )}
            </Menu>
        </Flex>
    );
};
export default ShareDropDown;