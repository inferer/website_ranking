import React, { useMemo } from "react";
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
  const topPopullarCollItem = useDetailsStore(state => state.topPopullarCollItem)
  const getTopPriceCollItem = useDetailsStore(state => state.getTopPriceCollItem)
  const getTopPopullarCollItem = useDetailsStore(state => state.getTopPopullarCollItem)

  useEffect(() => {
    if (router.pathname === '/top-price-collection/[...address]') {
      const address = router.query.address && router.query.address[0] || ''
      getTopPriceCollItem(address)
    }
    if (router.pathname === '/top-popullar-collection/[...address]') {
      const address = router.query.address && router.query.address[0] || ''
      getTopPopullarCollItem(address)
    }
  }, [router])

  const itemData = useMemo(() => {
    if (router.pathname === '/top-price-collection/[...address]') {
      return topPriceCollItem
    }
    if (router.pathname === '/top-popullar-collection/[...address]') {
      return topPopullarCollItem
    }
    return topPriceCollItem
  }, [router, topPriceCollItem, topPopullarCollItem])

  return (
    <div  className=" min-h-screen pt-[26px] ranking__wrap">
      <div className="w-full bg-white fixed z-50 left-0 right-0 top-0 ">
        <div className="w-[1200px] mx-auto">
          <MenuWhite />
        </div>
      </div>
      <div className=" pt-[74px] addresscoll-bg min-h-screen ">
        <div className="w-[1200px] mx-auto pb-[145px]">
          <DetailsData 
            itemData={itemData}
          />
          <VolumeData 
            itemData={itemData}
          />
          <PriceData 
            itemData={itemData}
          />
          <InferAn 
            itemData={itemData}
          />

          <div className="mt-[120px] flex space-x-6">
            <HolderDist 
              itemData={itemData}
            />
            <InferLabels 
              itemData={itemData}
            />
          </div>

        </div>
        
      </div>
      
      <H5Footer white={true} />
    </div>
  )
}

export default AddressAn