import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, useColorMode, Input, Box, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { HiFingerPrint } from 'react-icons/hi';
import { GiRollingBomb } from 'react-icons/gi';
import { MdAlternateEmail } from 'react-icons/md';
import GoogleSignIn from './GoogleSignIn';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/errors';
import Footer from '../Footer/Footer';

const UserLogin:React.FC = () => {
    // const [authenticated, setAuthenticated]
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#282828' : 'white';

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const [
        userAuth,
        authLoading,
        authError
    ] = useAuthState(auth);

    useEffect(() => {
        if (userAuth) {
            router.push('/dashboard')
        }
    }, [user])

    if (userAuth || authLoading) {
        return (
            <></>
        )
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("HELLO")
        event.preventDefault();
        console.log(loginForm)
        signInWithEmailAndPassword(loginForm.email, loginForm.password);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    
    return (
        <Flex flexDirection="column" width="100%">
            <Flex justifyContent="center" width="100%" height={["640px","640px","720px","720px"]}>
                <Flex bg="#121212" border="1px solid black" flexDir="column" mt={[0,0,5,5]} width={['100%', '90%', '80%', '60%']} maxWidth="500px" height="620px" align="center">
                    <Flex align="center" mt={9} direction="row">
                        <Text fontSize={["24pt", "24pt", "28pt", "28pt"]} fontWeight={700} fontFamily="AvenirNext-DemiBold">Login to Rollsolid&nbsp;</Text>
                        
                        {/* <1Text fontSize="28pt" fontWeight={700} fontFamily="AvenirNext-DemiBold">&nbsp;Rollsolid</Text> */}
                        <GiRollingBomb fontSize="28pt" />
                    </Flex>
                    <Text lineHeight="19px" width={["90%", "90%", "65%", "65%"]} textAlign="center" mt={3} mb={1} fontSize="13pt" fontFamily="AvenirNext-Regular" color="#868686">Explore your Poker games and simulate your strategy through the power of data</Text>
                    <Flex mt={5} ml="auto" mr="auto" width={["90%", "90%", "65%", "65%"]} direction="column">
                        <form onSubmit={onSubmit}>
                            <Text fontWeight={600} fontFamily="AvenirNext-Regular">Username</Text>
                            
                            
                            
                            <Input required name="email" type="email" onChange={onChange} border="none" _placeholder={{color: 'white', fontFamily: 'AvenirNext-DemiBold'}} placeholder="" height="45px" focusBorderColor='black' fontFamily="AvenirNext-DemiBold" borderRadius="0px" bg="#282828" mt={2} color="white" mb="17px" />
                                
                        
                            <Text fontWeight={600} fontFamily="AvenirNext-Regular">Password</Text>
                            
                                
                            <Input required name="password" onChange={onChange} _placeholder={{color: 'white', fontFamily: 'AvenirNext-DemiBold'}} placeholder="" height="45px" focusBorderColor='black' fontFamily="AvenirNext-DemiBold" border="none" borderRadius="0px" mt={2} color="white" type="password" bg="#282828" />
                            
                            <Text fontSize="10pt" mt={2} fontFamily='AvenirNext-Regular'>Forget your <Text onClick={() => router.push('/reset-password')} _hover={{cursor: 'pointer'}} textDecoration="underline" fontFamily='AvenirNext-DemiBold' as="span" color="white">password</Text> ?</Text>
                            <Box height="17px">
                                <Text fontSize="10pt" color="red.300">{FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}</Text>
                            </Box>
                            <Button isLoading={loading} width="100%" type="submit" _hover={{color: 'white'}} border="1px solid #494D51" height="48px" bg="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)" borderRadius="0px" mt={6} color="black">Login to Your Account&nbsp;&nbsp;→</Button>
                            <Box width="100%" mt={5}>
                                    <GoogleSignIn />
                            </Box>
                            <Text textAlign="center" fontSize="10pt" mt={5} fontFamily='AvenirNext-Regular'>New to Rollsolid? <Text onClick={() => router.push('/signup')} _hover={{cursor: 'pointer'}} textDecoration="underline" fontFamily='AvenirNext-DemiBold' as="span" color="purple.300">Sign Up</Text></Text>
                        </form>
                    </Flex>
                    {/* <Flex align="center" flexDirection="row" mt={6} borderTop="1px solid black" bg="#353535" width="100%" h="36px">
                        <Box ml={3}>
                            <BsQuestionSquare />
                        </Box>
                        <Text ml={3} fontSize="10pt" fontFamily='AvenirNext-Regular'>Learn more about Rollsolid <Text textDecoration="underline" fontFamily='AvenirNext-DemiBold' as="span">here</Text></Text>
                    </Flex> */}
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    )
}
export default UserLogin;