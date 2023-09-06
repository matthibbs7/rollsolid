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
            color: mode('#F6F7F9', '#F6F7F9')(props),
            bg: mode('#0E0E0E', '#0E0E0E')(props),
            fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
        },
    }),
};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const components = { 
    Button: {
        baseStyle: {
            color: 'white'
        },
        defaultProps: {
            // Then here we set the base variant as the default
            variant: 'base'
        }
    }, 
    Switch: switchTheme 
};

const colors = {
    primary: '#e29578',
};

const theme = extendTheme({ styles, colors, config, components });
export default theme;