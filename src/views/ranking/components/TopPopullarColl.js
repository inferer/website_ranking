import RankWrap from './RankWrap';
import RankTitle from './RankTitle';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from './Table';
import LazyImage from '../../../components/LazyImage';
import { LineChartS } from './LineChart';

const TopPopullarColl = () => {
  return (
    <RankWrap>
      <img src='/ranking/circle5.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <RankTitle>Top Popular Avatar Collections</RankTitle>
      <Table>
        <TableHead>
          <TableHeadCell className="flex-1"><div className='pl-[36px]'>NFT Collection</div></TableHeadCell>
          <TableHeadCell className="w-[148px] ">Artist</TableHeadCell>
          <TableHeadCell className="w-[140px] justify-center">Inferer Score</TableHeadCell>
          <TableHeadCell className="w-[208px] justify-end">Volumn </TableHeadCell>
          <TableHeadCell className="w-[208px] justify-end">Price Trend</TableHeadCell>
          <TableHeadCell className="w-[151px] justify-end">Price</TableHeadCell>
        </TableHead>
        <TableBody>
          {
            new Array(7).fill('').map((n, key) => {
              return <TableRow key={key}>
                      <TableCell className="flex-1">
                        <div className=' font-dbold text-base italic w-9'>{key + 1}</div>
                        <LazyImage src="/ranking/demo.png" className="w-[30px] h-[40px] mr-2" />
                        <div>Meme Team (100)</div>
                      </TableCell>
                      <TableCell className="w-[148px] ">Fear...8855</TableCell>
                      <TableCell className="w-[140px] justify-center">
                        <div className=' menu-text text-[20px]'>4.7</div>
                      </TableCell>
                      <TableCell className="w-[208px] justify-end">
                        <div className='w-[130px]'>
                          <LineChartS 
                            id={"toppopullarcollvolumn" + key}
                            lineData={[
                              {name: '1', value: 178},
                              {name: '2', value: 138},
                              {name: '3', value: 238},
                              {name: '3', value: 178},
                              {name: '3', value: 118},
                              {name: '3', value: 298},
                              {name: '4', value: 58},
                            ]} 
                          />
                        </div>  
                      </TableCell>
                      <TableCell className="w-[208px] justify-end">
                        <div className='w-[130px]'>
                          <LineChartS 
                            id={"toppopullarcollprice" + key}
                            lineColor="#FF532E"
                            lineData={[
                              {name: '1', value: 178},
                              {name: '2', value: 138},
                              {name: '3', value: 238},
                              {name: '3', value: 178},
                              {name: '3', value: 118},
                              {name: '3', value: 198},
                              {name: '3', value: 58},
                            ]} 
                          />
                        </div>  
                      </TableCell>
                      <TableCell className="w-[151px] justify-end">
                        <div className='num-text2 text-[20px]'>12.99</div>
                      </TableCell>
                    </TableRow>
            })
          }
          
        </TableBody>
      </Table>
    </RankWrap>
  )
}

export default TopPopullarColl