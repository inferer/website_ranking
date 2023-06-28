import React, { useCallback, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import { ConnectorNames } from "@/utils/web3React";
import Modal from "../Modal";
import useActiveWeb3React from "@/hooks/useActiveWeb3React";

export type WalletModalProps = {
  onDismiss?: () => void
}

const ConnectItem: React.FC<{ children: React.ReactElement}> = ({ children }) => {
  return (
    <div className="h-[60px] bg-[#000000] rounded-[10px] w-full border border-[#000000] hover:bg-grad8">
      { children }
    </div>
  )
}

const WalletModal: React.FC<any> = ({ onDismiss }) => {
  const { login, logout } = useAuth()
  const { account } = useActiveWeb3React()

  const handleConnect = (type: ConnectorNames) => {
    login(type)
  }

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account])

  return (
    <Modal type="primary" title="Connect wallet" onDismiss={onDismiss}>
      <div className="flex flex-col px-[26px] py-[24px] justify-center space-y-[14px]">
        <div className="text-white ">
        By connecting a wallet, you agree to Terms of Service and Privacy Policy.
        </div>
        <ConnectItem >
          <div className="flex items-center cursor-pointer px-5 h-full"
              onClick={() => {
                handleConnect(ConnectorNames.Injected)
              }}
            >
            <div className="flex items-center justify-center text-lg ">
              <img src="/images/metamask.png" alt="" className="w-[40px] h-[40px]"/>
            </div>
            <div className="text-[20px] font-medium text-white ml-4">Metamask</div>
          </div>
        </ConnectItem>

        <ConnectItem >
          <div className="flex items-center cursor-pointer px-5 h-full"
              onClick={() => {
                handleConnect(ConnectorNames.WalletConnect)
              }}
            >
            <div className="flex items-center justify-center text-lg ">
              <img src="/images/walletconnect.png" alt="" className="w-[40px] h-[40px]"/>
            </div>
            <div className="text-[20px] font-medium text-white ml-4">Wallet Connect</div>
          </div>
          
        </ConnectItem>
      </div>
    </Modal>
  )
}

export default WalletModal
