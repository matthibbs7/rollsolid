import React from 'react';
import { Flex, Text, Link, Button, Box } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import router from 'next/router';
import { GiRollingBomb } from 'react-icons/gi';

const Footer:React.FC = () => {
    const [user] = useAuthState(auth);
    
    return (
        <Flex justify="center" minH="270px" bg="#121212" borderY="1px solid #494D51">
            <Flex wrap="wrap" direction="row" w="100%" minW="300px" maxW='1250px'>
                <Flex direction="column">
                    <Flex align="center" mt={9} mr={5}>
                        <Box mr={3} ml={3}>
                            <GiRollingBomb color="white" fontSize="19pt" />
                        </Box>
                        {/* <Image src="/images/logowhite.png" height="64px" minWidth="64px" /> */}
                        <Link href='/' style={{ textDecoration: 'none' }}>
                            <Text color="white" fontSize="22pt" fontWeight="700">Rollsolid</Text>
                        </Link>
                        
                    </Flex>
                    <Text mt={-1} ml={4} color="#868686" fontSize="11pt" textOverflow="unset">Develop your strategy and dominate Poker today!</Text>
                    <Text mt={2} ml={4} color="#868686" fontSize="11pt">© 2023 | All rights reserved</Text>
                    <Text mt={4} ml={4} fontSize="13pt" fontWeight={700}>Contact</Text>
                    <Button w="120px" mt={2} mb="auto" ml={4} bg="none" border="1px solid #494D51" borderRadius="0" _hover={{bg: '#1c1c1c'}}>Email Us</Button>
                </Flex>
                <Flex direction="column" mt={10} mr="10%" ml="auto">
                    <Text color="purple.300" fontWeight={700}>Rollsolid</Text>
                    <Text mt={2} color="white" _hover={{cursor: 'pointer'}} onClick={() => {router.push('/about');}}>About</Text>
                    <Text color="white">Hands</Text>
                    <Text color="white">Charts</Text>
                    <Text color="white">Simulate</Text>
                </Flex>
                <Flex direction="column" mt={10} mr="10%">
                    <Text color="purple.300" fontWeight={700}>Contribute</Text>
                    <Text mt={2} color="white">Become a referee</Text>
                    <Text color="white">Submit a suggestion</Text>
                    <Text color="white">Want a new feature? Click here</Text>
                </Flex>
                <Flex direction="column" mt={10} mr={5}>
                    <Text color="purple.300" fontWeight={700}>Account</Text>
                    {user ?
                        <>
                            <Text mt={2} color="white" _hover={{cursor: 'pointer'}} onClick={() => signOut(auth)}>Logout</Text>
                            <Text mt={2} color="white" _hover={{cursor: 'pointer'}} onClick={() => signOut(auth)}>Profile</Text>
                        </>
                        :
                        <>
                            <Text mt={2} color="white" _hover={{cursor: 'pointer'}} onClick={() => router.push('/login')}>Login</Text>
                            <Text color="white" _hover={{cursor: 'pointer'}} onClick={() => router.push('/signup')}>Create Account</Text>
                        </>
                    }
                    
                </Flex>
            </Flex>
        </Flex>
    );
};
export default Footer;