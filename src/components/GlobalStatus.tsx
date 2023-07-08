import useActiveWeb3React from "@/hooks/useActiveWeb3React"
import useAuth from "@/hooks/useAuth"
import { useUserStore } from "@/state"
import { useEffect } from "react"
import { connectorLocalStorageKey } from "./walletmodal/config"
import { ConnectorNames } from "./walletmodal/types"

const GlobalStatus = () => {
  const { login, logout } = useAuth()
  const { account } = useActiveWeb3React()
  const getUserID = useUserStore(state => state.getUserID)
  
  useEffect(() => {
    if (account) {
      getUserID(account)
    }
  }, [account, getUserID])

  useEffect(() => {
    setTimeout(() => {
      const connectorId = window?.localStorage?.getItem(connectorLocalStorageKey) as ConnectorNames
      connectorId && login(connectorId)
    }, 300)

  }, [login])

  return null
}

export default GlobalStatus