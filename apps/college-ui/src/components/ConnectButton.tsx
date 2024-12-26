import useConnect from '@/hooks/useConnect';

const ConnectButton = () => {
  const connect = useConnect();

  return (
    <button className="px-6 py-[0.5rem] rounded-full bg-gray-800 text-white font-medium shadow-md
      hover:bg-gray-700 hover:shadow-lg hover:scale-105
      active:scale-95 active:bg-gray-900
      transition-all duration-200 ease-out"
      onClick={() => connect.connector.activate()}>
      Connect Wallet
    </button>
  );
};

export default ConnectButton;
