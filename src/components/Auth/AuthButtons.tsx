import React, { useEffect } from 'react';
import { Button, Text, Flex, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';

type AuthButtonsProps = {
    user: any;
}

const AuthButtons:React.FC<AuthButtonsProps> = ({ user }) => {
    // const [authenticated, setAuthenticated]
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#121212' : 'white';
    
    useEffect(() => {
        if (!user) {
            router.push('/login')
        }
    }, [user])

    return (
        <Flex ml="auto" height="100%" align="center">  
            {user ? (
                    <>
                        <Text fontFamily="AvenirNext-Regular">{user.email}</Text>
                        <Button onClick={() => signOut(auth)} _hover={{backgroundColor: '#1f1f1f'}} bg={cmb} h="60%" borderRadius="0" fontWeight={500} fontSize="11pt">Log out</Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => router.push('/login')} _hover={{backgroundColor: '#1f1f1f'}} bg={cmb} h="60%" borderRadius="0" fontWeight={500} fontSize="15pt"><Text fontSize="11pt">Login</Text></Button>
                        <Button onClick={() => router.push('/signup')} _hover={{backgroundColor: '#1f1f1f'}} bg={cmb} h="60%" borderRadius="0" fontWeight={500} fontSize="15pt"><Text fontSize="11pt">Sign Up</Text></Button>
                    </>
                )
            }
            
        </Flex>
    )
}
export default AuthButtons;