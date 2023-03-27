import React from 'react';
import { Button, Text, Flex, useColorMode, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router';

const UserSignUp:React.FC = () => {
    // const [authenticated, setAuthenticated]
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#282828' : 'white';
    return (
        <Flex justifyContent="center" width="100%">
            <Flex flexDir="column" mt={7} width='70%' height="500px" align="center">
                <Text fontSize="28pt" fontWeight={700} fontFamily="AvenirNext-DemiBold">Login to Your Account</Text>
                <Text mt={3} mb={3} fontSize="15pt" fontFamily="AvenirNext-DemiBold" color="gray.700">Explore your Poker games and simulate your strategy</Text>
                <Flex mt={5} width="30%" direction="column">
                    <Text fontWeight={600} fontFamily="AvenirNext-Regular">Username</Text>
                    <Input focusBorderColor='red.300' fontFamily="AvenirNext-Regular" border="none" borderRadius="0" bg="black" mt={2} color="white" />
                    <Text fontWeight={600} fontFamily="AvenirNext-Regular" mt={5}>Password</Text>
                    <Input focusBorderColor='red.300' border="none" borderRadius="0" bg="black" mt={2} color="red.300" type="password" fontWeight={700} />
                    <Button bg="black" borderRadius="0" mt={10}>Login</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default UserSignUp;