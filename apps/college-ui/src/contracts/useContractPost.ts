import { useCallback, useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { BrowserProvider, Contract, Eip1193Provider } from 'ethers';
import { YDC_Post } from '@/typechain-types';
import YDC_Post_JSON from '@/contracts/abi/YDC_Post.sol/YDC_Post.json';

const useContractPost = (postId: string) => {
  const { provider, account } = useWeb3React();
  const [loading, setLoading] = useState<boolean>(true);
  const [postList, setPostList] = useState<any>([]);

  const ethersProvider = new BrowserProvider(window.ethereum! as Eip1193Provider);

  const contract = useMemo(() => {
    if (!provider) return null;
    return new Contract(
      '0xa1d83b240c81f4C43679B7E7930d12d4A3FF441e',
      YDC_Post_JSON.abi,
      ethersProvider,
    ) as unknown as YDC_Post;
  }, [provider, account]);

  const updatePostList = useCallback(async (postId: string) => {
    if (contract && postId) {
      setLoading(true);
      try {
        const res = await contract.flow(postId, true);
        setPostList(res);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
  }, [contract, setPostList]);

  useEffect(() => {
    updatePostList(postId);
  }, [contract, postId]);

  return { loading, postList };
};

export default useContractPost;
