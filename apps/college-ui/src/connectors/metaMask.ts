import { MetaMask } from '@web3-react/metamask';
import { initializeConnector } from '@web3-react/core';

export const [metaMask, metaMaskHooks] = initializeConnector<MetaMask>((actions) => new MetaMask({
  actions,
  options: {
    mustBeMetaMask: true,
    silent: true,
    timeout: 30 * 1000,
  },
}));
