import { Button } from '@chakra-ui/react';
import router from 'next/router';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';

const GoogleSignIn:React.FC = () => {

    const [
        signInWithGoogle,
        user,
    ] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            router.push('/dashboard');
        }
    }, [user]);

    return (
        <Button
            w="100%"
            h="48px"
            bg="none"
            border="1px solid #494D51"
            borderRadius="0px"
            _hover={{bg: '#1c1c1c'}}
            onClick={() => signInWithGoogle()}
        >
            Continue with Google&nbsp;&nbsp;→
        </Button>
    );
};
export default GoogleSignIn;