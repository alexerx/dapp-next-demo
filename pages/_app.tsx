import { ChakraProvider } from '@chakra-ui/react';
import { getDefaultProvider } from 'ethers';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { createClient, WagmiConfig } from 'wagmi';
import { Layout } from '../modules/common/layouts/Layout';
import '../styles/globals.css';
import { theme } from '../themes';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        {getLayout(<Component {...pageProps} />)}
      </WagmiConfig>
    </ChakraProvider>
  );
};

export default MyApp;
