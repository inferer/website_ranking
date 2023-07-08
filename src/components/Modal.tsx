import React from "react";

export type ModalProps = {
  type?: string,
  title?: string,
  status?: string,
  children?: React.ReactNode,
  onDismiss?: (e:any) => void
}

const ModalWrap: React.FC<ModalProps> = ({
  type = "normal",
  title,
  status = 'pending',
  children,
  onDismiss
}) => {
  return (
    <div className={`bg-[#111214] rounded-[3vw] sm:rounded-[24px] overflow-hidden w-[86.666vw] sm:w-[510px] sm:min-h-[292px] border-2  
      ${type === 'primary' ? ' border-[#111214]' : ' border-[#404040]'}
    `}>
      <div className={`relative font-semibold flex items-center h-[13.3333vw] sm:h-[75px] pl-[30px]
        ${type === 'primary' ? ' text-[#ffffff] bg-[#111214] text-[24px]' : ' text-white bg-[#161616] text-[4.8vw] sm:text-[32px]'}
      `}>
        { title }
        <div className=" cursor-pointer absolute right-[5.333vw] top-[4.333vw] sm:right-[24px] sm:top-[24px]"
          onClick={(e) => {
            onDismiss && onDismiss(e)
          }}
        >
          <img src="/images/close.png" className="w-[4.266vw] sm:w-[32px] sm:h-[32px]" alt="" />
        </div>
      </div>
      <div className="min-h-[214px]">
      { children }
      </div>
    </div>
  )
}

export default ModalWrap