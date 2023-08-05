import useModal from "@/hooks/useModal";
import { Like, UnLike, StarList, CollectIcon, ShareIcon, BuyIcon, MsgIcon } from './coms';
import { openBrowser, formatNumber } from '@/utils';
import { useRouter } from "next/router";
import WalletModal from "@/components/walletmodal/WalletModal";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useActiveWeb3React from "@/hooks/useActiveWeb3React";
import { message } from 'antd';
import { redditShareUrl, redditBuyUrl, redditChatUrl } from '@/config'

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


const DetailsDataRight = ({
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

  const [starNums, setStarNums] = useState(0)
  const [isFav, setisFav] = useState(false)
  const [isLike, setisLike] = useState(false)
  const [isUnlike, setisUnlike] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [unlikeCount, setUnlikeCount] = useState(0)
  const [currentId, setCurrentId] = useState('')

  const isColl = useMemo(() => {
    if (router.pathname === '/top-price-collection/[...address]' || router.pathname === '/top-popullar-collection/[...address]') {
      return true
    }
    return false
  }, [router])

  useEffect(() => {
    setisFav(nftBaseInfo.is_fav)
    setisLike(nftBaseInfo.is_like)
    setisUnlike(nftBaseInfo.is_unlike)
    setLikeCount((nftBaseInfo.likeCount || 0))
    setUnlikeCount((nftBaseInfo.unlikeCount || 0))
  }, [nftBaseInfo])

  useEffect(() => {
    setStarNums(randomStar())
  }, [])

  const handleAction = useCallback(async (action) => {
    if (!account) {
      onPrresent()
      return
    }
    const token_id = router.query.address[1] || 0
    if (action === 'collect') {
      const res = await collectNftColl({
        "chainid": 1,
        "user_address": account,
        "column": "is_fav",
        "is_fav": !isFav,
        "id": nftBaseInfo.id || currentId,
        "nft_address": item.token_address,
        "token_id": token_id
      })
      if (res.status === 200) {
        setisFav(!isFav)
        setCurrentId(res.data.id)
        if (!isFav) {
          messageApi.success('Collected')
        } else {
          messageApi.success('Canceled')
        }
      }
      return
    }
    if (action === 'like' && !isUnlike) {
      const res = await collectNftColl({
        "chainid": 1,
        "user_address": account,
        column: 'is_like',
        is_like: !isLike,
        "id": nftBaseInfo.id || currentId,
        "nft_address": item.token_address,
        "token_id": token_id
      })
      if (res.status === 200) {
        setLikeCount(isLike ? likeCount - 1 : likeCount + 1)
        setisLike(!isLike)
        setCurrentId(res.data.id)
        messageApi.success('Success')
        
      }
    }
    if (action === 'unlike' && !isLike) {
      const res = await collectNftColl({
        "chainid": 1,
        "user_address": account,
        column: 'is_unlike',
        is_unlike: !isUnlike,
        "id": nftBaseInfo.id || currentId,
        "nft_address": item.token_address,
        "token_id": token_id
      })
      if (res.status === 200) {
        setUnlikeCount(isUnlike ? unlikeCount - 1 : unlikeCount + 1)
        setisUnlike(!isUnlike)
        setCurrentId(res.data.id)
        messageApi.success('Success')
        
      }
    }
    
  }, [onPrresent, account])

  useEffect(() => {
    if (account) {
      onDimiss()
    }
  }, [onDimiss, account])

  useEffect(() => {
    if (itemData.token_address && router.query.address) {
      getNFTCollBaseInfo(router.query.address[1] || 0, itemData.token_address, userId)
    }
  }, [itemData, userId, router.query.address])


  return (
    <div className="pr-[50px]">
      {contextHolder}
      <div className="flex justify-end mt-[54px]">
        <div className="flex">
          <Like 
            isLike={isLike}
            isUnlike={isUnlike}
            likeCount={likeCount}
            onClick={() => handleAction('like')}
          />
          <div className="line__v mx-[10px]"></div>
          <UnLike
            unlikeCount={unlikeCount}
            isLike={isLike}
            isUnlike={isUnlike}
            onClick={() => handleAction('unlike')}
          />
        </div>
      </div>
      {
        isColl && 
        <div className="flex justify-end mt-[58px]">
          {
            router.pathname === '/top-price-collection/[...address]' && 
            <div className="flex flex-col items-end">
              <div className="flex items-baseline">
                <div className="num-text1 text-[56px] font-fbold mr-2">$</div>
                <div className="num-text1 text-[102px] font-fbold leading-[110%]">{Number(item.price || 0).toFixed(2)}</div>
              </div>
              <div className="w-[272px] h-[67px] rounded-[5px] ceiling-floor-bg flex justify-between items-center px-5 mt-5">
                <div className="text-right">
                  <div className="text-[20px] text-[rgba(63,70,100,1)] font-fbold">${Number(item.max_price || 0).toFixed(2)}</div>
                  <div className="text-[16px] text-[rgba(63,70,100,0.6)] font-fmedium">ceiling price</div>
                </div>
                <img src="/addressan/h-line.png" className="w-[2px] h-[39px]" />
                <div className="text-right">
                  <div className="text-[20px] text-[rgba(63,70,100,1)] font-fbold">${Number(item.min_price || 0).toFixed(2)}</div>
                  <div className="text-[16px] text-[rgba(63,70,100,0.6)] font-fmedium">floor price</div>
                </div>
              </div>
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
      }
      {
        !isColl && 
        <div className="flex justify-end mt-[58px]">
          <div className="flex items-baseline">
          {
            router.pathname === "/top-price/[...address]" &&
            <>
              <div className="num-text1 text-[102px] font-fbold leading-[110%]">{formatNumber(Number(itemData.USD_price || 0))}</div>
              <div className="num-text1 text-[56px] font-fbold ml-3">$</div>
            </>
          }
          {
            router.pathname === "/top-popullar/[...address]" &&
            <>
              <div className="num-text1 text-[102px] font-fbold leading-[110%]">{itemData.nums}</div>
              <div className="num-text1 text-[56px] font-fbold ml-3">txs</div>
            </>
          }
          </div>
        </div>
      }
      {
        router.pathname !== '/top-price-collection/[...address]' &&  <div className="flex justify-end mt-[15px]">
        <div className="flex items-center">
          <StarList score={starNums} />
        </div>
      </div>
      }
     
      <div className={`flex justify-end ${isColl && router.pathname === '/top-price-collection/[...address]' ? ' mt-[71px]' : ' mt-[120px]'}`}>
        <div className="flex items-center">
          <CollectIcon
            value={isFav} 
            onClick={() => {
              handleAction('collect')
            }}
          />
          <ShareIcon 
            onClick={() => {
              openBrowser(redditShareUrl + (itemData?.NFT_creator || itemData?.series_creator || '') + '/submit')
            }}
          />
          <BuyIcon 
            onClick={() => {
              openBrowser(redditBuyUrl + `${itemData.token_address}/${itemData?.token_id || 0}`)
            }}
          />
          <MsgIcon 
            onClick={() => {
              openBrowser(redditChatUrl + `${itemData?.NFT_creator || itemData?.series_creator}`)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default DetailsDataRight