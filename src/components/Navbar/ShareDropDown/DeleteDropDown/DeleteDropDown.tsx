/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button, Text, Flex, Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { useRouter } from 'next/router';
import { BsThreeDots } from 'react-icons/bs';

const emailRegex = /.+?(?=@)/;

const DeleteDropDown = ({ color, dashboardId, onDelete }: any) => {
    const [user] = useAuthState(auth);
    const router = useRouter();

    return (
        <Flex pos='absolute' zIndex={8} h="100%" >  
            <Menu>
                {({ isOpen }) => (
                    <Flex w='100%' h='100%' bg={color ?? '#222'}>
                        <MenuButton as={Button} pos='absolute' zIndex={3} justifyContent='center' w='30px' minW='30px' h='30px' mt={10} ml='218px' p={0} px={1.5} bg={color ?? '#222'} borderRadius={2} _hover={{bg: 'whiteAlpha.400', cursor: 'pointer'}} _active={{bg: 'whiteAlpha.400', color: 'white'}}  isActive={isOpen}>
                        
                            <BsThreeDots />
                        
                        </MenuButton>
                        <MenuList zIndex={10} w="80px" minW='80px' maxW='80px' h='33px' mt={-1} mr={-10} p={0} bg="#252525" border='none' borderRadius='4px' motionProps={{
                            transition: { duration: 0 },
                            animate: 'visible'}}>
                            <Flex direction='column' w='100%' maxW='80px' h='100%'>
                                <MenuItem w='100%' h='100%' bg='none' borderTopRadius='4px' borderBottomRadius='4px' _hover={{bg: '#343434'}} onClick={() => onDelete(dashboardId)}>
                                    <Flex align='center'>
                                        {/* <FaTrashCan fontSize='10px' /> */}
                                        <Text ml={0} fontSize='13px'>Delete</Text>
                                    </Flex>
                                </MenuItem>
                            </Flex>
                        </MenuList>
                    </Flex>
                )}
            </Menu>
        </Flex>
    );
};
export default DeleteDropDown;