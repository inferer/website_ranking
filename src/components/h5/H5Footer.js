import React, { useEffect, useState } from "react";

const H5Footer = ({
  white = false
}) => {
  return (
    <div className={`
      h-[8vw]  px-[5.3333vw] sm:px-0 flex items-center justify-center bottom-0 w-full transition-all duration-300
      sm:h-[60px]
      ${ white ? 'bg-[#FFFFFF] text-[#17171A]' : 'bg-[#0A0917] text-[#646787]'}
    `} >
      <div className="w-full sm:max-w-[1200px] flex justify-between">
      <div className=" text-[1.8667vw] font-fmedium sm:text-[14px]">Made by Inferer Labs</div>
      <div className=" text-[1.8667vw] font-fmedium sm:text-[14px]">Thanks to Platon</div>
      </div>
    </div>
  )
}

export default H5Footer