import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { Web3Provider } from '@ethersproject/providers'


export const RPC_URLS_ID = {
  '1': 'https://mainnet.infura.io/v3/',
  '3': 'https://ropsten.infura.io/v3/',
  '56': 'https://bsc-dataseed1.ninicoin.io',
  '137': 'https://polygon.llamarpc.com',
  '97': 'https://bsc-testnet.public.blastapi.io',
  '3448148188': 'https://nile.trongrid.io/jsonrpc',
  '728126428': 'https://api.trongrid.io/jsonrpc'
}

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  // Blocto = "blocto",
  // WalletLink = "coinbaseWallet",
}

const POLLING_INTERVAL = 12000

// const SUPPORTED_CHAIN_ID = [ CHAIN_ID ]
const SUPPORTED_CHAIN_ID = Object.keys(RPC_URLS_ID).map(key => Number(key))

export const injected = new InjectedConnector({ supportedChainIds: SUPPORTED_CHAIN_ID })
// export const injected = new InjectedConnector({})

const walletconnect = new WalletConnectConnector({
  qrcode: true,
  rpc: { 
    1: RPC_URLS_ID[1],
    3: RPC_URLS_ID[3],
    97: RPC_URLS_ID[97],
    56: RPC_URLS_ID[56],
    3448148188: RPC_URLS_ID[3448148188],
    728126428: RPC_URLS_ID[728126428],
  },
  // pollingInterval: POLLING_INTERVAL,
})

const bscConnector = new BscConnector({ supportedChainIds: SUPPORTED_CHAIN_ID })

export const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
} as const

export const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = POLLING_INTERVAL
  return library
}

