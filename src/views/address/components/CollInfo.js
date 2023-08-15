import React, { useState } from "react";
import LazyImage from "../../../components/LazyImage";
import { openBrowser, toIpfsUrl } from '@/utils';
import { redditUserUrl } from '@/config';
import CopyClipboard from '@/components/CopyClipboard';

const CollInfo = ({
  itemData
}) => {
  return (
    <div className="mt-[120px] coll_bg h-[484px] rounded-xl flex relative">
      <LazyImage src="/addressan/circle4.png" className="w-[70px] h-[70px] absolute left-[20px] -top-[31px]" />
      <div className="flex-1">
        <div className="flex mt-[82px] mb-5 justify-center">
          <div className="relative w-[158px] h-[208px] flex items-center justify-center">
            <img src={toIpfsUrl(itemData.NFT_series_img_url || "/addressan/images/demo.png")} className=" w-full h-full" />
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
        <div className=" num-text1 font-fbold text-[32px] mt-3 text-ellipsis text-center">
          {itemData.NFT_series_name}
        </div>
        <div className="mt-[32px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/ticket.png" className="w-[20px] h-[20px] mr-[10px]" />
            <div className=" font-fmedium text-[16px] text-[#3F4664E5]">Contract</div>
          </div>
          <div className="flex items-center pl-[30px] mt-[10px]">
            <div className="text-[16px] text-[rgba(63,70,100,0.6)]">{itemData.token_address}</div>
            <CopyClipboard text={itemData.token_address}>
              <LazyImage src="/addressan/copy.png" className="w-[16px] h-[16px] ml-[6px] cursor-pointer" />
            </CopyClipboard>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/art.png" className="w-[20px] h-[20px] mr-[10px]" />
            <div className=" font-fmedium text-[16px] text-[#3F4664E5]">Artist</div>
          </div>
          <div className="flex items-center pl-[30px] mt-[10px]">
            <div className="text-[16px] text-[rgba(63,70,100,0.6)]">{itemData.NFT_creator}</div>
            <LazyImage src="/addressan/images/share.png" className="w-[16px] h-[16px] ml-[6px] cursor-pointer"
              onClick={e => {
                e.stopPropagation()
                openBrowser(redditUserUrl + itemData?.NFT_creator || '')
              }}
            />
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