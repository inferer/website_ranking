
export function formatAddress(address: string = '') {
  return address.slice(0, 4) + '...' + address.slice(-4)
}


export const formatName = (name: string) => {
  if (name.length <= 20) return name
  return name.slice(0, 12) + '...'
}

export function formatNumber(num: number) {
  return num >= 1e3 ? (num / 1e3).toFixed(1) + 'k' : num.toFixed(1)
}


export const numMonth: any = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
}

export function num2Month(num: string) {
  return numMonth[num]
}