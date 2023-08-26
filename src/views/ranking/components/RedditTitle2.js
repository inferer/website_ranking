import React, { useMemo } from "react";
import LazyImage from "../../../components/LazyImage";
import { useRouter } from "next/router";

const RedditTitle2 = () => {
  const router = useRouter()

  const title = useMemo(() => {
    let title = ''
    if (router.query) {
      if (router.query.ranking === 'price-collection') {
        title = '/ranking/top_price_coll.png'
      }
      if (router.query.ranking === 'popullar-collection') {
        title = '/ranking/top_popullar_coll.png'
      }
      if (router.query.ranking === 'accounts') {
        title = '/ranking/top_accounts.png'
      }
      if (router.query.ranking === 'active-users') {
        title = '/ranking/top_active_users.png'
      }
      if (router.query.ranking === 'profit-ratios') {
        title = '/ranking/top_profit.png'
      }
      if (router.query.ranking === 'price-popullar') {
        title = '/ranking/top_price2.png'
      }
    }

    return title
  }, [router])

  return (
    <div className="flex justify-center h-[231px] relative">
      <div className=" flex items-center justify-center flex-col relative w-[1200px]">
        
        {
          router.query.ranking === 'price-popullar' ? 
            <div className="w-full flex space-x-6">
              <div className="w-full flex justify-center">
                <LazyImage src={title} className="w-[447px] h-auto " />
              </div>
              <div className="w-full flex justify-center">
                <LazyImage src="/ranking/top_popullar2.png" className="w-[520px] relative z-50 left-2 " />
              </div>
              
            </div> : 
            <LazyImage src={title} className="w-[807px] h-[54px]" />
        }
        <LazyImage src="/ranking/circle2.png" className="w-[170px] h-[170px] absolute top-[0px] right-[0px]" />
        <LazyImage src="/ranking/circle3.png" className="w-[50px] h-[50px] absolute top-[140px] -left-[170px]" />
      </div>
      <LazyImage src="/ranking/circle1.png" className="w-[102px] h-[102px] absolute top-[0px] left-[319px] -mt-[51px]" />
    </div>
  )
}

export default RedditTitle2