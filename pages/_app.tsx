import { ChakraProvider } from '@chakra-ui/react';
import { getDefaultProvider } from 'ethers';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import {
  configureChains,
  createClient,
  defaultChains,
  WagmiConfig,
} from 'wagmi';
import '../styles/globals.css';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { theme } from '../themes';
import { Layout } from '../modules/common/layouts/Layout';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  // alchemyProvider({ alchemyId }),
  publicProvider(),
]);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
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
