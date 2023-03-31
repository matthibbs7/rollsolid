import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, useColorMode, Input, Box, InputGroup, InputLeftElement, InputRightElement, IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { BsQuestionSquare } from 'react-icons/bs';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { GiRollingBomb } from 'react-icons/gi';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../firebase/errors';
import { MdAlternateEmail } from 'react-icons/md';
import { HiFingerPrint } from 'react-icons/hi';
import GoogleSignIn from './GoogleSignIn';

const UserSignUp:React.FC = () => {
    // const [authenticated, setAuthenticated]
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#282828' : 'white';
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
    const [error, setError] = useState('');

    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (error) setError('');
        
        if (signUpForm.password !== signUpForm.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

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
    
    return (
        <Flex justifyContent="center" width="100%">
            <Flex bg="#121212" border="1px solid black" flexDir="column" mt={[1,1,5,5]} width={['100%', '90%', '80%', '60%']} maxWidth="500px" height="620px" align="center">
                <Flex align="center" mt={5}>
                    <Text fontSize={["24pt", "24pt", "28pt", "28pt"]} fontWeight={700} fontFamily="AvenirNext-DemiBold">Create an Account&nbsp;</Text>
                    <GiRollingBomb fontSize="28pt" />
                </Flex>
                <Text lineHeight="19px" width={["90%", "90%", "65%", "65%"]} textAlign="center" mt={3} mb={1} fontSize="13pt" fontFamily="AvenirNext-Regular" color="#868686">Explore your Poker games and simulate your strategy through the power of data</Text>
                
                
                <Flex mt={5} ml="auto" mr="auto" width={["90%", "90%", "65%", "65%"]} direction="column">
                    <form onSubmit={onSubmit}>
                        <Text fontWeight={600} fontFamily="AvenirNext-Regular">Email</Text>
                        <InputGroup width="100%">
                            <InputLeftElement
                                pointerEvents='none'
                            >
                                <Box mt={5}><MdAlternateEmail fontSize="14pt" color='#454545' /></Box>
                            </InputLeftElement>
                            
                            <Input onChange={onChange} required name="email" type="email" border="none" _placeholder={{color: 'white', fontFamily: 'AvenirNext-DemiBold'}} placeholder="" height="42px" focusBorderColor='black' fontFamily="AvenirNext-DemiBold" borderRadius="5px" bg="#282828" mt={2} color="white" mb="17px" />
                        </InputGroup>
                        <Text mt={-2} fontWeight={600} fontFamily="AvenirNext-Regular">Password</Text>
                        
                        <InputGroup width="100%">
                            <InputLeftElement
                                pointerEvents='none'
                            >
                                <Box mt={4}><HiFingerPrint fontSize="14pt" color='#454545' /></Box>
                            </InputLeftElement>
                            
                            <Input onChange={onChange} required name="password" _placeholder={{color: 'white', fontFamily: 'AvenirNext-DemiBold'}} placeholder="" height="42px" focusBorderColor='black' fontFamily="AvenirNext-DemiBold" border="none" borderRadius="5px" mt={2} color="white" type="password" bg="#282828" />
                        </InputGroup>
                        <Text mt={3} fontWeight={600} fontFamily="AvenirNext-Regular">Confirm Password</Text>
                        <InputGroup width="100%">
                            <InputLeftElement
                                pointerEvents='none'
                            >
                                <Box mt={4}><HiFingerPrint fontSize="14pt" color='#454545' /></Box>
                            </InputLeftElement>
                            <Input onChange={onChange} required name="confirmPassword" _placeholder={{color: 'white', fontFamily: 'AvenirNext-DemiBold'}} placeholder="" height="42px" focusBorderColor='black' fontFamily="AvenirNext-DemiBold" border="none" borderRadius="5px" mt={2} color="white" type={show ? 'text' : 'password'} bg="#282828" />
                            <InputRightElement width='3rem'>
                                <IconButton mt={4} fontSize="16pt" _hover={{bg: 'none'}} color='#454545' bg="none" aria-label='see password' icon={show ? <AiFillEyeInvisible /> : <AiFillEye />} onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </IconButton>
                            </InputRightElement>
                        </InputGroup>
                        <Box height="17px">
                            <Text fontSize="10pt" color="red.300">{error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}</Text>
                        </Box>
                        {/* <Text fontSize="10pt" mt={2} fontFamily='AvenirNext-Regular'>Forget your <Text _hover={{cursor: 'pointer'}} textDecoration="underline" fontFamily='AvenirNext-DemiBold' as="span">password</Text> ?</Text> */}
                        <Button isLoading={loading} type="submit" width="100%" _hover={{color: 'white', bg: 'linear-gradient(90deg, rgba(94,94,105,1) 0%, rgba(250,121,112,1) 35%, rgba(0,255,222,1) 100%);'}} border="none" height="48px" bg="linear-gradient(90deg, rgba(94,94,105,1) 0%, rgba(250,121,112,1) 35%, rgba(0,255,222,1) 100%);" borderRadius="5px" mt={5} color="black">Create Account&nbsp;&nbsp;→</Button>
                        <Box width="100%" mt={5}>
                            <GoogleSignIn />
                        </Box>
                        <Text textAlign="center" fontSize="10pt" mt={5} fontFamily='AvenirNext-Regular'>Already have an account? <Text onClick={() => router.push('/login')} _hover={{cursor: 'pointer'}} textDecoration="underline" fontFamily='AvenirNext-DemiBold' as="span">Login</Text></Text>
                    </form>
                </Flex>
                
            </Flex>
        </Flex>
    )
}
export default UserSignUp;