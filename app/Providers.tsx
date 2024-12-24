'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  sepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const config = getDefaultConfig({
    appName: 'coinType-final',
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID || '',
    chains: [mainnet, polygon, optimism, arbitrum, sepolia],
    ssr: true,  
  });

  const queryClient = new QueryClient();

export const Providers = ({children}: ProvidersProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};