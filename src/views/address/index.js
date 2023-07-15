import React, { useEffect, useMemo } from "react";
import MenuWhite from '../../components/pc/MenuWhite';

import H5Footer from "../../components/h5/H5Footer";
import DetailsData from './components/DetailsData';
import PriceData from './components/PriceData';
import History from './components/History';
import HolderInfo from './components/HolderInfo';
import CollInfo from './components/CollInfo';
import { useDetailsStore } from '@/state';
import { useRouter } from 'next/router';


const AddressAn = () => {
  const router = useRouter()
  const topPriceItem = useDetailsStore(state => state.topPriceItem)
  const topPopullarItem = useDetailsStore(state => state.topPopullarItem)
  const getTopPriceItem = useDetailsStore(state => state.getTopPriceItem)
  const getTopPopullarItem = useDetailsStore(state => state.getTopPopullarItem)

  useEffect(() => {
    if (router.query.address) {
      if (router.pathname === '/top-price/[...address]') {
        getTopPriceItem(router.query.address[0], router.query.address[1])
      }
      if (router.pathname === '/top-popullar/[...address]') {
        getTopPopullarItem(router.query.address[0], router.query.address[1])
      }
    }
  }, [router])


  const itemData = useMemo(() => {
    if (router.pathname === '/top-price/[...address]') {
      return topPriceItem
    }
    if (router.pathname === '/top-popullar/[...address]') {
      return topPopullarItem
    }
    return topPriceItem
  }, [router, topPriceItem, topPopullarItem])
  
  return (
    <div  className=" min-h-screen ranking__wrap">
      
          <MenuWhite />
        
      <div className=" pt-[100px] addressan-bg min-h-screen ">
        <div className="w-[1200px] mx-auto pb-[145px]">
          <DetailsData 
            itemData={itemData}
          />
          <PriceData 
            itemData={itemData}
          />
          <History 
            itemData={itemData}
          />
          <HolderInfo 
            itemData={itemData}
          />
          <CollInfo 
            itemData={itemData}
          />
        </div>
        
      </div>
      
      <H5Footer white={true} />
    </div>
  )
}

export default AddressAn