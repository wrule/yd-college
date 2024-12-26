
import { ethers } from 'ethers';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { metaMaskHooks } from '@/connectors/metaMask';
import { BigNumber } from '@ethersproject/bignumber'

const { useProvider, useAccount, useIsActivating, useIsActive } = metaMaskHooks;

const useBalance = (address: string) => {
  const [balanceLoading, setBalanceLoading] = useState<boolean>(true);
  const [balance, setBalance] = useState<BigNumber | null>(null);
  const provider = useProvider();

  const balanceText = useMemo(() => {
    if (balance) {
      return Number(Number(ethers.utils.formatEther(balance.toBigInt())).toFixed(4)).toString();
    }
    return '';
  }, [balance]);

  const updateBalance = useCallback(async () => {
    setBalanceLoading(true);
    try {
      if (address && provider) {
        setBalance(await provider.getBalance(address));
      } else {
        setBalance(null);
      }
    } catch (error) {
      console.error(error);
    }
    setBalanceLoading(false);
  }, [address, provider, setBalanceLoading, setBalance]);

  useEffect(() => {
    updateBalance();
  }, [address, provider]);

  return { balance, balanceText, balanceLoading };
}

const useConnect = () => {
  const { connector } = useWeb3React();
  const account = useAccount();
  const isActive = useIsActive();
  const isActivating = useIsActivating();
  const { balance, balanceText, balanceLoading } = useBalance(account!);

  useEffect(() => {
    connector.connectEagerly?.();
  }, []);

  return {
    connector,
    isActive,
    isActivating,
    account,
    balance,
    balanceText,
    isLoading: isActivating || balanceLoading,
  };
};

export default useConnect;
