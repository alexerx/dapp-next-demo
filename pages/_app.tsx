import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { WagmiConfig, createClient } from 'wagmi';
import { getDefaultProvider } from 'ethers';
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
