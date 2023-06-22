import RankWrap from './RankWrap';
import RankTitle from './RankTitle';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from './Table';
import LazyImage from '../../../components/LazyImage';
import { LineChartS } from './LineChart';

const TopPrice = () => {
  return (
    <RankWrap>
      <img src='/ranking/circle8.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <RankTitle>Top Price Avatar</RankTitle>
      <Table>
        <TableHead>
          <TableHeadCell className="flex-1"><div className='pl-[36px]'>Avatar</div></TableHeadCell>
          <TableHeadCell className="w-[170px] pl-[26px]">Price Trend</TableHeadCell>
          <TableHeadCell className="w-[122px] justify-end">Price</TableHeadCell>
        </TableHead>
        <TableBody>
          {
            new Array(7).fill('').map((n, key) => {
              return <TableRow key={key}>
                      <TableCell className="flex-1">
                        <div className=' font-dbold text-base italic w-9'>{key + 1}</div>
                        <div className='w-[30px] h-[40px] mr-2 flex items-center justify-center relative img-wrap '>
                          <LazyImage src="/ranking/demo.png" className="" />
                        </div>
                        <div>Meme Team #8789</div>
                      </TableCell>
                      <TableCell className="w-[170px]">
                        <div className='w-[170px]'>
                          <LineChartS 
                            id={"topaccountprice" + key}
                            lineColor="#FF532E"
                            lineData={[
                              {name: '1', value: 178},
                              {name: '2', value: 138},
                              {name: '3', value: 238},
                              {name: '3', value: 178},
                              {name: '3', value: 118},
                              {name: '3', value: 298},
                              {name: '4', value: 58},
                            ]} 
                          />
                        </div>  
                      </TableCell>
                      <TableCell className="w-[122px] justify-end">
                        <div className=' text-[20px] num-text3'>$ 56.1k</div>
                      </TableCell>
                    </TableRow>
            })
          }
          
        </TableBody>
      </Table>
    </RankWrap>
  )
}

export default TopPrice