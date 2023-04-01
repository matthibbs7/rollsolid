import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Flex, Text } from '@chakra-ui/react'
import Window from '../components/Window/Window'

import Draggable from 'react-draggable'
import { useState } from 'react'
import WindowDark from '@/components/Window/WindowDark'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [render, setRender] = useState(true);
  const [activeWindow, setActiveWindow] = useState(0)
  return (
    <>
      <Head>
        <title>Rollsolid</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex px={4} py={4}>
        <Window id={1} render={render} setRender={setRender}>
          <Text>Select the two cards that you were dealt to view probabilities</Text>
        </Window>
        {/* <WindowDark id={2} render={render} setRender={setRender}>
          <Text>Select the two cards that you were dealt to view probabilities</Text>
        </WindowDark> */}
      </Flex>
    </>
  )
}
