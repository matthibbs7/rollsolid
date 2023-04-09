import { Flex, ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../chakra/theme'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Flex direction="column">
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </Flex>
      </body>
    </Html>
  )
}
