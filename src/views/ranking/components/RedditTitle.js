import React from "react";
import LazyImage from "../../../components/LazyImage";

const RedditTitle = () => {
  return (
    <div className="flex justify-center h-[231px] relative">
      <div className=" flex items-center justify-center relative w-[1200px]">
        <LazyImage src="/ranking/t_left.png" className="w-[102px] h-[10px] mr-[10px]" />
        <LazyImage src="/ranking/reddit_logo.png" className="w-[40px] h-[40px] mr-3" />
        <div className=" font-fbold text-[36px] reddit-title">Reddit Collectible Avatars</div>
        <LazyImage src="/ranking/t_right.png" className="w-[102px] h-[10px] ml-[10px]" />
        <LazyImage src="/ranking/circle2.png" className="w-[170px] h-[170px] absolute top-[0px] right-[0px]" />
      </div>
      <LazyImage src="/ranking/circle1.png" className="w-[102px] h-[102px] absolute top-[0px] left-[319px] -mt-[51px]" />
    </div>
  )
}

export default RedditTitle