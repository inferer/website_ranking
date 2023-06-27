import RankWrap from './RankWrap';
import RankTitle from './RankTitle';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from './Table';
import LazyImage from '../../../components/LazyImage';
import { LineChartS } from './LineChart';
import { useRankingStore, useDetailsStore } from '@/state'
import { useEffect } from 'react';
import { formatName, formatNumber } from '@/utils';
import { useRouter } from 'next/router';

const TopPopullarColl = () => {
  const router = useRouter()
  const getTopPopularColl = useRankingStore(state => state.getTopPopularColl)
  const topPopularCollList = useRankingStore(state => state.topPopularCollList)
  const updateTopPopullarCollItem = useDetailsStore(state => state.updateTopPopullarCollItem)

  useEffect(() => {
    getTopPopularColl()
  }, [])

  return (
    <RankWrap>
      <img src='/ranking/circle5.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <RankTitle>Top Popular Avatar Collections</RankTitle>
      <Table>
        <TableHead>
          <TableHeadCell className="flex-1"><div className='pl-[36px]'>NFT Collection</div></TableHeadCell>
          <TableHeadCell className="w-[148px] ">Artist</TableHeadCell>
          <TableHeadCell className="w-[140px] justify-center">Inferer Score</TableHeadCell>
          <TableHeadCell className="w-[208px] justify-end">Volumn </TableHeadCell>
          <TableHeadCell className="w-[208px] justify-end">Price Trend</TableHeadCell>
          <TableHeadCell className="w-[151px] justify-end">Transfers</TableHeadCell>
        </TableHead>
        <TableBody>
          {
            topPopularCollList.map((item, key) => {
              return <TableRow key={key}
                        onClick={() => {
                          updateTopPopullarCollItem(item)
                          router.push({ pathname: `/top-popullar-collection/${item.token_address}`})
                        }}
                      >
                      <TableCell className="flex-1">
                        <div className=' font-dbold text-base italic w-9'>{key + 1}</div>
                        <LazyImage src={item.series_img_url || "/ranking/demo.png"} className="w-[30px] h-[40px] mr-2 shrink-0" />
                        <div>{formatName(item.series_name)}</div>
                      </TableCell>
                      <TableCell className="w-[148px] ">{formatName(item.series_creator)}</TableCell>
                      <TableCell className="w-[140px] justify-center">
                        <div className=' menu-text text-[20px]'>{item.infererAnalysis.score_avg}</div>
                      </TableCell>
                      <TableCell className="w-[208px] justify-end">
                        <div className='w-[130px]'>
                          <LineChartS 
                            id={"toppopullarcollvolumn" + key}
                            lineData={item.volumeChartData.volumeData} 
                          />
                        </div>  
                      </TableCell>
                      <TableCell className="w-[208px] justify-end">
                        <div className='w-[130px]'>
                          <LineChartS 
                            id={"toppopullarcollprice" + key}
                            lineColor="#FF532E"
                            lineData={item.priceChartData.volumeData} 
                          />
                        </div>  
                      </TableCell>
                      <TableCell className="w-[151px] justify-end">
                        <div className='num-text2 text-[20px]'>{item.transaction_num}</div>
                      </TableCell>
                    </TableRow>
            })
          }
          
        </TableBody>
      </Table>
    </RankWrap>
  )
}

export default TopPopullarColl