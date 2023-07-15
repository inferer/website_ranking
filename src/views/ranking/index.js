import React, { useEffect } from "react";
import MenuWhite from '../../components/pc/MenuWhite';
import RedditTitle from './components/RedditTitle';
import TopPriceColl from './components/TopPriceColl';
import TopPopullarColl from './components/TopPopullarColl';
import TopAccounts from './components/TopAccounts';
import TopActiveUsers from './components/TopActiveUsers';
import TopProfitRatios from './components/TopProfitRatios';
import TopPrice from './components/TopPrice';
import TopPopullar from './components/TopPopullar';
import H5Footer from "../../components/h5/H5Footer";

const Ranking = () => {

  return (
    <div  className=" min-h-screen">
      <MenuWhite />
      <div className="  pt-[104px] ranking-bg ">
        <div className="w-[1200px] mx-auto pb-[145px]">
          <RedditTitle />
          <div className="mb-[120px]">
            <div className="mb-[120px]">
              <TopPriceColl />
            </div>
            <div className="mb-[120px]">
              <TopPopullarColl />
            </div>
            <div className="mb-[120px]">
              <TopAccounts />
            </div>
            <div className="mb-[120px]">
              <TopActiveUsers />
            </div>
            <div className="mb-[120px]">
              <TopProfitRatios />
            </div>
            <div className="mb-[120px] flex space-x-6">
              <TopPrice />
              <TopPopullar />
            </div>
            
          </div>
        </div>
      </div>
      
      <H5Footer white={true} />
    </div>
  )
}

export default Ranking