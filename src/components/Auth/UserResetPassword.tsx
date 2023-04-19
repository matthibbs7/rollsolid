import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, useColorMode, Input, Box, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { HiFingerPrint } from 'react-icons/hi';
import { GiRollingBomb } from 'react-icons/gi';
import { MdAlternateEmail } from 'react-icons/md';
import GoogleSignIn from './GoogleSignIn';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/errors';

const UserResetPassword:React.FC = () => {
    // const [authenticated, setAuthenticated]
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#282828' : 'white';

    const [resetPasswordForm, setResetPasswordForm] = useState({
        email: '',
    })
    
    const [
        sendPasswordResetEmail,
        loading,
        error,
    ] = useSendPasswordResetEmail(auth)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendPasswordResetEmail(resetPasswordForm.email);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResetPasswordForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    
    return (
        <Flex justifyContent="center" width="100%">
            <Flex bg="#121212" border="1px solid black" flexDir="column" mt={[1,1,5,5]} width={['100%', '90%', '80%', '60%']} maxWidth="500px" height="430px" align="center">
                <Flex align="center" mt={8} direction="row">
                    <Text fontSize={["24pt", "24pt", "28pt", "28pt"]} fontWeight={700} fontFamily="AvenirNext-DemiBold">Reset Password&nbsp;</Text>
                    
                    {/* <Text fontSize="28pt" fontWeight={700} fontFamily="AvenirNext-DemiBold">&nbsp;Rollsolid</Text> */}
                    <GiRollingBomb fontSize="28pt" />
                </Flex>
                <Text lineHeight="19px" width={["90%", "90%", "75%", "75%"]} textAlign="center" mt={3} mb={1} fontSize="13pt" fontFamily="AvenirNext-Regular" color="#868686">Enter a valid e-mail to receive instructions on how to reset your password</Text>
                <Flex mt={5} ml="auto" mr="auto" width={["90%", "90%", "65%", "65%"]} direction="column">
                    <form onSubmit={onSubmit}>
                        <Text fontWeight={600} fontFamily="AvenirNext-Regular">Email</Text>
                        <InputGroup width="100%">
                            <InputLeftElement
                                pointerEvents='none'
                            >
                                <Box mt={6}><MdAlternateEmail fontSize="16pt" color='#454545' /></Box>
                            </InputLeftElement>
                            <Input required name="email" type="email" onChange={onChange} border="none" _placeholder={{color: 'white', fontFamily: 'AvenirNext-DemiBold'}} placeholder="" height="48px" focusBorderColor='black' fontFamily="AvenirNext-DemiBold" borderRadius="5px" bg="#282828" mt={2} color="white" mb="17px" />
                            
                        </InputGroup>
                        
                        <Box height="17px">
                            <Text fontSize="10pt" color="red.300">{FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}</Text>
                        </Box>
                        <Button isLoading={loading} width="100%" type="submit" _hover={{color: 'white'}} border="none" height="48px" bg="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)" borderRadius="0px" mt={-2} color="black">Reset Password&nbsp;&nbsp;→</Button>
                        <Text fontSize="10pt" mt={2} fontFamily='AvenirNext-Regular'>Back to <Text onClick={() => router.push('/login')} _hover={{cursor: 'pointer'}} textDecoration="underline" fontFamily='AvenirNext-DemiBold' as="span">login</Text></Text>
                        <Text textAlign="center" fontSize="10pt" mt={5} fontFamily='AvenirNext-Regular'>New to Rollsolid? <Text onClick={() => router.push('/signup')} _hover={{cursor: 'pointer'}} textDecoration="underline" fontFamily='AvenirNext-DemiBold' as="span">Sign Up</Text></Text>
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
    )
}
export default UserResetPassword;