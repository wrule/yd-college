import { useCallback, useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { BrowserProvider, Contract, Eip1193Provider } from 'ethers';
import { YDC_Post } from '@/typechain-types';
import YDC_Post_JSON from '@/contracts/abi/YDC_Post.sol/YDC_Post.json';

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

const useContractPost = (initialPostId: string) => {
  const { provider, account } = useWeb3React();
  const [loading, setLoading] = useState<boolean>(true);
  const [postList, setPostList] = useState<IPost[]>([]);
  const [currentPostId, setCurrentPostId] = useState(initialPostId);

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
    return {
      postId: postArray[0].toString(),
      sender: postArray[1],
      content: postArray[2],
      likeCount: Number(postArray[3]),
      unlikeCount: Number(postArray[4]),
      createdAt: Number(postArray[5]),
      prev: postArray[6].toString(),
      next: postArray[7].toString(),
      commentHead: postArray[8].toString(),
      commentTail: postArray[9].toString(),
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

  const createPost = async (content: string, commentFor: string = "0") => {
    if (!contract || !account) return null;

    try {
      const signer = await ethersProvider.getSigner();
      const contractWithSigner = contract.connect(signer);

      // 发送交易
      const tx = await contractWithSigner.post(content, commentFor);

      // 等待交易确认
      const receipt = await tx.wait();

      // 从事件中获取新的 postId
      const postEvent = receipt.logs[0];  // 假设第一个事件是 Post 事件
      const postId = postEvent.topics[1];  // 假设 postId 在第二个 topic 中

      // 更新当前 postId 并刷新列表
      setCurrentPostId(postId);
      await updatePostList(postId);

      return tx;
    } catch (error) {
      console.error('Create post error:', error);
      throw error;
    }
  };

  useEffect(() => {
    updatePostList(currentPostId);
  }, [currentPostId, contract]);

  return {
    loading,
    postList,
    createPost,
    currentPostId  // 导出当前 postId
  };
};

export default useContractPost;
