import RankWrap from './RankWrap';
import RankTitle from './RankTitle';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from './Table';
import LazyImage from '../../../components/LazyImage';
import { LineChartS } from './LineChart';
import { useRankingStore } from '@/state'
import { useEffect } from 'react';
import { formatName, formatNumber } from '@/utils';

const TopPopullar = () => {
  const getTopPopular = useRankingStore(state => state.getTopPopular)
  const topPopullarItemList = useRankingStore(state => state.topPopullarItemList)

  useEffect(() => {
    getTopPopular()
  }, [])

  return (
    <RankWrap>
      <img src='/ranking/circle9.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <RankTitle>Top Popular Avatar</RankTitle>
      <Table>
        <TableHead>
          <TableHeadCell className="flex-1"><div className='pl-[36px]'>Avatar</div></TableHeadCell>
          <TableHeadCell className="w-[170px] pl-[26px]">Price Trend</TableHeadCell>
          <TableHeadCell className="w-[122px] justify-end">Transfers</TableHeadCell>
        </TableHead>
        <TableBody>
          {
            topPopullarItemList.map((item, key) => {
              return <TableRow key={key}>
                      <TableCell className="flex-1">
                        <div className=' font-dbold text-base italic w-9'>{key + 1}</div>
                        <div className='w-[30px] h-[40px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src={item.NFT_img_url || item.NFT_series_img_url || "/ranking/demo.png"} className=" shrink-0" />
                        </div>
                        <div>{formatName(item.NFT_name || item.NFT_series_name)}</div>
                      </TableCell>
                      <TableCell className="w-[170px]">
                        <div className='w-[170px]'>
                          <LineChartS 
                            id={"topppopullarrice" + key}
                            lineColor="#FF532E"
                            lineData={item.priceChartData.volumeData} 
                          />
                        </div>  
                      </TableCell>
                      <TableCell className="w-[122px] justify-end">
                        <div className=' text-[20px] num-text4'>{Number(item.nums)}</div>
                      </TableCell>
                    </TableRow>
            })
          }
          
        </TableBody>
      </Table>
    </RankWrap>
  )
}

export default TopPopullar