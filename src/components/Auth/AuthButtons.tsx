import React from 'react';
import { Button, Text, Flex, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router';

const AuthButtons:React.FC = () => {
    // const [authenticated, setAuthenticated]
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#282828' : 'white';
    return (
        <Flex ml="auto" height="100%" align="center">  
            <Button onClick={() => router.push('/login')} _hover={{backgroundColor: '#1f1f1f'}} bg={cmb} h="60%" borderRadius="3px" fontWeight={500} fontSize="15pt"><Text fontSize="11pt">Login</Text></Button>
            <Button onClick={() => router.push('/signup')} _hover={{backgroundColor: '#1f1f1f'}} bg={cmb} h="60%" borderRadius="3px" fontWeight={500} fontSize="15pt"><Text fontSize="11pt">Sign Up</Text></Button>
        </Flex>
    )
}
export default AuthButtons;