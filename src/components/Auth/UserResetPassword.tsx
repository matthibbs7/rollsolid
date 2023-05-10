import React, { useState } from 'react';
import { Button, Text, Flex, Input, Box, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { GiRollingBomb } from 'react-icons/gi';
import { MdAlternateEmail } from 'react-icons/md';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';

import { FIREBASE_ERRORS } from '@/firebase/errors';

const UserResetPassword:React.FC = () => {
    const router = useRouter();

    const [resetPasswordForm, setResetPasswordForm] = useState({
        email: '',
    });
    
    const [
        sendPasswordResetEmail,
        loading,
        error,
    ] = useSendPasswordResetEmail(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendPasswordResetEmail(resetPasswordForm.email);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResetPasswordForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };
    
    return (
        <Flex justify="center" w="100%">
            <Flex align="center" direction="column" w={['100%', '90%', '80%', '60%']} maxW="500px" h="430px" mt={[1,1,5,5]} bg="#0f0f0f" border="1px solid #2F2F2F">
                <Flex align="center" direction="row" mt={8}>
                    <Text fontSize={['24pt', '24pt', '28pt', '28pt']} fontWeight={700}>Reset Password&nbsp;</Text>
                    <GiRollingBomb fontSize="28pt" />
                </Flex>
                <Text w={['90%', '90%', '75%', '75%']} mt={3} mb={1} color="#868686" fontFamily="AvenirNext-Regular" fontSize="13pt" lineHeight="19px" textAlign="center">Enter a valid e-mail to receive instructions on how to reset your password</Text>
                <Flex direction="column" w={['90%', '90%', '65%', '65%']} mt={5} mr="auto" ml="auto">
                    <form onSubmit={onSubmit}>
                        <Text fontWeight={600}>Email</Text>
                        <InputGroup w="100%">
                            <InputLeftElement
                                pointerEvents='none'
                            >
                                <Box mt={6}><MdAlternateEmail fontSize="16pt" color='#454545' /></Box>
                            </InputLeftElement>
                            <Input h="48px" mt={2} mb="17px" color="white" fontWeight={700} bg="#282828" border="none" borderRadius="5px" _placeholder={{color: 'white', fontFamily: 'AvenirNext-DemiBold'}} focusBorderColor='black' name="email" onChange={onChange} placeholder="" required type="email" />
                            
                        </InputGroup>
                        
                        <Box h="17px">
                            <Text color="red.300" fontSize="10pt">{FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}</Text>
                        </Box>
                        <Button w="100%" h="48px" mt={-2} color="black" bg="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)" border="none" borderRadius="0px" _hover={{color: 'white'}} isLoading={loading} type="submit">Reset Password&nbsp;&nbsp;→</Button>
                        <Text mt={2} fontSize="10pt">Back to <Text as="span" fontFamily='AvenirNext-DemiBold' textDecoration="underline" _hover={{cursor: 'pointer'}} onClick={() => router.push('/login')}>login</Text></Text>
                        <Text mt={5} fontSize="10pt" textAlign="center">New to Rollsolid? <Text as="span" fontFamily='AvenirNext-DemiBold' textDecoration="underline" _hover={{cursor: 'pointer'}} onClick={() => router.push('/signup')}>Sign Up</Text></Text>
                    </form>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default UserResetPassword;