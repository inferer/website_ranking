

export interface UserState {
  userId: string,
  nftBaseInfo: {[key: string]: string}
  getUserID: (account: string) => void,
  register: (account: string) => void,
  collectNftColl: (account: {[key: string]: string}) => void,
}