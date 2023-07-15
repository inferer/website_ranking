import React, { useEffect } from "react";
import MenuWhite from '../../components/pc/MenuWhite';
import RedditTitle2 from './components/RedditTitle2';
import TopPriceColl from './components/TopPriceColl';
import TopPopullarColl from './components/TopPopullarColl';
import TopAccounts from './components/TopAccounts';
import TopActiveUsers from './components/TopActiveUsers';
import TopProfitRatios from './components/TopProfitRatios';
import TopPrice from './components/TopPrice';
import TopPopullar from './components/TopPopullar';
import H5Footer from "../../components/h5/H5Footer";
import { useRouter } from "next/router";

const Ranking = () => {
  const router = useRouter()
  return (
    <div  className=" min-h-screen">
      
          <MenuWhite />
      <div className="  pt-[104px] ranking-bg ">
        <div className="w-[1200px] mx-auto pb-[145px]">
          <RedditTitle2 />
          <div className="mb-[120px]">
            {
              router.query && router.query.ranking === 'price-collection' &&
                <div className="mb-[120px]">
                  <TopPriceColl />
                </div>
            }
            {
              router.query && router.query.ranking === 'popullar-collection' &&
                <div className="mb-[120px]">
                  <TopPopullarColl />
                </div>
            }
            {
              router.query && router.query.ranking === 'accounts' &&
                <div className="mb-[120px]">
                  <TopAccounts />
                </div>
            }
            {
              router.query && router.query.ranking === 'active-users' &&
                <div className="mb-[120px]">
                  <TopActiveUsers />
                </div>
            }
            {
              router.query && router.query.ranking === 'profit-ratios' &&
                <div className="mb-[120px]">
                  <TopProfitRatios />
                </div>
            }
            {
              router.query && router.query.ranking === 'price-popullar' &&
                <div className="mb-[120px] flex space-x-6">
                  <TopPrice />
                  <TopPopullar />
                </div>
            }
            
            
          </div>
        </div>
      </div>
      
      <H5Footer white={true} />
    </div>
  )
}

export default Ranking