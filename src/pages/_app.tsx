import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../chakra/theme'
import { useState } from 'react'
import Layout from '@/components/Layout/Layout'
export default function App({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState('light')
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
