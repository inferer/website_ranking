import React, { useState, useEffect } from 'react'
import RankWrap from '../../ranking/components/RankWrap';
import LazyImage from '../../../components/LazyImage';
import { TTitle } from './VolumeData'

const InferLabels = () => {
  const [infererLabels] = useState([
    {label_name: 'Defi Staker'},
    {label_name: 'Defi Staker'},
    {label_name: 'ENS User'},
    {label_name: 'Top NFT Holders'},
    {label_name: 'Defi Staker'},
    {label_name: 'Opensea Trader'},
  ])

  return (
    <RankWrap className='sm:min-h-[360px]'>
      <LazyImage src='/ranking/circle10.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <TTitle text="Inferer Labels" tips="Top 6 labels in all Coll. holders" />
      <div className="flex mt-[50px] flex-wrap">
        {
          infererLabels.map((label, key) => {
            return (
              <div key={label.label_name + key} className="infer-label">
                <div className="menu-text text-[26px]">{label.label_name}</div>
              </div>
            )
          })
        }
      </div>
      
    </RankWrap>
  )
}

export default InferLabels