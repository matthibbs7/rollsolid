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
            router.push('/')
        }
    }, [user])

    return (
        <Button onClick={() => signInWithGoogle()} width="100%" _hover={{bg: '#282828'}} height="48px" bg="black" borderRadius="5px">Continue with Google&nbsp;&nbsp;→</Button>
    )
}
export default GoogleSignIn;