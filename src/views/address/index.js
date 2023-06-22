import React from "react";
import MenuWhite from '../../components/pc/MenuWhite';

import H5Footer from "../../components/h5/H5Footer";
import DetailsData from './components/DetailsData';
import PriceData from './components/PriceData';
import History from './components/History';
import HolderInfo from './components/HolderInfo';
import CollInfo from './components/CollInfo';


const AddressAn = () => {
  return (
    <div  className=" min-h-screen pt-[26px] ranking__wrap">
      <div className="w-full bg-white fixed z-50 left-0 right-0 top-0 ">
        <div className="w-[1200px] mx-auto">
          <MenuWhite />
        </div>
      </div>
      <div className=" pt-[74px] addressan-bg min-h-screen ">
        <div className="w-[1200px] mx-auto pb-[145px]">
          <DetailsData />
          <PriceData />
          <History />
          <HolderInfo />
          <CollInfo />
        </div>
        
      </div>
      
      <H5Footer white={true} />
    </div>
  )
}

export default AddressAn