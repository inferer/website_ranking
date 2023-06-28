import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { StaticJsonRpcProvider } from '@ethersproject/providers'
import { RPC_URLS_ID } from '@/utils/web3React'

const RPC_URL = RPC_URLS_ID[1]

export const bscRpcProvider = new StaticJsonRpcProvider(RPC_URL)

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
  const { library, chainId, account, ...web3React } = useWeb3React()
  
  return { 
    library: library ?? bscRpcProvider, 
    chainId: chainId ?? 97, 
    account: account ?? '',
    ...web3React 
  }
}

export default useActiveWeb3React