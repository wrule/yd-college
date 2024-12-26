'use client';

import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import { Connector } from '@web3-react/types';
import Header from '@/components/Header';
import { metaMask, metaMaskHooks } from '@/connectors/metaMask';

const connectors: [Connector, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
];

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Web3ReactProvider connectors={connectors}>
      <div>
        <Header />
        <div className="mt-16">{children}</div>
      </div>
    </Web3ReactProvider>
  );
}
