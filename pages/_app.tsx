import { ChakraProvider } from '@chakra-ui/react';
import { getDefaultProvider } from 'ethers';
import type { AppProps } from 'next/app';
import { createClient, WagmiConfig } from 'wagmi';
import '../styles/globals.css';
import { theme } from '../themes';

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
