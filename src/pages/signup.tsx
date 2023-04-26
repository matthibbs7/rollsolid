import React from 'react';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import UserSignUp from '@/components/Auth/UserSignUp';

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Rollsolid | Sign Up</title>
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
                <UserSignUp />
            </Flex>
        </>
    );
}
