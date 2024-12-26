// utils/format.ts
export const truncateAddress = (address: string, startLength = 6, endLength = 4) => {
  if (!address) return '';
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};

// utils/explorer.ts
export const getExplorerUrl = (chainId?: number, address?: string) => {
  const baseUrl = chainId === 1
    ? 'https://etherscan.io'
    : chainId === 5
    ? 'https://goerli.etherscan.io'
    : 'https://etherscan.io';

  return `${baseUrl}/address/${address}`;
};
