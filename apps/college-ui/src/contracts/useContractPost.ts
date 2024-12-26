import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Contract } from 'ethers';
import { YDC_Post } from '@/typechain-types';

const useContractPost = () => {
  const { provider, account } = useWeb3React();

  const contract = useMemo(() => {
    if (!provider) return null;
    return new Contract(
      '0xa1d83b240c81f4C43679B7E7930d12d4A3FF441e',
      null as any,
      provider.getSigner(account),
    );
  }, [provider, account]);
  return [];
};

export default useContractPost;
