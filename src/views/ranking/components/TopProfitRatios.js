import RankWrap from './RankWrap';
import RankTitle from './RankTitle';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from './Table';
import LazyImage from '../../../components/LazyImage';

const TopProfitRatios = () => {
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
            new Array(7).fill('').map((n, key) => {
              return <TableRow key={key}>
                      <TableCell className="flex-1">
                        <div className=' font-dbold text-base italic w-9'>{key + 1}</div>
                        <div className='w-[30px] h-[40px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src="/ranking/demo2.png" className="" />
                          <div className="img-bg"></div>
                        </div>
                        <div className='text-[16px] cursor-pointer'>0x8eb8.....3f23</div>
                        <LazyImage src="/ranking/bridge.png" className="w-5 h-5 ml-2 cursor-pointer" />
                      </TableCell>
                      <TableCell className="w-[189px] ">
                        <div className='w-[20px] h-[26px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src="/ranking/demo.png" className="" />
                        </div>
                        <div className='w-[20px] h-[26px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src="/ranking/demo.png" className="" />
                        </div>
                        <div className='w-[20px] h-[26px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src="/ranking/demo.png" className="" />
                        </div>
                        +9
                      </TableCell>
                      <TableCell className="w-[156px] ">5/18/2021</TableCell>
                      <TableCell className="w-[156px] ">5/18/2021</TableCell>
                      <TableCell className="w-[133px] justify-center ">39</TableCell>
                      <TableCell className="w-[133px] justify-center">
                        <div className=' menu-text text-[20px]'>4.7</div>
                      </TableCell>
                      <TableCell className="w-[133px] justify-end">
                        <div className='num-text4 text-[20px]'>+369.2%</div>
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