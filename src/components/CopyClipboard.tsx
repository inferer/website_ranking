import { Tooltip } from 'antd';
import React, { useState } from 'react'

export type CopyClipboardProps = {
  children: React.ReactNode
  onSuccess?: () => {}
  text: string
}

const CopyClipboard: React.FC<CopyClipboardProps> = ({ children, text, onSuccess }) => {
  const [open, setOpen] = useState(false)
  const [openHover, setOpenHover] = useState(false)
  const [tipText, setTipText] = useState('Click to copy')

  const copyText = (e: any) => {
    e.stopPropagation()
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(text).then(() => {
        setOpen(true)
        setTipText('Copied')
        onSuccess && onSuccess()
      })
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = text
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
    }
    setTimeout(() => {
      setOpenHover(false)
      setTimeout(() => {
        setTipText('Click to copy')
      }, 500)
    }, 1000)
  }
  // Click to copy
  const hoverShow = (show: boolean) => {
    setOpen(false)
    setOpenHover(show)
  }
  return (
    <Tooltip
      placement="top"
      open={openHover}
      title={tipText}
    >
      <span 
        onClick={e => copyText(e)} 
        onMouseEnter={() => hoverShow(true)}
        onMouseLeave={() => hoverShow(false)}
        className="">
        {children}
      </span>
    </Tooltip>
  )
}

export default CopyClipboard
