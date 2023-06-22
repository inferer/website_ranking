import React, { useEffect, useState } from 'react'

const LikePng = '/addressan/images/dup.png';
const Like1Png = '/addressan/images/dup1.png';
const DownPng = '/addressan/images/ddown.png';
const Down2Png = '/addressan/images/dup2.png';
const Star2Png = '/addressan/images/star2.png';
const Star1Png = '/addressan/images/star1.png';
const CollectPng = '/addressan/images/shoucang.png';
const Collect2Png = '/addressan/images/shoucang_active.png';
const SharePng = '/addressan/images/share2.png';
const Share2Png = '/addressan/images/share2_active.png';
const BuyPng = '/addressan/images/buy.png';
const Buy2Png = '/addressan/images/buy_active.png';
const MsgPng = '/addressan/images/msg.png';
const Msg2Png = '/addressan/images/msg_active.png';
const InfoPng = '/addressan/images/info.png';


export const Like = ({
  likeCount,
  isLike,
  isUnlike,
  onClick
}) => {
    const [hover, setHover] = useState(false)
    const handleHover = () => {
      !isUnlike && setHover(true)
    }
    const handleLeave = () => {
      !isUnlike && setHover(false)
    }
    return (
      <div
        onClick={e => {
          e.stopPropagation()
          onClick && onClick()
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className={`flex items-center cursor-pointer like-wrap ${isLike || hover ? 'is-like' : ''} ${isUnlike ? ' opacity-70' : ''}`}>
        <img src={isLike || hover ? Like1Png : LikePng} alt="" className='w-[28px] h-[28px] mr-[4px]' />
        <div className={`menu-text text-[22px] ${isLike || hover ? 'up' : ''}`}>{likeCount}</div>
      </div>
    )
  }


export const UnLike = ({
  unlikeCount,
  isLike,
  isUnlike,
  onClick
}) => {
    const [hover, setHover] = useState(false)
    const handleHover = () => {
      !isLike && setHover(true)
    }
    const handleLeave = () => {
      !isLike && setHover(false)
    }
    return (
      <div
        onClick={e => {
          e.stopPropagation()
          onClick && onClick()
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className={`flex items-center cursor-pointer like-wrap ${isUnlike || hover ? 'is-like' : ''} ${isLike ? ' opacity-70' : ''}`}>
        <img src={isUnlike || hover ? Down2Png : DownPng} alt="" className='w-[28px] h-[28px] mr-[4px]' />
        <div className={`menu-text text-[22px] text ${isUnlike || hover ? 'down' : ''}`}>{unlikeCount}</div>
      </div>
    )
  }

export const StarList = ({
  score
}) => {

    return (
      <div className='flex items-center star-list'>
        {
          new Array(5).fill('').map((item, index) => {
            return <img key={index} className='w-[28px] h-[28px] ml-[4px]' src={index < score ? Star1Png : Star2Png} alt="" />
          })
        }
      </div>
    )
  }

export const CollectIcon = ({
  value,
  onClick
}) => {
    const [active, setActive] = useState(false)
    useEffect(() => {
      setActive(value)
    }, [value])
    return (
      <div className='icon-wrap cursor-pointer shrink-0 ml-[60px]'
        onClick={e => {
          e.stopPropagation()
          onClick && onClick()
        }}
        onMouseEnter={() => setActive(value || true)}
        onMouseLeave={() => setActive(value || false)}
      >
        <img className='w-[42px] h-[42px]' src={active ? Collect2Png : CollectPng} alt="" />
      </div>
    )
  }

export const ShareIcon = ({
  onClick
}) => {
    const [active, setActive] = useState(false)
    return (
      <div className='icon-wrap cursor-pointer shrink-0 ml-[60px]'
        onClick={e => {
          e.stopPropagation()
          onClick && onClick()
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img className='w-[42px] h-[42px]' src={active ? Share2Png : SharePng} alt="" />
      </div>
    )
  }

export const BuyIcon = ({
  onClick
}) => {
    const [active, setActive] = useState(false)
    return (
      <div className='icon-wrap cursor-pointer shrink-0 ml-[60px]'
        onClick={e => {
          e.stopPropagation()
          onClick && onClick()
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img className='w-[42px] h-[42px]' src={active ? Buy2Png : BuyPng} alt="" />
      </div>
    )
  }

export const MsgIcon = ({
  onClick
}) => {
    const [active, setActive] = useState(false)
    return (
      <div className='icon-wrap cursor-pointer shrink-0 ml-[60px]'
        onClick={e => {
          e.stopPropagation()
          onClick && onClick()
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img className='w-[42px] h-[42px]' src={active ? Msg2Png : MsgPng} alt="" />
      </div>
    )
  }
export const TTitle = ({
  text,
  tips
}) => {
    const [active, setActive] = useState(false)
    return (
      <div className=' font-bold text-sm flex items-center relative'
      >
        <div className='' style={{ lineHeight: '18px' }}>{text}</div>
        {
          tips && <img src={InfoPng} className="ml-1 w-3 h-3 cursor-pointer" alt=""
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          />
        }
        {
          active && <div className='tips-wrap'>
            {tips}
          </div>
        }

      </div>
    )
  }