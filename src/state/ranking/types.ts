
export interface ItopPriceCollItem {
  "token_address": string,
  "price": number,
  "price_rank": number,
  "series_img_url": string,
  "series_name": string,
  "series_creator": string,
  "volumeMonthHistory": {[key: string]: string}[],
  "priceMonthHistory": {[key: string]: string}[],
  "infererAnalysis": {[key: string]: string},
  "volumeChartData": {[key: string]: string},
  "priceChartData": {[key: string]: string},
  "holderPrecent": {[key: string]: string},
  "infererLabels": {[key: string]: string}[]
}

export interface ITopPopularCollItem {
  "token_address": string,
  "transaction_num": number,
  "transaction_num_rank": number,
  "series_img_url": string,
  "series_name": string,
  "series_creator": string,
  "volumeMonthHistory": {[key: string]: string}[],
  "priceMonthHistory": {[key: string]: string}[],
  "infererAnalysis": {[key: string]: string},
  "volumeChartData": {[key: string]: string},
  "priceChartData": {[key: string]: string},
}

export interface ITopAccountItem {
  "holder_address": string,
  "NFT_counts": number,
  "volume": number,
  "account_rank": number,
  "user_name": string,
  "img_url": string,
  "birth_on": string,
  "active_since": string,
  "tx_count": string,
  "infer_score": string,
  "analysisData": {[key: string]: any}
}

export interface ITopActiveUserItem {
  "holder_address": string,
  "NFT_counts": number,
  "transaction_num": number,
  "account_rank": number,
  "user_name": string,
  "img_url": string,
  "birth_on": string,
  "active_since": string,
  "tx_count": string,
  "infer_score": string,
  "analysisData": {[key: string]: any}
}

export interface ITopProfitRatiosItem {
  "holder_address": string,
  "buy_price": number,
  "sell_price": number,
  "wealth_appreciation": number,
  "account_appreciation_rank": number,
  "user_name": string,
  "img_url": string,
  "NFT_counts": number,
  "birth_on": string,
  "active_since": string,
  "tx_count": string,
  "infer_score": string,
  "analysisData": {[key: string]: any}
}

export interface ITopPriceItem {
  "token_address": string,
  "token_id": number,
  "USD_price": number,
  "NFT_rank": string,
  "NFT_name": string,
  "NFT_img_url": string,
  "NFT_creator": string,
  "NFT_series_name": string,
  "NFT_series_img_url": string,
  "priceMonthHistory": {[key: string]: string}[],
  "priceChartData": {[key: string]: string},
  "ownerInfo": {[key: string]: string},
  "analysisData": {[key: string]: string},
  "birth_on": string,
  "active_since": string,
  "tx_count": string,
  "balance": string,
  "infer_score": string,
}

export interface ITopPopullarItem {
  "token_address": string,
  "token_id": number,
  "nums": number,
  "popular_rank": string,
  "NFT_name": string,
  "NFT_img_url": string,
  "NFT_creator": string,
  "NFT_series_name": string,
  "NFT_series_img_url": string,
  "priceMonthHistory": {[key: string]: string}[],
  "priceChartData": {[key: string]: string},
  "ownerInfo": {[key: string]: string},
  "analysisData": {[key: string]: string},
  "birth_on": string,
  "active_since": string,
  "tx_count": string,
  "balance": string,
  "infer_score": string,
}



export interface RankingState {
  topPriceCollList: ItopPriceCollItem[],
  topPopularCollList: ITopPopularCollItem[] ,
  topAccountList: ITopAccountItem[],
  topActiveUserList: ITopActiveUserItem[],
  topProfitRatiosList: ITopProfitRatiosItem[],
  topPriceItemList: ITopPriceItem[],
  topPopullarItemList: ITopPopullarItem[],
  getTopPriceColl: () => void,
  getTopPopularColl: () => void,
  getTopAccounts: () => void,
  getTopActiveUsers: () => void,
  getTopProfitRatios: () => void,
  getTopPrice: () => void,
}

