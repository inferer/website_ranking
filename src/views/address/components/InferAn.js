import React, { useState, useEffect } from 'react'
import RankWrap from '../../ranking/components/RankWrap';
import LazyImage from '../../../components/LazyImage';
import { TTitle } from '../../coll/components/VolumeData'

const InferAn = () => {
  const [per5, setPer5] = useState(0)
  const [per4, setPer4] = useState(0)
  const [per3, setPer3] = useState(0)
  const [per2, setPer2] = useState(0)
  const [per1, setPer1] = useState(0)
  useEffect(() => {
    const scoreCount = 200
    setPer5(20 / scoreCount * 100)
    setPer4(40 / scoreCount * 100)
    setPer3(30 / scoreCount * 100)
    setPer2(5/ scoreCount * 100)
    setPer1(5 / scoreCount * 100)
  }, [])

  return (
    <RankWrap className='min-h-[300px] mt-[120px]'>
      <LazyImage src='/ranking/circle4.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <LazyImage src='/addressan/circle3.png' className='w-[138px] h-[138px] absolute right-[145px] -top-[81px]' />
      <TTitle text="Inferer Analysis" tips="Full analysis on all Coll. holders" />
      <div className="flex justify-between items-start mt-[60px]">
        <div className='w-[687px] flex'>
          <div className="" style={{ width: '309px' }}>
            <div className="flex items-center mb-[30px]">
              <div className="text5 text-[24px] font-fbold ">5.0</div>
              <div className=" relative overflow-hidden mx-2 flex-1">
                <div className="bg1 opacity-10 score-bar"></div>
                <div className=" absolute h-1 bg5 score-bar left-0 top-0" style={{ width: per5 + '%' }}></div>
              </div>
              <div className=" text-[20px] shrink-0" style={{ color: '#7F8792', width: '25px' }}>{per5.toFixed(0)}%</div>
            </div>
            <div className="flex items-center mb-[30px]">
              <div className="text4  text-[24px] font-fbold ">4.0</div>
              <div className=" relative overflow-hidden mx-2 flex-1">
                <div className="bg4 opacity-10 score-bar"></div>
                <div className=" absolute h-1 bg4 score-bar left-0 top-0" style={{ width: per4 + '%' }}></div>
              </div>
              <div className=" text-[20px] shrink-0" style={{ color: '#7F8792', width: '25px' }}>{per4.toFixed(0)}%</div>
            </div>
            <div className="flex items-center">
              <div className="text3  text-[24px] font-fbold ">3.0</div>
              <div className=" relative overflow-hidden mx-2 flex-1">
                <div className="bg3 opacity-10 score-bar"></div>
                <div className=" absolute h-1 bg3 score-bar left-0 top-0" style={{ width: per3 + '%' }}></div>
              </div>
              <div className=" text-[20px] shrink-0" style={{ color: '#7F8792', width: '25px' }}>{per3.toFixed(0)}%</div>
            </div>
          </div>
          <div className="ml-[68px]" style={{ width: '309px' }}>
            <div className="flex items-center mb-[30px]">
              <div className="text2 text-xs leading-4">2.0</div>
              <div className=" relative overflow-hidden mx-2 flex-1">
                <div className="bg2 opacity-10 score-bar"></div>
                <div className=" absolute h-1 bg2 score-bar left-0 top-0" style={{ width: per2 + '%' }}></div>
              </div>
              <div className=" text-[20px] shrink-0" style={{ color: '#7F8792', width: '25px' }}>{per2.toFixed(0)}%</div>
            </div>
            <div className="flex items-center">
              <div className="text1 text-xs leading-4">1.0</div>
              <div className=" relative overflow-hidden mx-2 flex-1">
                <div className="bg1 opacity-10 score-bar"></div>
                <div className=" absolute h-1 bg1 score-bar left-0 top-0" style={{ width: per1 + '%' }}></div>
              </div>
              <div className=" text-[20px] shrink-0" style={{ color: '#7F8792', width: '25px' }}>{per1.toFixed(0)}%</div>
            </div>

          </div>
        </div>
        <div className='line_score ml-[74px] mr-[30px]'></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="menu-text font-fbold text-[176px] leading-[229px] relative -top-[43px]">{3.2}</div>
        </div>
      </div>
      
    </RankWrap>
  )
}

export default InferAn