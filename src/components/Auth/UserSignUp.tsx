import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, Input, Box, InputGroup, InputLeftElement, InputRightElement, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { GiRollingBomb } from 'react-icons/gi';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../firebase/errors';
import { MdAlternateEmail } from 'react-icons/md';
import { HiFingerPrint } from 'react-icons/hi';
import GoogleSignIn from './GoogleSignIn';
import Footer from '../Footer/Footer';

const UserSignUp:React.FC = () => {
    // const [authenticated, setAuthenticated]
    const router = useRouter();
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    
    const [error, setError] = useState('');

    const [signUpForm, setSignUpForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
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
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const [
        userAuth,
    ] = useAuthState(auth);

    useEffect(() => {
        if (userAuth) {
            router.push('/dashboard');
        }
    }, [user]);
    
    return (
        <Flex direction="column" w="100%" mt={4}>
            <Flex justify="center" w="100%" h={['640px','640px','720px','720px']}>
                <Flex align="center" direction="column" w={['100%', '90%', '80%', '60%']} maxW="500px" h="620px" mt={[0,0,5,5]} bg="#0f0f0f" border="1px solid #494D51">
                    <Flex align="center" mt={5}>
                        <Text fontSize={['24pt', '24pt', '28pt', '28pt']} fontWeight={700}>Create an Account&nbsp;</Text>
                        <GiRollingBomb fontSize="28pt" />
                    </Flex>
                    <Text w={['90%', '90%', '65%', '65%']} mt={3} mb={1} color="#868686" fontFamily="AvenirNext-Regular" fontSize="13pt" lineHeight="19px" textAlign="center">Explore your Poker games and simulate your strategy through the power of data</Text>
                    <Flex direction="column" w={['90%', '90%', '65%', '65%']} mt={5} mr="auto" ml="auto">
                        <form onSubmit={onSubmit}>
                            <Text fontFamily="AvenirNext-Regular" fontWeight={600}>Email</Text>
                            <InputGroup w="100%">
                                <InputLeftElement
                                    pointerEvents='none'
                                >
                                    <Box mt={5}><MdAlternateEmail fontSize="14pt" color='#454545' /></Box>
                                </InputLeftElement>
                            
                                <Input h="45px" mt={2} mb="17px" color="white" fontFamily="AvenirNext-DemiBold" bg="#282828" border="none" borderRadius="0px" _placeholder={{color: 'white', fontFamily: 'AvenirNext-DemiBold'}} focusBorderColor='black' name="email" onChange={onChange} placeholder="" required type="email" />
                            </InputGroup>
                            <Text mt={-2} fontFamily="AvenirNext-Regular" fontWeight={600}>Password</Text>
                        
                            <InputGroup w="100%">
                                <InputLeftElement
                                    pointerEvents='none'
                                >
                                    <Box mt={4}><HiFingerPrint fontSize="14pt" color='#454545' /></Box>
                                </InputLeftElement>
                            
                                <Input h="45px" mt={2} color="white" fontFamily="AvenirNext-DemiBold" bg="#282828" border="none" borderRadius="0px" _placeholder={{color: 'white', fontFamily: 'AvenirNext-DemiBold'}} focusBorderColor='black' name="password" onChange={onChange} placeholder="" required type="password" />
                            </InputGroup>
                            <Text mt={3} fontFamily="AvenirNext-Regular" fontWeight={600}>Confirm Password</Text>
                            <InputGroup w="100%">
                                <InputLeftElement
                                    pointerEvents='none'
                                >
                                    <Box mt={4}><HiFingerPrint fontSize="14pt" color='#454545' /></Box>
                                </InputLeftElement>
                                <Input h="45px" mt={2} color="white" fontFamily="AvenirNext-DemiBold" bg="#282828" border="none" borderRadius="0px" _placeholder={{color: 'white', fontFamily: 'AvenirNext-DemiBold'}} focusBorderColor='black' name="confirmPassword" onChange={onChange} placeholder="" required type={show ? 'text' : 'password'} />
                                <InputRightElement w='3rem'>
                                    <IconButton mt={5} color='#454545' fontSize="16pt" bg="none" _hover={{bg: 'none'}} aria-label='see password' icon={show ? <AiFillEyeInvisible /> : <AiFillEye />} onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </IconButton>
                                </InputRightElement>
                            </InputGroup>
                            <Box h="17px">
                                <Text color="red.300" fontSize="10pt">{error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}</Text>
                            </Box>
                            {/* <Text fontSize="10pt" mt={2} fontFamily='AvenirNext-Regular'>Forget your <Text _hover={{cursor: 'pointer'}} textDecoration="underline" fontFamily='AvenirNext-DemiBold' as="span">password</Text> ?</Text> */}
                            <Button w="100%" h="48px" mt={3} color="black" bg="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)" border="none" borderRadius="0px" _hover={{color: 'white'}} isLoading={loading} type="submit">Create Account&nbsp;&nbsp;→</Button>
                            <Box w="100%" mt={5}>
                                <GoogleSignIn />
                            </Box>
                            <Text mt={5} fontFamily='AvenirNext-Regular' fontSize="10pt" textAlign="center">Already have an account? <Text as="span" color="purple.300" fontFamily='AvenirNext-DemiBold' textDecoration="underline" _hover={{cursor: 'pointer'}} onClick={() => router.push('/login')}>Login</Text></Text>
                        </form>
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    );
};
export default UserSignUp;