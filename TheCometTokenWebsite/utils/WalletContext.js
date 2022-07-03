import { createContext, useContext, useState } from 'react';

// The Context
const WalletContext = createContext();

// Template Provider
const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(''); // primary address
  const [dAppWallet, setDAppWallet] = useState({
    connected: false,
    addresses: [],
  }); // dApp only

  // Context values passed to consumer
  const value = {
    wallet, // <------ Expose Value to Consumer
    dAppWallet,
    setWallet, // <------ Expose Setter to Consumer
    setDAppWallet,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

// Template Consumer
const WalletConsumer = ({ children }) => {
  return (
    <WalletContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error('WalletConsumer must be used within WalletProvider');
        }
        return children(context);
      }}
    </WalletContext.Consumer>
  );
};

// useTemplate Hook
const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined)
    throw new Error('useWallet must be used within WalletProvider');
  return context;
};

export { WalletProvider, WalletConsumer, useWallet };
