
const RankWrap = ({ children, className = '' }) => {
  return (
    <div className={` w-full min-h-[585px] bg-white rounded-xl px-6 pt-6 pb-7 relative ${className}` } >
      { children }
    </div>
  )
}

export default RankWrap