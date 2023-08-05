import React, { useState } from 'react'
import RankWrap from '../../ranking/components/RankWrap';
import LazyImage from '../../../components/LazyImage';
import LineChartS from './LineChart';
import { TTitle } from './VolumeData';
import { formatName, formatNumber } from '@/utils';
import * as echarts from 'echarts';


const PriceData = ({
  itemData
}) => {
  const priceChartData = itemData.priceChartData
  const floorPriceChartData = itemData.floorPriceChartData || {}
  const medianPriceChartData = itemData.medianPriceChartData || {}

  const maxPriceChartData = itemData.maxPriceChartData || {}

  return (
    <RankWrap className='sm:min-h-[300px] mt-[120px]'>
      <LazyImage src='/ranking/circle5.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <LazyImage src='/addressan/circle2.png' className='w-[138px] h-[138px] absolute right-[145px] -top-[81px]' />
      <TTitle text="Price" tips="NFT transaction price in last 9 months" />
      <div className=' rounded-xl bg-[rgba(255,83,46,0.03)] mt-[18px] px-5 py-[22px]'>
        <div className='text-[rgba(0,0,0,0.6)] text-[24px] font-fnormal'>Median price</div>
        <div className='text-[#3F4664] flex items-baseline mt-[10px]'>
          <span className='font-fbold text-[32px]'>
            {medianPriceChartData.lastPrice?.toFixed(3)}
          </span>
          <span className=' font-fbold text-[20px] ml-1'>$</span>
          {/* <span className='text-[20px] text-[#7F8792] ml-[9px]'>(Avg)</span> */}
        </div>
        <div className='mt-4'>
          <LineChartS 
            id={"pricedata"}
            lineData={{
              xAxis: {
                data: medianPriceChartData.xdata
              },
              series: [
                {
                  data: medianPriceChartData.volumeData,
                  type: 'line',
                  color: '#FF532E',
                  smooth: true,
                  symbolSize: 4,
                  lineStyle: {
                    width: 2
                  },
                  areaStyle: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0.2,
                        color: 'rgba(255, 83, 46, 0.4)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(255, 83, 46, 0)'
                      }
                    ])
                  }
                }
              ]
            }}
          />
        </div>
      </div>
      <div className=' rounded-xl bg-[rgba(255,83,46,0.03)] px-5 py-[22px] mt-[36px]'>
        <div className='text-[rgba(0,0,0,0.6)] text-[24px] font-fnormal'>Floor price</div>
        <div className='text-[#3F4664] flex items-baseline mt-[10px]'>
          <span className='font-fbold text-[32px]'>
            {floorPriceChartData.lastPrice?.toFixed(3)}
          </span>
          <span className=' font-fbold text-[20px] ml-1'>$</span>
          {/* <span className='text-[20px] text-[#7F8792] ml-[9px]'>(Avg)</span> */}
        </div>
        <div className='mt-4'>
          <LineChartS 
            id={"floorpricedata"}
            lineData={{
              xAxis: {
                data: floorPriceChartData.xdata
              },
              series: [
                {
                  data: floorPriceChartData.volumeData,
                  type: 'line',
                  color: '#FF532E',
                  smooth: true,
                  symbolSize: 4,
                  lineStyle: {
                    width: 2
                  },
                  areaStyle: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0.2,
                        color: 'rgba(255, 83, 46, 0.4)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(255, 83, 46, 0)'
                      }
                    ])
                  }
                }
              ]
            }}
          />
        </div>
      </div>
      <div className=' rounded-xl bg-[rgba(255,83,46,0.03)] px-5 py-[22px] mt-[36px]'>
        <div className='text-[rgba(0,0,0,0.6)] text-[24px] font-fnormal'>Ceiling price</div>
        <div className='text-[#3F4664] flex items-baseline mt-[10px]'>
          <span className='font-fbold text-[32px]'>
            {maxPriceChartData.lastPrice?.toFixed(3)}
          </span>
          <span className=' font-fbold text-[20px] ml-1'>$</span>
          {/* <span className='text-[20px] text-[#7F8792] ml-[9px]'>(Avg)</span> */}
        </div>
        <div className='mt-4'>
          <LineChartS 
            id={"ceilpricedata"}
            lineData={{
              xAxis: {
                data: maxPriceChartData.xdata
              },
              series: [
                {
                  data: maxPriceChartData.volumeData,
                  type: 'line',
                  color: '#FF532E',
                  smooth: true,
                  symbolSize: 4,
                  lineStyle: {
                    width: 2
                  },
                  areaStyle: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0.2,
                        color: 'rgba(255, 83, 46, 0.4)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(255, 83, 46, 0)'
                      }
                    ])
                  }
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