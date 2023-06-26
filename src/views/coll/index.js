import React from "react";
import MenuWhite from '../../components/pc/MenuWhite';

import H5Footer from "../../components/h5/H5Footer";
import DetailsData from './components/DetailsData';
import VolumeData from './components/VolumeData';
import PriceData from './components/PriceData';
import InferAn from './components/InferAn';
import HolderDist from './components/HolderDist';
import InferLabels from './components/InferLabels';
import { useDetailsStore } from '@/state'
import { useEffect } from 'react';
import { useRouter } from "next/router";


const AddressAn = () => {
  const router = useRouter()

  const topPriceCollItem = useDetailsStore(state => state.topPriceCollItem)
  const getTopPriceCollItem = useDetailsStore(state => state.getTopPriceCollItem)

  useEffect(() => {
    if (router.pathname === '/top-price-collection/[...address]') {
      const address = router.query.address && router.query.address[0] || ''
      getTopPriceCollItem(address)
    }
  }, [router])

  return (
    <div  className=" min-h-screen pt-[26px] ranking__wrap">
      <div className="w-full bg-white fixed z-50 left-0 right-0 top-0 ">
        <div className="w-[1200px] mx-auto">
          <MenuWhite />
        </div>
      </div>
      <div className=" pt-[74px] addressan-bg min-h-screen ">
        <div className="w-[1200px] mx-auto pb-[145px]">
          <DetailsData 
            topPriceCollItem={topPriceCollItem}
          />
          <VolumeData 
            topPriceCollItem={topPriceCollItem}
          />
          <PriceData 
            topPriceCollItem={topPriceCollItem}
          />
          <InferAn 
            topPriceCollItem={topPriceCollItem}
          />

          <div className="mt-[120px] flex space-x-6">
            <HolderDist 
              topPriceCollItem={topPriceCollItem}
            />
            <InferLabels 
              topPriceCollItem={topPriceCollItem}
            />
          </div>

        </div>
        
      </div>
      
      <H5Footer white={true} />
    </div>
  )
}

export default AddressAn