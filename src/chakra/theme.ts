import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from "@chakra-ui/react";
const styles = {
  global: (props: any) => ({
    body: {
    //   fontFamily: 'body',
      color: mode('#F6F7F9', 'whiteAlpha.900')(props),
      bg: mode('#252A30', 'red.300')(props),
    //   lineHeight: 'base',
    },
    // '*::placeholder': {
    //   color: mode('gray.400', 'whiteAlpha.400')(props),
    // },
    // '*, *::before, &::after': {
    //   borderColor: mode('gray.200', 'whiteAlpha.300')(props),
    //   wordWrap: 'break-word',
    // },
  }),
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const colors = {
    primary: "#e29578",
};

const theme = extendTheme({ styles, colors, config });
export default theme;