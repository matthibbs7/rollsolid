import React from 'react';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import UserLogin from '@/components/Auth/UserLogin';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp';
import router from 'next/router';

export default function Login() {
    const [user, loading, error] = useAuthState(auth);

    if (user) {
        router.push('/');
    }

    return (
        <>
            <Head>
                <title>Rollsolid | Login</title>
                <meta
                    name="description"
                    content="Advanced Poker strategy and analysis"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <Flex>
                {!loading && !error && <UserLogin />}
            </Flex>
        </>
    );
}
