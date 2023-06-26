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

const useRankingStore = create<RankingState>()((set) => ({
  topPriceCollList: [],
  getTopPriceColl: async () => {
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
    const res = await fetcher('/api/web/ranking/getTopAccounts')
    if (res.status === 200) {
      const newData = (res.data || []).map((item: ITopAccountItem) => {
        let newItem = { ...item }
        if (item.analysisData && item.analysisData.info) {
          const firstTx = item.analysisData.info['User First Tx Timestamp'] || ''
          newItem.birth_on = firstTx.split(',')[0]
          const lastTx = item.analysisData.info['User Latest Tx Timestamp'] || ''
          newItem.active_since = lastTx.split(',')[0]
          newItem.tx_count = item.analysisData.info['User Total Tx Count'] || ''
          newItem.infer_score = levelInfo[item.analysisData.level?.toLowerCase()]
        }
        return newItem
      })
      set({ topAccountList: newData })
    }
  },
  topProfitRatiosList: [],
  getTopProfitRatios: async () => {
    const res = await fetcher('/api/web/ranking/getTopProfitRatios')
    if (res.status === 200) {
      const newData = (res.data || []).map((item: ITopProfitRatiosItem) => {
        let newItem = { ...item }
        if (item.analysisData && item.analysisData.info) {
          const firstTx = item.analysisData.info['User First Tx Timestamp'] || ''
          newItem.birth_on = firstTx.split(',')[0]
          const lastTx = item.analysisData.info['User Latest Tx Timestamp'] || ''
          newItem.active_since = lastTx.split(',')[0]
          newItem.tx_count = item.analysisData.info['User Total Tx Count'] || ''
          newItem.infer_score = levelInfo[item.analysisData.level?.toLowerCase()]
          newItem.NFT_counts = item.analysisData.info.nft_count || 0
        }
        return newItem
      })
      set({topProfitRatiosList: newData})
    }
  },
  topPriceItemList: [],
  getTopPrice: async () => {
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