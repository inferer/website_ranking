import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from '@/utils/web3React'
import ModalProvider from './ModalContext/Provider';

const Providers: React.FC<any> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ModalProvider>
        {children}
      </ModalProvider>
    </Web3ReactProvider>
  )
}

export default Providers