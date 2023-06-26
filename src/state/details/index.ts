import { fetcher } from '@/utils/axios'
import { create } from 'zustand'
import { RankingDetailsState } from './types'
import { ItopPriceCollItem } from '../ranking/types'
import { num2Month } from '@/utils'

const useDetailsStore = create<RankingDetailsState>()((set) => ({
  topPriceCollItem: {
    token_address: '',
    price: 0,
    price_rank: 0,
    series_img_url: '',
    series_name: '',
    series_creator: '',
    volumeMonthHistory: [],
    priceMonthHistory: [],
    infererAnalysis: {},
    volumeChartData: {},
    priceChartData: {},
    holderPrecent: {},
    infererLabels: []
  },

  updateTopPriceCollItem: async (data: ItopPriceCollItem) => {
    set({ topPriceCollItem: data })
  },

  getTopPriceCollItem: async (address: string) => {
    if (address) {
      const res = await fetcher('/api/web/ranking/getTopPriceCollDetails', { address })
      if (res.status === 200) {
        const item = res.data
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
        set({ topPriceCollItem: {
            ...item,
            volumeChartData: {
              xdata,
              volumeData,
              total: Number(total).toFixed(3)
            },
            priceChartData: {
              xdata: xdata2,
              volumeData: volumeData2,
              total: Number(total2).toFixed(3)
            }
        } })
      }
    }
    
  }


}))

export default useDetailsStore