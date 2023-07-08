import RankWrap from './RankWrap';
import RankTitle from './RankTitle';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from './Table';
import LazyImage from '../../../components/LazyImage';
import { LineChartS } from './LineChart';
import { useRankingStore, useDetailsStore } from '@/state'
import { useEffect, useMemo } from 'react';
import { formatName, formatNumber } from '@/utils';
import { useRouter } from 'next/router';

const TopPriceColl = () => {
  const router = useRouter()

  const getTopPriceColl = useRankingStore(state => state.getTopPriceColl)
  const topPriceCollList = useRankingStore(state => state.topPriceCollList)

  const updateTopPriceCollItem = useDetailsStore(state => state.updateTopPriceCollItem)

  useEffect(() => {
    // if (router.query && router.query.ranking === 'price-collection') {
    //   getTopPriceColl(50)
    // } 
    // if (router.pathname === '/') {
    //   getTopPriceColl(7)
    // }
    getTopPriceColl(50)
  }, [])

  const filterList = useMemo(() => {
    if (router.query && router.query.ranking === 'price-collection') {
      return topPriceCollList
    } else {
      return topPriceCollList.slice(0, 7)
    }
  }, [router, topPriceCollList])

  return (
    <RankWrap>
      <img src='/ranking/circle4.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      {
        router.pathname === '/' ?
          <RankTitle>
            <div className='flex justify-between items-center'>
              Top Price Avatar Collections 
              <span className='text-[#357AFF] text-[20px] cursor-pointer'
                onClick={e => {
                  e.stopPropagation()
                  router.push({ pathname: '/top50/price-collection'})
                }}
              >More</span>
            </div> 
          </RankTitle> : <div className='h-3'></div>
      }
      
      <Table>
        <TableHead>
          <TableHeadCell className="flex-1"><div className='pl-[36px]'>NFT Collection</div></TableHeadCell>
          <TableHeadCell className="w-[148px] ">Artist</TableHeadCell>
          <TableHeadCell className="w-[140px] justify-center">Inferer Score</TableHeadCell>
          <TableHeadCell className="w-[208px] justify-end">Volumn </TableHeadCell>
          <TableHeadCell className="w-[208px] justify-end">Price Trend</TableHeadCell>
          <TableHeadCell className="w-[151px] justify-end">Price</TableHeadCell>
        </TableHead>
        <TableBody>
          {
            filterList.map((item, key) => {
              return <TableRow key={key}
                        onClick={() => {
                          updateTopPriceCollItem(item)
                          router.push({ pathname: `/top-price-collection/${item.token_address}`})
                        }}
                      >
                      <TableCell className="flex-1">
                        <div className=' font-dbold text-base italic w-9'>{key + 1}</div>
                        <div className='w-[30px] h-[40px] mr-2 shrink-0 flex items-center justify-center relative img-wrap '>
                          <LazyImage src={item.series_img_url || "/ranking/demo.png"} className="" />
                        </div>
                        <div>{formatName(item.series_name)}</div>
                      </TableCell>
                      <TableCell className="w-[148px] ">{formatName(item.series_creator)}</TableCell>
                      <TableCell className="w-[140px] justify-center">
                        <div className=' num-text1 text-[20px]'>{item.infererAnalysis.score_avg}</div>
                      </TableCell>
                      <TableCell className="w-[208px] justify-end">
                        <div className='w-[130px]'>
                          <LineChartS 
                            id={"toppricecollvolumn" + key}
                            lineData={item.volumeChartData.volumeData} 
                          />
                        </div>  
                      </TableCell>
                      <TableCell className="w-[208px] justify-end">
                        <div className='w-[130px]'>
                          <LineChartS 
                            id={"toppricecollprice" + key}
                            lineColor="#FF532E"
                            lineData={item.priceChartData.volumeData} 
                          />
                        </div>  
                      </TableCell>
                      <TableCell className="w-[151px] justify-end">
                        <img src='/ranking/eth.png' className='w-5 h-5 mr-1' />
                        <div className=' text-[20px]'>{formatNumber(Number(item.price))}</div>
                      </TableCell>
                    </TableRow>
            })
          }
          
        </TableBody>
      </Table>
    </RankWrap>
  )
}

export default TopPriceColl