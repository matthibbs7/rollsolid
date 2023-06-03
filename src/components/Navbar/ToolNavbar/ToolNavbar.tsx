/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { Flex, useColorMode, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';

export const ToolNavbar = () => {

    const { colorMode } = useColorMode();
    const router = useRouter();
    const cmb = colorMode === 'light' ? '#161616' : '#161616';
    const cmt = colorMode === 'light' ? '#F6F7F9' : '#F6F7F9';
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
            mt='44px'
            px="15px"
            borderTop="1px solid #1D1D1D"
            borderBottom="1px solid #1D1D1D"
            bgColor={cmb}
        >
            <Flex align='center' w='100%' h='100%'>
                <Flex align='center' justify='center' w='40px' h='42%' bg='#644ED6' borderRadius='9px'>
                    <Text fontSize='11px'>New</Text>
                </Flex>
                <Text ml={3} color='#D1D1D1' fontSize='12px'>Stripe payment support</Text>
                <Text ml='auto' color='#D1D1D1' fontSize='12px' _hover={{cursor: 'pointer', textDecor: 'underline'}}>Learn more</Text>
            </Flex>
        </Flex>
    );
};