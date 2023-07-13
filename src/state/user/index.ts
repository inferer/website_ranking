import { fetcher, poster } from '@/utils/axios'
import { create } from 'zustand'
import { UserState } from './types'

const useUserStore = create<UserState>()((set, get) => ({
  userId: '',
  nftBaseInfo: {},
  register: async (account: string) => {
    const res = await poster(`/plugin/register`, {chrome_id: account})
    if (res.status === 200 && res.result && res.result.user_id) {
      set({ userId: res.result.user_id })
    }
  },
  getUserID: async (account: string) => {
    const res = await fetcher('/plugin/getUserID', { chrome_id: account })

    if (res.status === 200 && res.result && res.result.user_id) {
      set({ userId: res.result.user_id })
    } else {
      get().register(account)
    }
  },
  getNFTCollBaseInfo: async (token_id: number, nft_address: string, userid: number) => {
    const res = await fetcher('/api/trends/getNFTBaseInfo', {token_id, nft_address, userid, chainid: 1 })
    if (res.status === 200) {
      set({nftBaseInfo: res.data || {}})
    }
  },
  collectNftColl: async (data) => {
    console.log(data)
    const userId = get().userId
    const res = await poster(`/api/trends/collectNft`, { ...data, userid: userId })
    return res
  }
  
}))

export default useUserStore