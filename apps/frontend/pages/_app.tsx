import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import GlobalStyle from 'ui/styles/global-styles';
import theme from 'ui/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyle /> <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
