import { useCallback, useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { BrowserProvider, Contract, Eip1193Provider } from 'ethers';
import { YDC_Post } from '@/typechain-types';
import YDC_Post_JSON from '@/contracts/abi/YDC_Post.sol/YDC_Post.json';

// 定义合约返回的结构体数组中每个元素的类型
interface IPost {
  postId: string;
  sender: string;
  content: string;
  likeCount: number;
  unlikeCount: number;
  createdAt: number;
  prev: string;
  next: string;
  commentHead: string;
  commentTail: string;
}

const useContractPost = (postId: string) => {
  const { provider, account } = useWeb3React();
  const [loading, setLoading] = useState<boolean>(true);
  const [postList, setPostList] = useState<IPost[]>([]);

  const ethersProvider = new BrowserProvider(window.ethereum! as Eip1193Provider);

  const contract = useMemo(() => {
    if (!provider) return null;
    return new Contract(
      '0xa1d83b240c81f4C43679B7E7930d12d4A3FF441e',
      YDC_Post_JSON.abi,
      ethersProvider,
    ) as unknown as YDC_Post;
  }, [provider, account]);

  const convertToPost = (postArray: any[]): IPost => {
    // 按照合约结构体定义的顺序转换
    return {
      postId: postArray[0].toString(),        // uint256 postId
      sender: postArray[1],                   // address sender
      content: postArray[2],                  // string content
      likeCount: Number(postArray[3]),        // uint256 likeCount
      unlikeCount: Number(postArray[4]),      // uint256 unlikeCount
      createdAt: Number(postArray[5]),        // uint256 createdAt
      prev: postArray[6].toString(),          // uint256 prev
      next: postArray[7].toString(),          // uint256 next
      commentHead: postArray[8].toString(),   // uint256 commentHead
      commentTail: postArray[9].toString(),   // uint256 commentTail
    };
  };

  const updatePostList = useCallback(async (postId: string) => {
    if (contract && postId) {
      setLoading(true);
      try {
        const res = await contract.flow(postId, true);
        const formattedPosts = res.map((post: any[]) => convertToPost(post));
        setPostList(formattedPosts);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
  }, [contract]);

  useEffect(() => {
    updatePostList(postId);
  }, [contract, postId]);

  return { loading, postList };
};

export default useContractPost;
