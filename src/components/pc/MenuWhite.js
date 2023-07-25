import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';

const MenuItem = ({ children, text, onClick }) => {
  const router = useRouter()
  const [currentItem, setCurrentItem] = useState('')
  const [hoverIng, setHoverIng] = useState(false)

  useEffect(() => {
    if (router.pathname === '/') setCurrentItem('Home')
    if (router.pathname === '/faq') setCurrentItem('FAQ')
    if (router.pathname === '/community') setCurrentItem('Community')
  }, [router])


  return (
    <div style={{ fontFamily: 'Poppins-Bold'}}  className="text-base font-fbold text-[#3A3A3A] cursor-pointer transition-all"
      onClick={e => {
        onClick && onClick()
      }}
      onMouseOver={e => {
        setHoverIng(true)
      }}
      onMouseLeave={e => {
        setHoverIng(false)
      }}
    >
      <span className={` transition-all
        ${hoverIng ? 'menu-text' : ''}
      `}>{text || children}</span>
    </div>
)
}

const MenuWhite = () => {
  const [showBg, setShowBg] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 1) {
        setShowBg(false)
      } else {
        setShowBg(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="w-full bg-white fixed z-50 left-0 right-0 top-0 menu-title-white ">
      <div className="w-[1200px] mx-auto">
        <div className={`justify-center h-[104px] items-center hidden sm:flex transition-all
          ${showBg ? 'bg-opacity-95' : ''}
        `}>
          <div className='w-full max-w-[1200px] flex justify-between items-center'>
            <div className="flex items-center cursor-pointer"
              
            >
              <img src='/logo.png' className='w-8 h-8' 
                onClick={e => {
                  window.open('https://www.inferer.xyz/', '_blank')
                }}
              />
              <span className="num-text1 text-[24px] font-fmedium ml-5" style={{ fontFamily: 'Poppins-Medium'}}
                onClick={e => {
                  router.push('/')
                }}
              >Ranking</span>
            </div>
            
            <div className='text-base font-fbold text-[#3A3A3A] flex space-x-9 items-center'>
              {/* <MenuItem className="cursor-pointer hover:text-[#44488F]" onClick={()=>{
                router.push('/community')
              }}>
                  COMMUNITY
              </MenuItem>
              <MenuItem className="cursor-pointer hover:text-[#44488F]" onClick={()=>{
                router.push('/faq')
              }}>
                  FAQ
              </MenuItem> */}
              <div className='launch-btn p-[2px] cursor-pointer ' 
                onClick={()=>{
                    // router.push('/app')
                    window.open('https://chrome.google.com/webstore/detail/inferer/cihpoafnmmlancocngfdmdcfhkfjglnj', '_blank')
                }}>
                <div style={{ fontFamily: 'Poppins-Bold'}} className='bg-[#ffffff] hover:bg-transparent hover:text-white transition-all rounded-[3px] flex justify-center items-center h-full group '>
                  <span className="num-text1 inline-block group-hover:hidden">LAUNCH APP</span>
                  <span className=" hidden group-hover:inline-block">LAUNCH APP</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

  )
}

export default MenuWhite



