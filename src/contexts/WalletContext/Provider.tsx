import React, { createContext, useState } from "react";
import WalletModal from '../../components/walletmodal/WalletModal'


type ToastSignature = () => void
export interface ToastContextApi {
  showWalletModal: ToastSignature
}

export const WalletContext = createContext<ToastContextApi | undefined>(undefined)


export const WalletProvider: React.FC<any> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const showWalletModal = () => {
    setOpen(true)
  }

  return (
    <WalletContext.Provider value={{ showWalletModal }}>
      <>
        {children} 
        <WalletModal
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    </WalletContext.Provider>
  )
}