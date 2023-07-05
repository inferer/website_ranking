import { fetcher } from '@/utils/axios'
import { create } from 'zustand'
import { ITopAccountItem, ITopPopullarItem, ITopPriceItem, ITopProfitRatiosItem, ItopPriceCollItem, RankingState } from './types'
import { num2Month } from '@/utils'


export const levelInfo = {
  'exceptional': 5.0,
  'very good': 4.0,
  'good': 3.0,
  'fair': 2.0,
  'poor': 1.0
} as any

const useRankingStore = create<RankingState>()((set, get) => ({
  topPriceCollList: [],
  getTopPriceColl: async () => {
    if (get().topPriceCollList.length > 0) {
      return
    }
    const res = await fetcher('/api/web/ranking/getTopPriceColl')
    if (res.status === 200) {
      const newData = (res.data || []).map((item: ItopPriceCollItem) => {
        const volumeMonthHistory = item.volumeMonthHistory
        const xdata: any[] = []
        const volumeData: any[] = []
        let total = 0
        if (volumeMonthHistory && volumeMonthHistory.length > 0) {
          volumeMonthHistory.forEach((element: any) => {
            xdata.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.volume).toFixed(1))
            volumeData.push(volume)
            total += volume
          });
          
        }
        const priceMonthHistory = item.priceMonthHistory
        const xdata2: any[] = []
        const volumeData2: any[] = []
        let total2 = 0
        if (priceMonthHistory && priceMonthHistory.length > 0) {
          priceMonthHistory.forEach((element: any) => {
            xdata2.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            volumeData2.push(volume)
            total2 += volume
          });
          
        }

        return {
          ...item,
          volumeChartData: {
            xdata,
            volumeData,
            total
          },
          priceChartData: {
            xdata: xdata2,
            volumeData: volumeData2,
            total: total2
          }
        }
      })
      
      set({topPriceCollList: newData})
    }
  },

  topPopularCollList: [],
  getTopPopularColl: async () => {
    if (get().topPopularCollList.length > 0) {
      return
    }
    const res = await fetcher('/api/web/ranking/getTopPopularColl')
    if (res.status === 200) {
      const newData = (res.data || []).map((item: ItopPriceCollItem) => {
        const volumeMonthHistory = item.volumeMonthHistory
        const xdata: any[] = []
        const volumeData: any[] = []
        let total = 0
        if (volumeMonthHistory && volumeMonthHistory.length > 0) {
          volumeMonthHistory.forEach((element: any) => {
            xdata.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.volume).toFixed(1))
            volumeData.push(volume)
            total += volume
          });
          
        }
        const priceMonthHistory = item.priceMonthHistory
        const xdata2: any[] = []
        const volumeData2: any[] = []
        let total2 = 0
        if (priceMonthHistory && priceMonthHistory.length > 0) {
          priceMonthHistory.forEach((element: any) => {
            xdata2.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            volumeData2.push(volume)
            total2 += volume
          });
          
        }

        return {
          ...item,
          volumeChartData: {
            xdata,
            volumeData,
            total
          },
          priceChartData: {
            xdata: xdata2,
            volumeData: volumeData2,
            total: total2
          }
        }
      })
      set({topPopularCollList: newData})
    }
  },
  topAccountList: [],
  getTopAccounts: async () => {
    if (get().topAccountList.length > 0) {
      return
    }
    const res = await fetcher('/api/web/ranking/getTopAccounts')
    if (res.status === 200) {
      set({ topAccountList: res.data || [] })
      // 异步获取分析相关数据
      const addressList = (res.data || []).map((item: { holder_address: any }) => item.holder_address)
      const res2 = await fetcher('/api/web/ranking/getTopAccountsAnalysisData', { addressList })
      if (res2.status === 200) {
        const newData = (res2.data || []).map((item: any, index: number) => {
          let newItem = { ...item }
          if (item.info) {
            const firstTx = item.info['User First Tx Timestamp'] || ''
            newItem.birth_on = firstTx.split(',')[0]
            const lastTx = item.info['User Latest Tx Timestamp'] || ''
            newItem.active_since = lastTx.split(',')[0]
            newItem.tx_count = item.info['User Total Tx Count'] || ''
            newItem.infer_score = levelInfo[item.level?.toLowerCase()]
          }
          return {...res.data[index], ...newItem, analysisData: item }
        })

        set({ topAccountList: newData })

      }

    }
  },
  topActiveUserList: [],
  getTopActiveUsers: async () => {
    if (get().topActiveUserList.length > 0) {
      return
    }
    const res = await fetcher('/api/web/ranking/getTopActiveUsers')
    if (res.status === 200) {
      set({ topActiveUserList: res.data || [] })
      // 异步获取分析相关数据
      const addressList = (res.data || []).map((item: { holder_address: any }) => item.holder_address)
      const res2 = await fetcher('/api/web/ranking/getTopAccountsAnalysisData', { addressList })
      if (res2.status === 200) {
        const newData = (res2.data || []).map((item: any, index: number) => {
          let newItem = { ...item }
          if (item.info) {
            const firstTx = item.info['User First Tx Timestamp'] || ''
            newItem.birth_on = firstTx.split(',')[0]
            const lastTx = item.info['User Latest Tx Timestamp'] || ''
            newItem.active_since = lastTx.split(',')[0]
            newItem.tx_count = item.info['User Total Tx Count'] || ''
            newItem.NFT_counts = item.info['nft_count'] || ''
            newItem.infer_score = levelInfo[item.level?.toLowerCase()]
          }
          return {...res.data[index], ...newItem, analysisData: item }
        })

        set({ topActiveUserList: newData })

      }

    }
  },
  topProfitRatiosList: [],
  getTopProfitRatios: async () => {
    if (get().topProfitRatiosList.length > 0) {
      return
    }
    const res = await fetcher('/api/web/ranking/getTopProfitRatios')
    if (res.status === 200) {
  
      set({topProfitRatiosList: res.data || []})

      // 异步获取分析相关数据
      const addressList = (res.data || []).map((item: { holder_address: any }) => item.holder_address)
      const res2 = await fetcher('/api/web/ranking/getTopAccountsAnalysisData', { addressList })
      if (res2.status === 200) {
        const newData = (res2.data || []).map((item: any, index: number) => {
          let newItem = { ...item }
          if (item.info) {
            const firstTx = item.info['User First Tx Timestamp'] || ''
            newItem.birth_on = firstTx.split(',')[0]
            const lastTx = item.info['User Latest Tx Timestamp'] || ''
            newItem.active_since = lastTx.split(',')[0]
            newItem.tx_count = item.info['User Total Tx Count'] || ''
            newItem.NFT_counts = item.info['nft_count'] || ''
            newItem.infer_score = levelInfo[item.level?.toLowerCase()]
          }
          return {...res.data[index], ...newItem, analysisData: item }
        })

        set({ topProfitRatiosList: newData })

      }
    }
  },
  topPriceItemList: [],
  getTopPrice: async () => {
    if (get().topPriceItemList.length > 0) {
      return
    }
    const res = await fetcher('/api/web/ranking/getTopPrice')
    if (res.status === 200) {
      const newData = (res.data || []).map((item: ITopPriceItem) => {
        const priceMonthHistory = item.priceMonthHistory
        const xdata2: any[] = []
        const volumeData2: any[] = []
        let total2 = 0
        if (priceMonthHistory && priceMonthHistory.length > 0) {
          priceMonthHistory.forEach((element: any) => {
            xdata2.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            volumeData2.push(volume)
            total2 += volume
          });
          
        }

        return {
          ...item,
          priceChartData: {
            xdata: xdata2,
            volumeData: volumeData2,
            total: total2
          }
        }
      })
      set({topPriceItemList: newData})
    }
  },
  topPopullarItemList: [],
  getTopPopular: async () => {
    if (get().topPopullarItemList.length > 0) {
      return
    }
    const res = await fetcher('/api/web/ranking/getTopPopular')
    if (res.status === 200) {
      const newData = (res.data || []).map((item: ITopPopullarItem) => {
        const priceMonthHistory = item.priceMonthHistory
        const xdata2: any[] = []
        const volumeData2: any[] = []
        let total2 = 0
        if (priceMonthHistory && priceMonthHistory.length > 0) {
          priceMonthHistory.forEach((element: any) => {
            xdata2.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            volumeData2.push(volume)
            total2 += volume
          });
          
        }

        return {
          ...item,
          priceChartData: {
            xdata: xdata2,
            volumeData: volumeData2,
            total: total2
          }
        }
      })
      set({topPopullarItemList: newData})
    }
  },
}))

export default useRankingStore