/* eslint-disable @typescript-eslint/no-explicit-any */
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
import { switchTheme } from './components/switch';
const styles = {
    fonts: {
        heading: '"Mulish", "Helvetica Neue", Arial, sans-serif',
        body: '"Mulish", "Helvetica Neue", Arial, sans-serif',
    },
    global: (props: any) => ({
        body: {
            color: mode('#F6F7F9', 'whiteAlpha.900')(props),
            bg: mode('#171717', 'red.300')(props),
            fontFamily: '\'Figtree\', "Helvetica Neue", Arial, sans-serif',
        },
    }),
};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const components = { Switch: switchTheme };

const colors = {
    primary: '#e29578',
};

const theme = extendTheme({ styles, colors, config, components });
export default theme;