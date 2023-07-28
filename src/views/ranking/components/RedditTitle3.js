import React from "react";
import LazyImage from "../../../components/LazyImage";

const RedditTitle = () => {
  return (
    <div className="flex justify-center h-[211px] relative">
      <div className=" flex justify-center relative w-[1200px] pt-[102px]">
        <LazyImage src="/ranking/reddit_logo3.png" className="w-[40px] h-[40px] mr-3 relative top-[6px]" />
        <div className=" font-fbold text-[36px] reddit-title">Reddit Collectible Avatars</div>
        <LazyImage src="/ranking/circle2.png" className="w-[170px] h-[170px] absolute top-[0px] right-[0px]" />
        <LazyImage src="/ranking/circle3.png" className="w-[50px] h-[50px] absolute top-[140px] -left-[170px] left1440" />
      </div>
      <LazyImage src="/ranking/circle1.png" className="w-[102px] h-[102px] absolute top-[0px] left-[319px] -mt-[51px]" />
    </div>
  )
}

export default RedditTitle