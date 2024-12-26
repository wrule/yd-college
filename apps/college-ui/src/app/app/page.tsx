'use client';

import { Contract, ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';

const App = () => {
  const { provider, account } = useWeb3React();

  return (
    <div className="flex justify-center mt-[28vh]">
      你好，世界
    </div>
  );
};

export default App;
