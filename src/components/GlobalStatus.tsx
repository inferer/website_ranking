import useActiveWeb3React from "@/hooks/useActiveWeb3React"
import { useUserStore } from "@/state"
import { useEffect } from "react"

const GlobalStatus = () => {

  const { account } = useActiveWeb3React()
  const getUserID = useUserStore(state => state.getUserID)
  
  useEffect(() => {
    if (account) {
      getUserID(account)
    }
  }, [account, getUserID])

  return null
}

export default GlobalStatus