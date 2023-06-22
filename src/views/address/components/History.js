import RankWrap from '../../ranking/components/RankWrap';
import { TTitle } from '../../coll/components/VolumeData'
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from '../../ranking/components/Table';
import LazyImage from '../../../components/LazyImage';

const History = () => {
  return (
    <RankWrap className='mt-[120px] sm:min-h-[500px]'>
      <img src='/ranking/circle4.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <TTitle text="History" />
      <div className='mt-5'></div>
      <Table>
        <TableHead>
          <TableHeadCell className="w-[254px]"><div className='pl-[36px]'>Time</div></TableHeadCell>
          <TableHeadCell className="w-[254px] ">From</TableHeadCell>
          <TableHeadCell className="flex-1">To</TableHeadCell>
          <TableHeadCell className="w-[254px] justify-end">Price</TableHeadCell>
        </TableHead>
        <TableBody>
          {
            new Array(7).fill('').map((n, key) => {
              return <TableRow key={key}>
                      <TableCell className="w-[254px]">
                        <div className=' font-dbold text-base italic w-9'>{key + 1}</div>
                        <div className='text-[16px] cursor-pointer'>09/20/2023</div>
                      </TableCell>
                      <TableCell className="w-[254px] ">
                        <div className='flex items-center'>
                          0x3eb9.....1f23
                          <LazyImage src="/addressan/reddit_logo.png" className="w-[20px] h-[20px] ml-2" />
                        </div>
                      </TableCell>
                      <TableCell className="flex-1 ">
                        <div>
                        0x3eb9.....1f23
                        </div>
                      </TableCell>
                      <TableCell className="w-[254px] justify-end">
                        <div className='num-text3 text-[20px]'>$12.99</div>
                      </TableCell>
                    </TableRow>
            })
          }
          
        </TableBody>
      </Table>
    </RankWrap>
  )
}

export default History