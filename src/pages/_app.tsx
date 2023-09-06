import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../chakra/theme';
import Layout from '@/components/Layout/Layout';
import '@fontsource/figtree';
import '../../public/fonts/style.css';
import '../styles/global.css';
import {
    RecoilRoot,
} from 'recoil';
import '../styles/styles.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </RecoilRoot>
    );
}
