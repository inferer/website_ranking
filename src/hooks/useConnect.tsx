import WalletModal from "@/components/walletmodal/WalletModal"
import useModal from "./useModal"

export const useConnect = () => {
  const [ onPrresent, onDimiss ] = useModal(<WalletModal />)

  

  return {
    login: onPrresent,
    logout: onDimiss
  }
  

}