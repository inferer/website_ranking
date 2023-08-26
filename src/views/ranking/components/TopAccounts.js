import RankWrap from './RankWrap';
import RankTitle from './RankTitle';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from './Table';
import LazyImage from '../../../components/LazyImage';
import { useRankingStore } from '@/state'
import { useEffect, useMemo } from 'react';
import { toIpfsUrl, formatNumber, formatAddress, openBrowser } from '@/utils';
import { useRouter } from 'next/router';
import { redditUserUrl } from '@/config';

const TopAccounts = () => {
  const router = useRouter()
  const getTopAccounts = useRankingStore(state => state.getTopAccounts)
  const topAccountList = useRankingStore(state => state.topAccountList)

  useEffect(() => {
    getTopAccounts()
  }, [])

  const filterList = useMemo(() => {
    if (router.query && router.query.ranking === 'accounts') {
      return topAccountList
    } else {
      return topAccountList.slice(0, 7)
    }
  }, [router, topAccountList])
  
  return (
    <RankWrap>
      <LazyImage src='/ranking/circle6.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      {
        router.pathname === '/' ?
          <RankTitle>
            <div className='flex justify-between items-center'>
              Top Accounts 
              <span className='text-[#357AFF] text-[20px] cursor-pointer'
                onClick={e => {
                  e.stopPropagation()
                  router.push({ pathname: '/top50/accounts'})
                }}
              >More</span>
            </div> 
          </RankTitle> : <div className='h-3'></div>
      }
      <Table>
        <TableHead>
          <TableHeadCell className="flex-1"><div className='pl-[36px]'>Account</div></TableHeadCell>
          <TableHeadCell className="w-[168px] ">Address</TableHeadCell>
          <TableHeadCell className="w-[156px] ">Reddit Avatars</TableHeadCell>
          <TableHeadCell className="w-[116px]">Birth On</TableHeadCell>
          <TableHeadCell className="w-[138px]">Active Since</TableHeadCell>
          <TableHeadCell className="w-[112px] justify-center">Tx Count</TableHeadCell>
          <TableHeadCell className="w-[133px] justify-center">Inferer Score</TableHeadCell>
          <TableHeadCell className="w-[103px] justify-end">Price</TableHeadCell>
        </TableHead>
        <TableBody>
          {
            filterList.map((item, key) => {
              return <TableRow key={key}>
                      <TableCell className="flex-1">
                        <div className=' font-dbold text-base italic w-9'>{key + 1}</div>
                        <div className='w-[30px] h-[40px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src={toIpfsUrl(item.img_url || "/ranking/demo2.png")} className=" shrink-0" />
                          <div className="img-bg"></div>
                        </div>
                        <div className='text-[16px] cursor-pointer w-[110px] text-ellipsis'
                          onClick={e => {
                            e.stopPropagation()
                            openBrowser(redditUserUrl + item.user_name|| '')
                          }}
                        >{item.user_name}</div>
                        
                      </TableCell>
                      <TableCell className="w-[168px]">
                        <div className='text-[16px] font-dbold'>{formatAddress(item.holder_address)}</div>
                      </TableCell>
                      <TableCell className="w-[156px] ">
                        {
                          item.url_list && item.url_list.length > 0 ? item.url_list.slice(0,3).map((item, index) => {
                            return (  
                              <div key={index} className='w-[20px] h-[26px] mr-2 flex items-center justify-center relative img-wrap '>
                                <LazyImage src={toIpfsUrl(item)} className="" />
                              </div>
                            )
                          }) :
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
                          item.url_list.length > 3 ? '+' + (item.url_list.length - 3) : null
                        }
                      </TableCell>
                      <TableCell className="w-[116px] ">{item.birth_on}</TableCell>
                      <TableCell className="w-[138px] ">{item.active_since}</TableCell>
                      <TableCell className="w-[112px] justify-center ">{item.tx_count}</TableCell>
                      <TableCell className="w-[133px] justify-center">
                        <div className=' num-text1 text-[20px]'>{Number(item.infer_score ?? 0).toFixed(1)}</div>
                      </TableCell>
                      <TableCell className="w-[103px] justify-end">
                        <div className='num-text3 text-[20px]'>${formatNumber(Number(item.volume))}</div>
                      </TableCell>
                    </TableRow>
            })
          }
          
        </TableBody>
      </Table>
    </RankWrap>
  )
}

export default TopAccounts