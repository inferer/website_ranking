import { fetcher } from '@/utils/axios'
import { create } from 'zustand'
import { RankingDetailsState } from './types'
import { ITopPopularCollItem, ITopPopullarItem, ITopPriceItem, ItopPriceCollItem } from '../ranking/types'
import { num2Month } from '@/utils'
import { levelInfo } from '../ranking'

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
    floorPriceChartData: {},
    medianPriceChartData: {},
    maxPriceChartData: {},
    holderPrecent: {},
    infererLabels: []
  },

  topPopullarCollItem: {
    token_address: '',
    transaction_num: 0,
    transaction_num_rank: 0,
    series_img_url: '',
    series_name: '',
    series_creator: '',
    volumeMonthHistory: [],
    priceMonthHistory: [],
    floorPriceChartData: {},
    medianPriceChartData: {},
    maxPriceChartData: {},
    infererAnalysis: {},
    volumeChartData: {},
    priceChartData: {}
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
          volumeMonthHistory.reverse().slice(-9).forEach((element: any) => {
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
          priceMonthHistory.slice(-9).forEach((element: any) => {
            xdata2.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            volumeData2.push(volume)
            total2 += volume
          });
          
        }
        const floorPriceMonthHistory = item.floorPriceMonthHistory
        const floorPiceXdata: any[] = []
        const floorPriceVolumeData: any[] = []
        let floorTotal = 0
        if (floorPriceMonthHistory && floorPriceMonthHistory.length > 0) {
          floorPriceMonthHistory.slice(-9).forEach((element: any) => {
            floorPiceXdata.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            floorPriceVolumeData.push(volume)
            floorTotal += volume
          });
        }
        const medianPriceMonthHistory = item.medianPriceMonthHistory
        const medianPiceXdata: any[] = []
        const medianPriceVolumeData: any[] = []
        let medianTotal = 0
        if (medianPriceMonthHistory && medianPriceMonthHistory.length > 0) {
          medianPriceMonthHistory.slice(-9).forEach((element: any) => {
            medianPiceXdata.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            medianPriceVolumeData.push(volume)
            medianTotal += volume
          });
        }
        const maxPriceMonthHistory = item.maxPriceMonthHistory
        const maxPiceXdata: any[] = []
        const maxPriceVolumeData: any[] = []
        let maxTotal = 0
        if (maxPriceMonthHistory && maxPriceMonthHistory.length > 0) {
          maxPriceMonthHistory.slice(-9).forEach((element: any) => {
            maxPiceXdata.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            maxPriceVolumeData.push(volume)
            maxTotal += volume
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
            },
            floorPriceChartData: {
              xdata: floorPiceXdata,
              volumeData: floorPriceVolumeData,
              total: Number(floorTotal).toFixed(3),
              lastPrice: floorPriceVolumeData[floorPriceVolumeData.length - 1]
            },
            medianPriceChartData: {
              xdata: medianPiceXdata,
              volumeData: medianPriceVolumeData,
              total: Number(medianTotal).toFixed(3),
              lastPrice: medianPriceVolumeData[medianPriceVolumeData.length - 1]
            },
            maxPriceChartData: {
              xdata: maxPiceXdata,
              volumeData: maxPriceVolumeData,
              total: Number(maxTotal).toFixed(3),
              lastPrice: maxPriceVolumeData[maxPriceVolumeData.length - 1]
            }
        } })
      }
    }
    
  },


  updateTopPopullarCollItem: async (data: ITopPopularCollItem) => {
    set({ topPopullarCollItem: data })
  },

  getTopPopullarCollItem: async (address: string) => {
    if (address) {
      const res = await fetcher('/api/web/ranking/getTopPopullarCollDetails', { address })
      if (res.status === 200) {
        const item = res.data
        const volumeMonthHistory = item.volumeMonthHistory
        const xdata: any[] = []
        const volumeData: any[] = []
        let total = 0
        if (volumeMonthHistory && volumeMonthHistory.length > 0) {
          volumeMonthHistory.reverse().slice(-9).forEach((element: any) => {
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
          priceMonthHistory.slice(-9).forEach((element: any) => {
            xdata2.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            volumeData2.push(volume)
            total2 += volume
          });
          
        }
        const floorPriceMonthHistory = item.floorPriceMonthHistory
        const floorPiceXdata: any[] = []
        const floorPriceVolumeData: any[] = []
        let floorTotal = 0
        if (floorPriceMonthHistory && floorPriceMonthHistory.length > 0) {
          floorPriceMonthHistory.slice(-9).forEach((element: any) => {
            floorPiceXdata.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            floorPriceVolumeData.push(volume)
            floorTotal += volume
          });
        }
        const medianPriceMonthHistory = item.medianPriceMonthHistory
        const medianPiceXdata: any[] = []
        const medianPriceVolumeData: any[] = []
        let medianTotal = 0
        if (medianPriceMonthHistory && medianPriceMonthHistory.length > 0) {
          medianPriceMonthHistory.slice(-9).forEach((element: any) => {
            medianPiceXdata.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            medianPriceVolumeData.push(volume)
            medianTotal += volume
          });
        }
        const maxPriceMonthHistory = item.maxPriceMonthHistory
        const maxPiceXdata: any[] = []
        const maxPriceVolumeData: any[] = []
        let maxTotal = 0
        if (maxPriceMonthHistory && maxPriceMonthHistory.length > 0) {
          maxPriceMonthHistory.slice(-9).forEach((element: any) => {
            maxPiceXdata.push(num2Month(element.transaction_month.slice(-2)))
            const volume = Number((element.price_avg).toFixed(1))
            maxPriceVolumeData.push(volume)
            maxTotal += volume
          });
        }
        set({ topPopullarCollItem: {
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
            },
            floorPriceChartData: {
              xdata: floorPiceXdata,
              volumeData: floorPriceVolumeData,
              total: Number(floorTotal).toFixed(3),
              lastPrice: floorPriceVolumeData[floorPriceVolumeData.length - 1]
            },
            medianPriceChartData: {
              xdata: medianPiceXdata,
              volumeData: medianPriceVolumeData,
              total: Number(medianTotal).toFixed(3),
              lastPrice: medianPriceVolumeData[medianPriceVolumeData.length - 1]
            },
            maxPriceChartData: {
              xdata: maxPiceXdata,
              volumeData: maxPriceVolumeData,
              total: Number(maxTotal).toFixed(3),
              lastPrice: maxPriceVolumeData[maxPriceVolumeData.length - 1]
            }
        } })
      }
    }
    
  },

  topPriceItem: {
    token_address: '',
    token_id: 0,
    USD_price: 0,
    NFT_rank: '',
    NFT_name: '',
    NFT_img_url: '',
    NFT_creator: '',
    NFT_series_name: '',
    NFT_series_img_url: '',
    priceMonthHistory: [],
    priceChartData: {},
    ownerInfo: {},
    analysisData: {},
    birth_on: '',
    active_since: '',
    tx_count: '',
    balance: '',
    infer_score: ''
  },
  
  updateTopPriceItem: async (data: ITopPriceItem) => {
    set({ topPriceItem: data })
  },
  getTopPriceItem: async (address: string, tokenId: string) => {
    const res = await fetcher('/api/web/ranking/getTopPriceDetails', { address, token_id: tokenId })
    if (res.status === 200) {
      const item = res.data
      
      const priceMonthHistory = item.priceMonthHistory
      const xdata2: any[] = []
      const volumeData2: any[] = []
      let total2 = 0
      console.log(priceMonthHistory)
      if (priceMonthHistory && priceMonthHistory.length > 0) {
        priceMonthHistory.forEach((element: any) => {
          xdata2.push(num2Month(element.transaction_month.slice(-2)))
          const volume = Number((element.price_avg).toFixed(1))
          volumeData2.push(volume)
          total2 += volume
        });
        
      }
      set({ topPriceItem: {
          ...item,
          priceChartData: {
            xdata: xdata2,
            volumeData: volumeData2,
            total: Number(total2).toFixed(3)
          }
      } })
      // 再异步获取inferer评分信息
      if (item.ownerInfo && item.ownerInfo.holder_address) {
        const res2 = await fetcher('/api/infer', { address: item.ownerInfo.holder_address })
        if (res2.status === 200) {
          const analysisData = res2.result || {}
          let newItem: any = {}
          if (analysisData.info) {
            const firstTx = analysisData.info['User First Tx Timestamp'] || ''
            newItem.birth_on = firstTx.split(',')[0]
            const lastTx = analysisData.info['User Latest Tx Timestamp'] || ''
            newItem.active_since = lastTx.split(',')[0]
            newItem.tx_count = analysisData.info['User Total Tx Count'] || ''
            newItem.balance = parseFloat(analysisData.info['Account Balance'] || '').toFixed(5)
            newItem.infer_score = levelInfo[analysisData.level?.toLowerCase()]
          }
          // res2.result
          set({ topPriceItem: {
            ...item,
            ...newItem,
            priceChartData: {
              xdata: xdata2,
              volumeData: volumeData2,
              total: Number(total2).toFixed(3)
            },
            analysisData: res2.result || {}
          } })
        }
      }
    }
  },
  topPopullarItem: {
    token_address: '',
    token_id: 0,
    nums: 0,
    popular_rank: '',
    NFT_name: '',
    NFT_img_url: '',
    NFT_creator: '',
    NFT_series_name: '',
    NFT_series_img_url: '',
    priceMonthHistory: [],
    priceChartData: {},
    ownerInfo: {},
    analysisData: {},
    birth_on: '--',
    active_since: '--',
    tx_count: '--',
    balance: '--',
    infer_score: '--'
  },
  updateTopPopullarItem: async (data: ITopPopullarItem) => {
    set({ topPopullarItem: data })
  },
  getTopPopullarItem: async (address: string, tokenId: string) => {
    const res = await fetcher('/api/web/ranking/getTopPopullarDetails', { address, token_id: tokenId })
    if (res.status === 200) {
      const item = res.data
      
      const priceMonthHistory = item.priceMonthHistory
      const xdata2: any[] = []
      const volumeData2: any[] = []
      let total2 = 0
      if (priceMonthHistory && priceMonthHistory.length > 0) {
        priceMonthHistory.slice(-12).forEach((element: any) => {
          xdata2.push(num2Month(element.transaction_month.slice(-2)))
          const volume = Number((element.price_avg).toFixed(1))
          volumeData2.push(volume)
          total2 += volume
        });
        
      }
      set({ topPopullarItem: {
          ...item,
          priceChartData: {
            xdata: xdata2,
            volumeData: volumeData2,
            total: Number(total2).toFixed(3)
          }
      } })
      // 再异步获取inferer评分信息
      if (item.ownerInfo && item.ownerInfo.holder_address) {
        const res2 = await fetcher('/api/infer', { address: item.ownerInfo.holder_address })
        if (res2.status === 200) {
          const analysisData = res2.result || {}
          let newItem: any = {}
          if (analysisData.info) {
            const firstTx = analysisData.info['User First Tx Timestamp'] || ''
            newItem.birth_on = firstTx.split(',')[0]
            const lastTx = analysisData.info['User Latest Tx Timestamp'] || ''
            newItem.active_since = lastTx.split(',')[0]
            newItem.tx_count = analysisData.info['User Total Tx Count'] || ''
            newItem.balance = parseFloat(analysisData.info['Account Balance'] || '').toFixed(5)
            newItem.infer_score = levelInfo[analysisData.level?.toLowerCase()]
          }
          // res2.result
          set({ topPopullarItem: {
            ...item,
            ...newItem,
            priceChartData: {
              xdata: xdata2,
              volumeData: volumeData2,
              total: Number(total2).toFixed(3)
            },
            analysisData: res2.result || {}
          } })
        }
      }
    }
  },
  // /api/web/ranking/getTopPriceDetails

}))

export default useDetailsStore