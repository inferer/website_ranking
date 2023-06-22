import React from "react";
import MenuWhite from '../../components/pc/MenuWhite';

import H5Footer from "../../components/h5/H5Footer";
import DetailsData from './components/DetailsData';
import VolumeData from './components/VolumeData';
import PriceData from './components/PriceData';
import InferAn from './components/InferAn';
import HolderDist from './components/HolderDist';
import InferLabels from './components/InferLabels';


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
          <VolumeData />
          <PriceData />
          <InferAn />

          <div className="mt-[120px] flex space-x-6">
            <HolderDist />
            <InferLabels />
          </div>

        </div>
        
      </div>
      
      <H5Footer white={true} />
    </div>
  )
}

export default AddressAn