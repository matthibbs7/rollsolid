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
        <Flex justify="center" minH="270px" bg="#161616" borderY="1px solid #2F2F2F">
            <Flex wrap="wrap" direction="row" w="100%" minW="300px" maxW='1250px'>
                <Flex direction="column">
                    <Flex align="center" mt={9} mr={5}>
                        <Box mr={3} ml={3}>
                            <GiRollingBomb color="white" fontSize="19pt" />
                        </Box>
                        {/* <Image src="/images/logowhite.png" height="64px" minWidth="64px" /> */}
                        <Link href='/' style={{ textDecoration: 'none' }}>
                            <Text color="white" fontSize="22pt" fontWeight="600">Rollsolid</Text>
                        </Link>
                        
                    </Flex>
                    <Text mt={-1} ml={4} color="#A3A3A3" fontSize="11pt" textOverflow="unset">Develop your strategy and dominate Poker today!</Text>
                    <Text mt={2} ml={4} color="#A3A3A3" fontSize="11pt">© 2023 | All rights reserved</Text>
                    <Text mt={4} ml={4} fontSize="13pt" fontWeight={700}>Contact</Text>
                    <Button w="120px" mt={2} mb="auto" ml={4} bg="none" border="1px solid #2F2F2F" borderRadius="0" _hover={{bg: '#1c1c1c'}}>Email Us</Button>
                </Flex>
                <Flex direction="column" mt={10} mr="10%" ml="auto">
                    <Text  color="#a3a3a3" fontSize='13px' fontWeight={500}>Rollsolid</Text>
                    <Text mt={2} color="#858585" fontSize='13px' _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => {router.push('/about');}}>About</Text>
                    <Text mt={2} color="#858585" fontSize='13px' _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => {router.push('/features');}}>Features</Text>
                    <Text mt={2} color="#858585" fontSize='13px' _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => {router.push('/support');}}>Support</Text>
                    <Text mt={2} color="#858585" fontSize='13px' _hover={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => {router.push('/pricing');}}>Pricing</Text>
                </Flex>
                <Flex direction="column" mt={10} mr="10%">
                    <Text color="#a3a3a3" fontSize='13px' fontWeight={500}>Resources</Text>
                    <Text mt={2} color="#858585" fontSize='13px'>Documentation</Text>
                    <Text mt={2} color="#858585" fontSize='13px'>News</Text>
                    <Text mt={2} color="#858585" fontSize='13px'>Want a new feature? Click here</Text>
                </Flex>
                <Flex direction="column" mt={10} mr={5}>
                    <Text color="#a3a3a3" fontSize='13px' fontWeight={500}>Account</Text>
                    {user ?
                        <>
                            <Text mt={2} color="#858585" fontSize='13px' _hover={{cursor: 'pointer'}} onClick={() => signOut(auth)}>Logout</Text>
                            <Text mt={2} color="#858585" fontSize='13px' _hover={{cursor: 'pointer'}} onClick={() => signOut(auth)}>Profile</Text>
                        </>
                        :
                        <>
                            <Text mt={2} color="#858585" fontSize='13px' _hover={{cursor: 'pointer'}} onClick={() => router.push('/login')}>Login</Text>
                            <Text mt={2} color="#858585" fontSize='13px' _hover={{cursor: 'pointer'}} onClick={() => router.push('/signup')}>Create Account</Text>
                        </>
                    }
                    
                </Flex>
            </Flex>
        </Flex>
    );
};
export default Footer;