import React, { useState } from "react";
import LazyImage from "../../../components/LazyImage";

const TextMain = ({ children }) => {
  return (
    <div className="text-[20px] font-fbold text-[#3F4664] leading-[26px]">{children}</div>
  )
}
const TextSub = ({ children }) => {
  return (
    <div className="text-[rgba(63,70,100,0.6)] text-[16px] leading-6">
      {children}
    </div>
  )
}


const CollInfo = () => {
  const [infererLabels] = useState([
    {label_name: 'Defi Staker'},
    {label_name: 'Defi Staker'},
    {label_name: 'ENS User'},
    {label_name: 'Top NFT Holders'},
    {label_name: 'Defi Staker'},
    {label_name: 'Opensea Trader'},
  ])

  return (
    <div className="mt-[120px] coll_bg h-[484px] rounded-xl flex relative">
      <LazyImage src="/addressan/circle4.png" className="w-[62px] h-[62px] absolute left-[11px] -top-[31px]" />
      <div className="flex-1">
        <div className="flex mt-[82px] mb-5 justify-center">
          <div className="relative w-[132px] h-[174px] flex items-center justify-center">
            <LazyImage src="/addressan/images/demo.png" className=" w-full h-full" />
            {/* <LazyImage src="/addressan/avatar_bg.png" className="w-[132px] h-[174px] absolute left-0 top-0" /> */}
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <LazyImage src="/addressan/left.png" className=" w-[16px] h-[16px]" />
          <div className="w-10 border-b border-[#2C76FF] mx-[18px]"></div>
          <div className=" font-fmedium text-[24px] text-[#2C76FF]">Series</div>
          <div className="w-10 border-b border-[#2C76FF] mx-[18px]"></div>
          <LazyImage src="/addressan/right.png" className=" w-[16px] h-[16px]" />
        </div>
        
      </div>
      <div className="w-[755px] px-[64px] pr-[98px] pt-[30px] pb-[70px]">
        <div className="flex justify-center num-text1 font-fbold text-[32px] mt-3">
          Meme Team (100)
        </div>
        <div className="mt-[32px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/ticket.png" className="w-[20px] h-[20px] mr-[10px]" />
            <div className=" font-fmedium text-[16px] text-[#3F4664E5]">Contract</div>
          </div>
          <div className="flex items-center pl-[30px] mt-[10px]">
            <div className="text-[16px] text-[rgba(63,70,100,0.6)]">0x231d3559aa848bf10366fb9868590f01d34bf240</div>
            <LazyImage src="/addressan/copy.png" className="w-[16px] h-[16px] ml-[6px]" />

          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/art.png" className="w-[20px] h-[20px] mr-[10px]" />
            <div className=" font-fmedium text-[16px] text-[#3F4664E5]">Artist</div>
          </div>
          <div className="flex items-center pl-[30px] mt-[10px]">
            <div className="text-[16px] text-[rgba(63,70,100,0.6)]">Canetoonist</div>
            <LazyImage src="/addressan/images/share.png" className="w-[16px] h-[16px] ml-[6px]" />
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/info.png" className="w-[20px] h-[20px] mr-[10px]" />
            <div className=" font-fmedium text-[16px] text-[#3F4664E5]">Description</div>
          </div>
          <div className="flex items-center pl-[30px] mt-[10px]">
            <div className="text-[16px] text-[rgba(63,70,100,0.6)] leading-6">
            The heroes from old comics may be amazing and incredible, but the galactic-scaled villains had truly magnetic personalities. In this issue, witness the nefarious might of The Downvoter! 
            </div>
          </div>
        </div>
         
      </div>
    </div>
  )
}

export default CollInfo