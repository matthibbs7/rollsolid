/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, Text, Flex, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { useRouter } from 'next/router';

const emailRegex = /.+?(?=@)/;

const CanEditDropDown:React.FC = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const [perm, setPerm] = useState<'EDIT' | 'VIEW'>('EDIT');

    return (
        <Flex pos='absolute' zIndex='999999' top='-8' right='6' align="center" h="100%" >  
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton as={Button} flexDir='column' w="-moz-fit-content" h="26px"  mr={4} p="5px" px="9px" color='#999999' bg="none" _hover={{bg: 'none', color: 'white'}}  _active={{color: 'white'}} isActive={isOpen}>
                            <Flex>
                                <Text align='center' fontSize='11.5px' fontWeight={500}>
                                    {perm === 'EDIT' ? 'Can Edit' : 'Can View'}
                                </Text>
                            </Flex>
                        </MenuButton>
                        <MenuList w="170px" minW="0" h='66px' mt={-1} mr={-10} p={0} bg="#252525"  border='none' borderRadius='4px' motionProps={{
                            transition: { duration: 0 },
                            animate: 'visible'}}>
                            <Flex direction='column' w='100%' h='100%'>
                                <MenuItem w='100%' h='50%' bg='none' borderTopRadius='4px' _hover={{bg: '#343434'}} onClick={() => setPerm('EDIT')}>
                                    <Text fontSize='13px'>Can Edit</Text>
                                </MenuItem>
                                <MenuItem w='100%' h='50%' bg='none' borderBottomRadius='4px' _hover={{bg: '#343434'}} onClick={() => setPerm('VIEW')}>
                                    <Text fontSize='13px'>Can View</Text>
                                </MenuItem>
                            </Flex>
                        </MenuList>
                    </>
                )}
            </Menu>
        </Flex>
    );
};
export default CanEditDropDown;