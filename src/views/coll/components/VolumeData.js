import React, { useState } from 'react'
import RankWrap from '../../ranking/components/RankWrap';
import LazyImage from '../../../components/LazyImage';
import LineChartS from './LineChart';
import { formatName, formatNumber } from '@/utils';

export const TTitle = ({
  text,
  tips
}) => {
    const [active, setActive] = useState(false)
    return (
      <div className=' font-ffmedium text-[24px] leading-[36px] text-black flex items-center relative mt-3'
      >
        <div className='' style={{ lineHeight: '18px' }}>{text}</div>
        {
          tips && <img src='/addressan/info.png' className="w-6 h-6 ml-3 cursor-pointer" alt=""
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          />
        }
        {
          active && <div className='tips-wrap font-fnormal'>
            {tips}
          </div>
        }

      </div>
    )
  }

const VolumeData = ({
  itemData
}) => {

  const volumeChartData = itemData.volumeChartData

  return (
    <RankWrap className='sm:min-h-[300px] mt-[120px]'>
      <LazyImage src='/ranking/circle6.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <LazyImage src='/addressan/circle1.png' className='w-[138px] h-[138px] absolute right-[145px] -top-[69px]' />
      <TTitle text="Volume" tips="NFT transaction volume in last 6 months" />
      <div className='text-[#3F4664] flex items-baseline mt-4'>
        <span className='font-fbold text-[32px]'>
          {/* {formatNumber(volumeChartData.total)} */}
          {volumeChartData.total}
        </span>
        <span className=' font-fbold text-[20px] ml-1'>$</span>
        <span className='text-[20px] text-[#7F8792] ml-[9px]'>(Total)</span>
      </div>
      <div className='mt-4'>
        <LineChartS 
          id={"volumedata"}
          lineData={{
            xAxis: {
              data: volumeChartData.xdata
            },
            series: [
              {
                data: volumeChartData.volumeData,
                type: 'line',
                color: '#679AFF',
                smooth: true,
                symbolSize: 4,
                lineStyle: {
                  width: 2
                },
              }
            ]
          }}
        />
      </div>
      
    </RankWrap>
  )
}

export default VolumeData