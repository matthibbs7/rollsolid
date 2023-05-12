import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, Input, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { GiRollingBomb } from 'react-icons/gi';
import GoogleSignIn from './GoogleSignIn';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/errors';
import Footer from '../Footer/Footer';

const UserLogin:React.FC = () => {
    const router = useRouter();

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        userAuth,
        authLoading,
    ] = useAuthState(auth);

    useEffect(() => {
        if (userAuth) {
            router.push('/dashboard');
        }
    }, [user]);

    if (userAuth || authLoading) {
        return (
            <></>
        );
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(loginForm);
        signInWithEmailAndPassword(loginForm.email, loginForm.password);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };
    
    return (
        <Flex direction="column" w="100%" mt={4}>
            <Flex justify="center" w="100%" h={['640px','640px','720px','720px']}>
                <Flex align="center" direction="column" w={['100%', '90%', '80%', '60%']} maxW="500px" h="620px" mt={[0,0,5,5]} bg="#121212" border="1px solid #2F2F2F">
                    <Flex align="center" direction="row" mt={9}>
                        <Text fontFamily='TWKEverett-Regular' fontSize={['24pt', '24pt', '28pt', '28pt']} fontWeight='600'>Login to Rollsolid&nbsp;</Text>
                        
                        {/* <1Text fontSize="28pt" fontWeight={700} fontFamily="AvenirNext-DemiBold">&nbsp;Rollsolid</Text> */}
                        <GiRollingBomb fontSize="28pt" />
                    </Flex>
                    <Text w={['90%', '90%', '70%', '69%']} mt={3} mb={1} color="#868686" fontSize="12pt" lineHeight="19px" textAlign="center">Explore your Poker games and simulate your strategy through the power of data</Text>
                    <Flex direction="column" w={['90%', '90%', '65%', '65%']} mt={5} mr="auto" ml="auto">
                        <form onSubmit={onSubmit}>
                            <Text fontWeight={500}>Username</Text>
                            
                            <Input h="45px" mt={2} mb="17px" color="white" fontWeight={600} bg="#202020" border="none" borderRadius="0px" _placeholder={{color: 'white'}} focusBorderColor='black' name="email" onChange={onChange} placeholder="" required type="email" />
                        
                            <Text fontWeight={500}>Password</Text>
                                
                            <Input h="45px" mt={2} color="white" fontFamily='Inter' fontSize='13.5pt' fontWeight={800} bg="#202020" border="none" borderRadius="0px" _placeholder={{color: 'white'}} focusBorderColor='black' name="password" onChange={onChange} placeholder="" required type="password" />
                            
                            <Text mt={2} fontSize="10pt">Forget your <Text as="span" color="white" fontWeight={600} textDecoration="underline" _hover={{cursor: 'pointer'}} onClick={() => router.push('/reset-password')}>password</Text> ?</Text>
                            <Box h="17px">
                                <Text color="red.300" fontSize="10pt">{FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}</Text>
                            </Box>
                            <Button w="100%" h="48px" mt={6} color="black" bg="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)" border="1px solid #494D51" borderRadius="0px" _hover={{color: 'white'}} isLoading={loading} type="submit">Login to Your Account&nbsp;&nbsp;→</Button>
                            <Box w="100%" mt={5}>
                                <GoogleSignIn />
                            </Box>
                            <Text mt={5} fontSize="10pt" textAlign="center">New to Rollsolid? <Text as="span" color="purple.300" fontWeight={700} textDecoration="underline" _hover={{cursor: 'pointer'}} onClick={() => router.push('/signup')}>Sign Up</Text></Text>
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
    );
};
export default UserLogin;