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
        title = '/ranking/top_price.png'
      }
    }

    return title
  }, [router])

  return (
    <div className="flex justify-center h-[231px] relative">
      <div className=" flex items-center justify-center flex-col relative w-[1200px]">
        <img src={title} className="w-[807px] h-[54px]" />
        {
          router.query.ranking === 'price-popullar' && <img src="/ranking/top_popullar.png" className="w-[807px] h-[54px]" />
        }
        
        {/* <LazyImage src="/ranking/t_left2.png" className="w-[104px] h-[14px] mr-[10px]" />
        <LazyImage src="/ranking/reddit_logo2.png" className="w-[40px] h-[40px] mr-3" /> */}
        {/* <div className=" font-fbold text-[36px] reddit-title2">{ title }</div> */}
        {/* <LazyImage src="/ranking/t_right2.png" className="w-[104px] h-[14px] ml-[10px]" /> */}
        <LazyImage src="/ranking/circle2.png" className="w-[170px] h-[170px] absolute top-[0px] right-[0px]" />
        <LazyImage src="/ranking/circle3.png" className="w-[50px] h-[50px] absolute top-[140px] -left-[170px]" />
      </div>
      <LazyImage src="/ranking/circle1.png" className="w-[102px] h-[102px] absolute top-[0px] left-[319px] -mt-[51px]" />
    </div>
  )
}

export default RedditTitle2