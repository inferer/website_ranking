import React, { useState, useEffect } from 'react'
import RankWrap from '../../ranking/components/RankWrap';
import LazyImage from '../../../components/LazyImage';
import { TTitle } from './VolumeData'
import PieChartT from './PieChart'

const HolderDist = () => {
  const [precentData, setPrecentData] = useState({
    '1': '0.0',
    '2-3': '0.0',
    '4-10': '0.0',
    '>10': '0.0'
  })

  return (
    <RankWrap className='sm:min-h-[360px]'>
      <LazyImage src='/ranking/circle7.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <TTitle text="Holding Amount distribution" />
      <div className="flex justify-between mt-6">
        <div className="flex pl-4 flex-1 holding-amount justify-between pr-4">
          <div className="pt-[36px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="holding-dot _1"></div>
                1
              </div>
              <div className="ml-4 font-medium">{precentData['1']}%</div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center">
                <div className="holding-dot _23"></div>
                2-3
              </div>
              <div className="ml-4 font-medium">{precentData['2-3']}%</div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center">
                <div className="holding-dot _410"></div>
                4-10
              </div>
              <div className="ml-4 font-medium">{precentData['4-10']}%</div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center">
                <div className="holding-dot _10"></div>
                {">"}10
              </div>
              <div className="ml-4 font-medium">{precentData['>10']}%</div>
            </div>
          </div>
          <div>
            <PieChartT dataList={precentData} id="holderdist" />
            <div className='text-[24px] text-[#7F8792] text-center mt-3'>2.34k Holders</div>
          </div>
        </div>
      </div>
      
    </RankWrap>
  )
}

export default HolderDist