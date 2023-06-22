import LazyImage from "../../../components/LazyImage";
import { Like, UnLike, StarList, CollectIcon, ShareIcon, BuyIcon, MsgIcon } from '../../coll/components/coms';


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

const DetailsData = () => {
  return (
    <div className="top__bg w-[1196px] h-[499px] rounded-[6px] mt-[138px] flex justify-between relative">
      <div className=" absolute w-[80px] h-[110px] border-[4px] border-white rounded-[6px] left-[40px] -top-[60px] overflow-hidden">
        <LazyImage src="/addressan/images/demo.png" className="w-full h-full" />
      </div>
      <div className="pl-10 w-[570px]">
        <div className="flex items-center mt-[79px]">
          <div className="text-[32px] font-fbold text-[#3F4664] leading-[42px]">Meme Team (100) #8288</div>
          <LazyImage src="/addressan/reddit_logo.png" className="w-[36px] h-[36px] ml-3" />
        </div>
        <div className="mt-[58px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/id.png" className="w-6 h-6 mr-[6px]" />
            <TextMain>TokenID</TextMain>
          </div>
          <div className="mt-2 flex items-center">
            <TextSub>8283</TextSub>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/link.png" className="w-6 h-6 mr-[6px]" />
            <TextMain>Contract</TextMain>
          </div>
          <div className="mt-2 flex items-center">
            <TextSub>0x231d3559aa848bf10366fb9868590f01d34bf240</TextSub>
            <LazyImage src="/addressan/copy.png" className="w-[16px] h-[16px] ml-[4px] cursor-pointer" />
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/art.png" className="w-6 h-6 mr-[6px]" />
            <TextMain>Chain</TextMain>
          </div>
          <div className="mt-2 flex items-center">
            <TextSub>Polygon</TextSub>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex items-center">
            <LazyImage src="/addressan/info.png" className="w-6 h-6 mr-[6px]" />
            <TextMain>Creator Earnings</TextMain>
          </div>
          <div className="mt-2 flex items-center">
            <TextSub>5%</TextSub>
          </div>
        </div>
      </div>
      <div className="pr-[50px]">
        <div className="flex justify-end mt-[54px]">
          <div className="flex">
            <Like likeCount={888} />
            <div className="line__v mx-[10px]"></div>
            <UnLike unlikeCount={24} />
          </div>
        </div>
        <div className="flex justify-end mt-[58px]">
          <div className="flex items-baseline">
            <div className="menu-text text-[102px] font-fbold leading-[110%]">678</div>
            <div className="menu-text text-[56px] font-fbold ml-3">txs</div>
          </div>
        </div>
        <div className="flex justify-end mt-[15px]">
          <div className="flex items-center">
            <StarList score={4} />
          </div>
        </div>
        <div className="flex justify-end mt-[120px]">
          <div className="flex items-center">
            <CollectIcon value={0} />
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