import { ITopPopularCollItem, ITopPopullarItem, ITopPriceItem, ItopPriceCollItem } from "../ranking/types";

export interface RankingDetailsState {
  topPriceCollItem: ItopPriceCollItem,

  updateTopPriceCollItem: (data: ItopPriceCollItem) => void,

  topPopullarCollItem: ITopPopularCollItem,
  updateTopPopullarCollItem: (data: ITopPopularCollItem) => void,

  topPriceItem: ITopPriceItem,
  updateTopPriceItem: (data: ITopPriceItem) => void,

  topPopullarItem: ITopPopullarItem,
  updateTopPopullarItem: (data: ITopPopullarItem) => void,
}