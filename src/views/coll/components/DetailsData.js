import useModal from "@/hooks/useModal";
import LazyImage from "../../../components/LazyImage";
import { Like, UnLike, StarList, CollectIcon, ShareIcon, BuyIcon, MsgIcon } from './coms';
import { formatName, formatNumber } from '@/utils';
import { useRouter } from "next/router";
import WalletModal from "@/components/walletmodal/WalletModal";
import React, { useCallback, useEffect, useState } from "react";
import useActiveWeb3React from "@/hooks/useActiveWeb3React";
import { message } from 'antd';

import { useUserStore } from "@/state";


export const randomStar = () => {
  const idx = Math.floor(Math.random() * 3)
  return [3, 4, 5][idx]
}

export const randomCount = () => {
  return parseInt(String(Math.random() * 100)) + 100
}

export const randomCount20 = () => {
  return parseInt(String(Math.random() * 19)) + 1
}

export const randomCount5 = () => {
  return parseInt(String(Math.random() * 4)) + 1
}


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

const DetailsData = ({
  itemData
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { account } = useActiveWeb3React()
  const router = useRouter()
  const item = itemData

  const [ onPrresent, onDimiss ] = useModal(<WalletModal />)

  const userId = useUserStore(state => state.userId)
  const nftBaseInfo = useUserStore(state => state.nftBaseInfo)
  const collectNftColl = useUserStore(state => state.collectNftColl)
  const getNFTCollBaseInfo = useUserStore(state => state.getNFTCollBaseInfo)

  const [starNums, setStarNums] = useState(randomStar())
  const [isFav, setisFav] = useState(false)
  const [isLike, setisLike] = useState(false)
  const [isUnlike, setisUnlike] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [unlikeCount, setUnlikeCount] = useState(0)
  const [currentId, setCurrentId] = useState('')

  useEffect(() => {
    setisFav(nftBaseInfo.is_fav)
    setisLike(nftBaseInfo.is_like)
    setisUnlike(nftBaseInfo.is_unlike)
    setLikeCount((nftBaseInfo.likeCount || 0) + randomCount())
    setUnlikeCount((nftBaseInfo.unlikeCount || 0) + (itemData.price_rank < 5 ? randomCount5() : randomCount20()))
  }, [nftBaseInfo])


  const handleAction = useCallback(async (action) => {
    if (!account) {
      onPrresent()
      return
    }
    if (action === 'collect') {
      const res = await collectNftColl({
        "chainid": 1,
        "user_address": account,
        "column": "is_fav",
        "is_fav": !isFav,
        "id": nftBaseInfo.id || currentId,
        "nft_address": item.token_address
      })
      if (res.status === 200) {
        setisFav(!isFav)
        setCurrentId(res.data.id)
        if (!isFav) {
          messageApi.success('Collected')
        } else {
          messageApi.success('Canceled')
        }
        return
      }
    }
    
    console.log(action)

  }, [onPrresent, account])

  useEffect(() => {
    if (account) {
      onDimiss()
    }
  }, [onDimiss, account])

  useEffect(() => {
    if (itemData.token_address) {
      getNFTCollBaseInfo(itemData.token_address, userId)
    }
  }, [itemData, userId])


  return (
    <div className="top__bg w-[1196px] h-[503px] rounded-[6px] mt-[138px] flex justify-between relative">
      {contextHolder}
      <div className=" absolute w-[80px] h-[110px] border-[4px] border-white rounded-[6px] left-[40px] -top-[60px] overflow-hidden">
        <LazyImage src={itemData.series_img_url || "/addressan/images/demo.png"} className="w-full h-full" />
      </div>
      <div className="pl-10 w-[570px]">
        <div className="flex items-center mt-[79px]">
          <div className="text-[32px] font-fbold text-[#3F4664] leading-[42px]">{formatName(item.series_name)}</div>
          <LazyImage src="/addressan/reddit_logo.png" className="w-[36px] h-[36px] ml-3" />
        </div>
        
        <div className="mt-[58px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/link.png" className="w-6 h-6 mr-[6px]" />
            <TextMain>Contract</TextMain>
          </div>
          <div className="mt-2 flex items-center">
            <TextSub>{item.token_address}</TextSub>
            <LazyImage src="/addressan/copy.png" className="w-[16px] h-[16px] ml-[4px] cursor-pointer" />
          </div>
        </div>
        <div className="mt-[24px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/art.png" className="w-6 h-6 mr-[6px]" />
            <TextMain>Artist</TextMain>
          </div>
          <div className="mt-2 flex items-center">
            <TextSub>{item.series_creator}</TextSub>
          </div>
        </div>
        <div className="mt-[24px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/info.png" className="w-6 h-6 mr-[6px]" />
            <TextMain>Description</TextMain>
          </div>
          <div className="mt-2 flex items-center">
            <TextSub>{item.series_name}</TextSub>
          </div>
        </div>
      </div>
      <div className="pr-[50px]">
        <div className="flex justify-end mt-[54px]">
          <div className="flex">
            <Like 
              isLike={isLike}
              isUnlike={isUnlike}
              likeCount={likeCount}
            />
            <div className="line__v mx-[10px]"></div>
            <UnLike
              unlikeCount={unlikeCount}
              isLike={isLike}
              isUnlike={isUnlike}
            />
          </div>
        </div>
        <div className="flex justify-end mt-[58px]">
          {
            router.pathname === '/top-price-collection/[...address]' && 
            <div className="flex items-baseline">
              <div className="num-text1 text-[102px] font-fbold leading-[110%]">{Number(item.price).toFixed(2)}</div>
              <div className="num-text1 text-[56px] font-fbold ml-3">$</div>
            </div>
          }
          {
            router.pathname === '/top-popullar-collection/[...address]' && 
            <div className="flex items-baseline">
              <div className="num-text1 text-[102px] font-fbold leading-[110%]">{item.transaction_num}</div>
              <div className="num-text1 text-[56px] font-fbold ml-3">txs</div>
            </div>
          }
          
        </div>
        <div className="flex justify-end mt-[15px]">
          <div className="flex items-center">
            <StarList score={starNums} />
          </div>
        </div>
        <div className="flex justify-end mt-[120px]">
          <div className="flex items-center">
            <CollectIcon
              value={isFav} 
              onClick={() => {
                handleAction('collect')
              }}
            />
            <ShareIcon />
            <BuyIcon />
            <MsgIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsData