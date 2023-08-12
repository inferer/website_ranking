import React, { useState } from 'react'
import RankWrap from '../../ranking/components/RankWrap';
import LazyImage from '../../../components/LazyImage';
import LineChartS from './LineChart';
import { TTitle } from '../../coll/components/VolumeData';
import * as echarts from 'echarts';


const PriceData = ({
  itemData
}) => {
  return (
    <RankWrap className='sm:min-h-[504px] mt-[120px]'>
      <LazyImage src='/ranking/circle5.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <LazyImage src='/addressan/circle2.png' className='w-[138px] h-[138px] absolute right-[145px] -top-[81px]' />
      <TTitle text="Price" tips="NFT transaction price in last 6 months" />
      <div className=' rounded-xl bg-[rgba(255,83,46,0.03)] py-[22px] mt-[18px]'>
        <div className='px-[22px] flex items-center'>
          <div className='text-[#3F4664] flex items-baseline '>
            <span className='font-fbold text-[32px]'>
              {Number(itemData.priceInfo?.last_price || '0').toFixed(3)}
            </span>
            <span className=' font-fbold text-[20px] ml-1'>$</span>
            <span className='text-[20px] text-[#7F8792] ml-[9px]'>(Latest)</span>
          </div>
          <div className=' rounded-lg bg-[#FFF3F0] h-[41px] flex items-center px-[10px] ml-10'>
            <div className=' text-[16px] font-dnormal text-[#3F4664]'>{Number(itemData.priceInfo?.max_price || '0').toFixed(3)} $</div>
            <div className=' text-[14px] font-dnormal text-[#7F8792] ml-[10px]'>(Highest)</div>
            <div className='w-[2px] h-[21px] bg-[rgba(255,83,46,0.06)] mx-3'></div>
            <div className=' text-[16px] font-dnormal text-[#3F4664]'>{Number(itemData.priceInfo?.last_price || '0').toFixed(3)} $</div>
            <div className=' text-[14px] font-dnormal text-[#7F8792] ml-[10px]'>(Lowest)</div>
          </div>
        </div>
        <div className='mt-[60px] px-[22px] relative'>
          <div className='flex items-center absolute left-0 bottom-[98px]'>
            <div className='text-[#3F4664] text-[16px] font-dbold -rotate-90'>Volume<span className='text-[#7F8792] font-dnormal'>($)</span></div>
          </div>
          <div className='flex items-center absolute right-0 bottom-[98px]'>
            <div className='text-[#3F4664] text-[16px] font-dbold rotate-90'>Avg Price<span className='text-[#7F8792] font-dnormal'>($)</span></div>
          </div>
          <LineChartS 
            id={"pricedata"}
            lineData={{
              xAxis: {
                data: itemData.priceChartData?.xdata
              },
              series: [
                {
                  data: itemData.priceChartData?.volumeData,
                  type: 'line',
                  color: '#FF532E',
                  smooth: true,
                  symbolSize: 4,
                  lineStyle: {
                    width: 2
                  }
                },
                {
                  data: itemData.volumeChartData?.volumeData,
                  type: 'bar',
                  color: 'rgba(255, 83, 46, 0.20)',
                  smooth: true,
                  barWidth: 6
                }
              ]
            }}
          />
        </div>
      </div>
    </RankWrap>
  )
}

export default PriceData