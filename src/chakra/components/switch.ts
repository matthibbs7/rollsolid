import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const boxy = definePartsStyle({
    container: {
        align: 'center',
    },
    thumb: {
        bg: '#323232',
        h: '14px'
    },
    track: {
        h: '14px',
        border: '1px solid #494D51',
        borderRadius: '0',
        bg: '#121212',
        _checked: {
            bg: '#1c1c1c'
        }
    }
});

export const switchTheme = defineMultiStyleConfig({ variants: { boxy }});