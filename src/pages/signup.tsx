import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import UserSignUp from '@/components/Auth/UserSignUp'

const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
  const [render, setRender] = useState(true);
  return (
    <>
      <Head>
        <title>Rollsolid | Sign Up</title>
        <meta name="description" content="Advanced Poker strategy and analysis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <UserSignUp />
      </Flex>
    </>
  )
}
