import React from 'react';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import UserResetPassword from '@/components/Auth/UserResetPassword';

export default function ResetPassword() {
    return (
        <>
            <Head>
                <title>Rollsolid | Reset Password</title>
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
            <Flex
                px={4}
                py={4}
            >
                <UserResetPassword />
            </Flex>
        </>
    );
}
