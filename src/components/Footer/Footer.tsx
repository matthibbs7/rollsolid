import React from 'react';
import { Flex, Text, Image, Link, Button, Box } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import router from 'next/router';
import { GiRollingBomb } from 'react-icons/gi';

const Footer:React.FC = () => {
    const [user, loading, error] = useAuthState(auth)
    
    return (
        <Flex borderY="1px solid #494D51" bg="#121212" justifyContent="center" height="270px">
            <Flex width="100%" maxWidth='1250px' minWidth="500px" flexDirection="row">
                <Flex flexDirection="column">
                    <Flex align="center" mr={5} mt={9}>
                        <Box ml={3} mr={3}>
                            <GiRollingBomb color="white" fontSize="19pt" />
                        </Box>
                        {/* <Image src="/images/logowhite.png" height="64px" minWidth="64px" /> */}
                        <Link href='/' style={{ textDecoration: 'none' }}>
                            <Text fontFamily="AvenirNext-DemiBold" fontWeight="700" color="white" fontSize="22pt" display={{base: "none", md: 'unset'}}>Rollsolid</Text>
                        </Link>
                        
                    </Flex>
                    <Text ml={4} mt={-1} fontSize="11pt" color="#868686" fontFamily="AvenirNext-Regular">Develp your strategy and dominate Poker today!</Text>
                    <Text ml={4} mt={2} fontSize="11pt" color="#868686" fontFamily="AvenirNext-Regular">© 2023 | All rights reserved</Text>
                    <Text ml={4} mt={4} fontWeight={700} fontSize="13pt">Contact</Text>
                    <Button _hover={{bg: '#1c1c1c'}} bg="none" borderRadius="0" border="1px solid #494D51" ml={4} mb="auto" width="120px" mt={2}>Email Us</Button>
                </Flex>
                <Flex mt={10} mr="10%" ml="auto" flexDirection="column">
                    <Text fontWeight={700} color="orange.300" fontFamily="AvenirNext-DemiBold">Rollsolid</Text>
                    <Text _hover={{cursor: 'pointer'}} onClick={() => {router.push('/about')}} mt={2} color="white" fontFamily="AvenirNext-Regular">About</Text>
                    <Text color="white" fontFamily="AvenirNext-Regular">Hands</Text>
                    <Text color="white" fontFamily="AvenirNext-Regular">Charts</Text>
                    <Text color="white" fontFamily="AvenirNext-Regular">Simulate</Text>
                </Flex>
                <Flex mt={10} mr="10%" flexDirection="column">
                    <Text fontWeight={700} color="orange.300" fontFamily="AvenirNext-DemiBold">Contribute</Text>
                    <Text mt={2} color="white" fontFamily="AvenirNext-Regular">Become a referee</Text>
                    <Text color="white" fontFamily="AvenirNext-Regular">Submit a suggestion</Text>
                    <Text color="white" fontFamily="AvenirNext-Regular">Want a new feature? Click here</Text>
                </Flex>
                <Flex mt={10} mr={5} flexDirection="column">
                    <Text fontWeight={700} color="orange.300" fontFamily="AvenirNext-DemiBold">Account</Text>
                    {user ?
                        <>
                            <Text color="white" fontFamily="AvenirNext-Regular" _hover={{cursor: 'pointer'}} onClick={() => signOut(auth)} mt={2}>Logout</Text>
                            <Text color="white" fontFamily="AvenirNext-Regular" _hover={{cursor: 'pointer'}} onClick={() => signOut(auth)} mt={2}>Profile</Text>
                        </>
                        :
                        <>
                            <Text color="white" fontFamily="AvenirNext-Regular" _hover={{cursor: 'pointer'}} onClick={() => router.push('/login')} mt={2}>Login</Text>
                            <Text color="white" fontFamily="AvenirNext-Regular" _hover={{cursor: 'pointer'}} onClick={() => router.push('/signup')}>Create Account</Text>
                        </>
                    }
                    
                </Flex>
            </Flex>
        </Flex>
    )
}
export default Footer;