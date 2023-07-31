import React, { useEffect, useState } from 'react'
import RankWrap from '../../ranking/components/RankWrap';
import { TTitle } from '../../coll/components/VolumeData'
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from '../../ranking/components/Table';
import LazyImage from '../../../components/LazyImage';
import { transformTime, formatAddress } from '@/utils';

const History = ({
  itemData
}) => {
  const [list, setList] = useState([])
  useEffect(() => {
    const txHistory = itemData.txHistory
    if (txHistory && txHistory.length > 0) {
      const tmpList = txHistory.map((_item) => {
        return {
          ..._item,
          time: transformTime(_item.time * 1000).slice(6, 12)
        }
      })
      setList(tmpList)
    }
  }, [itemData])

  return (
    <RankWrap className='mt-[120px] sm:min-h-[100px]'>
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
            list.map((item, key) => {
              return <TableRow key={key}>
                      <TableCell className="w-[254px]">
                        <div className=' font-dbold text-base italic w-9'>{key + 1}</div>
                        <div className='text-[16px] cursor-pointer'>{item.time}</div>
                      </TableCell>
                      <TableCell className="w-[254px] ">
                        <div className='flex items-center'>
                          {formatAddress(item.from)}
                          <LazyImage src="/addressan/reddit_logo.png" className="w-[20px] h-[20px] ml-2" />
                        </div>
                      </TableCell>
                      <TableCell className="flex-1 ">
                        <div>
                          {formatAddress(item.to)}
                        </div>
                      </TableCell>
                      <TableCell className="w-[254px] justify-end">
                        <img src='/ranking/eth.png' className='w-5 h-5 mr-1' />
                        <div className='num-text3 text-[20px]'>{item.price}</div>
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