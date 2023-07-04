import RankWrap from './RankWrap';
import RankTitle from './RankTitle';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from './Table';
import LazyImage from '../../../components/LazyImage';
import { useRankingStore } from '@/state'
import { useEffect } from 'react';
import { formatName, formatNumber, formatAddress } from '@/utils';

const TopProfitRatios = () => {

  const getTopProfitRatios = useRankingStore(state => state.getTopProfitRatios)
  const topProfitRatiosList = useRankingStore(state => state.topProfitRatiosList)

  useEffect(() => {
    getTopProfitRatios()
  }, [])

  return (
    <RankWrap>
      <img src='/ranking/circle7.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <RankTitle>Top Profit Ratios</RankTitle>
      <Table>
        <TableHead>
          <TableHeadCell className="flex-1"><div className='pl-[36px]'>Address</div></TableHeadCell>
          <TableHeadCell className="w-[189px] ">Reddit Avatars</TableHeadCell>
          <TableHeadCell className="w-[156px]">Birth On</TableHeadCell>
          <TableHeadCell className="w-[156px]">Active Since</TableHeadCell>
          <TableHeadCell className="w-[133px] justify-center">Tx Count</TableHeadCell>
          <TableHeadCell className="w-[133px] justify-center">Inferer Score</TableHeadCell>
          <TableHeadCell className="w-[133px] justify-end">Ratio</TableHeadCell>
        </TableHead>
        <TableBody>
          {
            topProfitRatiosList.map((item, key) => {
              return <TableRow key={key}>
                      <TableCell className="flex-1">
                        <div className=' font-dbold text-base italic w-9'>{key + 1}</div>
                        <div className='w-[30px] h-[40px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src={item.img_url || "/ranking/demo2.png"} className=" shrink-0" />
                          <div className="img-bg"></div>
                        </div>
                        <div className='text-[16px] cursor-pointer'>{formatAddress(item.holder_address)}</div>
                        {
                          item.user_name && <LazyImage src="/ranking/bridge.png" className="w-5 h-5 ml-2 cursor-pointer" />
                        }
                      </TableCell>
                      <TableCell className="w-[189px] ">
                        {
                          new Array(item.NFT_counts > 3 ? 3: item.NFT_counts).fill('').map((n, index) => {
                            return (
                              <div key={index} className='w-[20px] h-[26px] mr-2 flex items-center justify-center relative img-wrap '>
                                <LazyImage src="/ranking/demo.png" className="" />
                              </div>
                            )
                          })
                        }
                        {/* <div className='w-[20px] h-[26px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src="/ranking/demo.png" className="" />
                        </div>
                        <div className='w-[20px] h-[26px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src="/ranking/demo.png" className="" />
                        </div>
                        <div className='w-[20px] h-[26px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src="/ranking/demo.png" className="" />
                        </div> */}
                        {
                          item.NFT_counts > 3 ? '+' + (item.NFT_counts - 3) : null
                        }
                      </TableCell>
                      <TableCell className="w-[156px] ">{item.birth_on}</TableCell>
                      <TableCell className="w-[156px] ">{item.active_since}</TableCell>
                      <TableCell className="w-[133px] justify-center ">{item.tx_count}</TableCell>
                      <TableCell className="w-[133px] justify-center">
                        <div className=' num-text1 text-[20px]'>{Number(item.infer_score).toFixed(1)}</div>
                      </TableCell>
                      <TableCell className="w-[133px] justify-end">
                        <div className='num-text4 text-[20px]'>+{(item.wealth_appreciation * 100).toFixed(0)}%</div>
                      </TableCell>
                    </TableRow>
            })
          }
          
        </TableBody>
      </Table>
    </RankWrap>
  )
}

export default TopProfitRatios