import { ITopPopularCollItem, ItopPriceCollItem } from "../ranking/types";

export interface RankingDetailsState {
  topPriceCollItem: ItopPriceCollItem,

  updateTopPriceCollItem: (data: ItopPriceCollItem) => void
}