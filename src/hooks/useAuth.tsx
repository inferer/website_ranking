import { useCallback, useEffect } from 'react'
// @ts-ignore
import { UnsupportedChainIdError } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { ConnectorNames } from '../components/walletmodal/types'
import { connectorLocalStorageKey } from '../components/walletmodal/config'
import { connectorsByName } from '../utils/web3React'
import { setupNetwork } from '../utils/wallet'
import useActiveWeb3React from './useActiveWeb3React'

export const CHAIN_ID = 56

const useAuth = () => {
  const { chainId, activate, deactivate, setError, account, library } = useActiveWeb3React()
  // const { toastError } = useToast()

  const login = useCallback(
    async (connectorID: ConnectorNames) => {
      const connectorOrGetConnector = connectorsByName[connectorID]
      window?.localStorage?.setItem(connectorLocalStorageKey, connectorID)
      const connector = connectorOrGetConnector
      if (typeof connector !== 'function' && connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            setError(error)
            const provider = await connector.getProvider()
            const hasSetup = await setupNetwork(CHAIN_ID, provider)
            if (hasSetup) {
              activate(connector)
            }
          } else {
            window?.localStorage?.removeItem(connectorLocalStorageKey)
            if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
              // toastError()
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector
                walletConnector.walletConnectProvider = undefined
              }
              // toastError(t('Authorization Error'), t('Please authorize to access your account'))
            } else {
              // toastError(error.name, error.message)
            }
          }
        })
      } else {
        window?.localStorage?.removeItem(connectorLocalStorageKey)
        // toastError(t('Unable to find connector'), t('The connector config is wrong'))
      }
    },
    [activate, setError],
  )

  const logout = useCallback(() => {
    deactivate()
  }, [deactivate])



  return { login, logout }
}

export default useAuth
