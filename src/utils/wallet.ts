// Set of helper functions to facilitate wallet setup

import { ExternalProvider } from '@ethersproject/providers'

const NETWORK_CONFIG: any = {
  
}

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (chainId?: number, externalProvider?: ExternalProvider) => {
  // @ts-ignore
  const provider = externalProvider || window.ethereum
  if (!chainId || !NETWORK_CONFIG[chainId]) {
    console.error('Invalid chain id')
    return false
  }
  if (provider && provider.request) {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }]
      })
      return true
    } catch (switchError) {
      if ((switchError as any)?.code === 4902) {
        try {
          const chainData = NETWORK_CONFIG[chainId]
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: `0x${chainId.toString(16)}`,
                chainName: NETWORK_CONFIG[chainId].name,
                nativeCurrency: {
                  name: chainData.symbol ? chainData.symbol : 'BNB',
                  symbol: chainData.symbol ? chainData.symbol : 'BNB',
                  decimals: 18
                },
                rpcUrls: NETWORK_CONFIG[chainId].rpcUrls,
                blockExplorerUrls: [`${NETWORK_CONFIG[chainId].scanURL}/`]
              }
            ]
          })
          return true
        } catch (error) {
          console.error('Failed to setup the network in Metamask:', error)
          return false
        }
      }
      return false
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
    return false
  }
}

