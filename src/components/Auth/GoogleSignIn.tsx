import { Button } from '@chakra-ui/react';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';

const GoogleSignIn:React.FC = () => {

    const [
        signInWithGoogle,
        user,
        loading,
        error,
    ] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            router.push('/dashboard')
        }
    }, [user])

    return (
        <Button onClick={() => signInWithGoogle()} width="100%" _hover={{bg: '#1c1c1c'}} height="48px" bg="none" border="1px solid #494D51" borderRadius="0px">Continue with Google&nbsp;&nbsp;→</Button>
    )
}
export default GoogleSignIn;