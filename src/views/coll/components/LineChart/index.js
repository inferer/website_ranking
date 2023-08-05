import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

var option;

const LineChartT = ({
  lineData,
  id
}) => {
  const [serieData, setSerieData] = useState({ name: '', value: 0 })
  const [tipPos, setTipPos] = useState({ left: 0, top: 0, opacity: 0 })
  const [overTip, setOverTip] = useState(false)
  const [dataIndex, setdataIndex] = useState(-1)
  const [eventPos, setEventPos] = useState({ clientX: 0, clientY: 0 })

  const chartWrapRef = useRef(null)
  const chartTipRef = useRef(null)
  const chartInsRef = useRef(null)

  useEffect(() => {
    option = {
      grid: {
        left: -30,
        top: 10,
        bottom: 30,
        right: -30
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          fontSize: '20px',
          color: '#7F8792'
        }
      },
      yAxis: {
        type: 'value',
        show: false,
        // min: 120,
        // max: 250
      },
      series: [

      ]
    };
    if (id && lineData.series.length > 0) {
      var chartDom = document.getElementById(id);
      if (chartDom) {
        const minValue = Math.min(...lineData.series)
        const min = minValue - minValue / 5
        !chartInsRef.current && (chartInsRef.current = echarts.init(chartDom));
        option && chartInsRef.current.setOption({
          ...option,
          ...{ xAxis: { ...option.xAxis, data: lineData?.xAxis?.data || ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun'] } },
          ...{ yAxis: { ...option.yAxis, min: 0}},
          series: lineData.series
        });
        // myChart.getZr().on('mouseover', (params) => {
        //   console.log(params)
        // })
        chartInsRef.current.on('mouseover', (params) => {
          const originEvent = params.event?.event
          setEventPos({ clientX: originEvent.clientX, clientY: originEvent.clientY })
          setdataIndex(params.dataIndex)
          setSerieData({ name: params.name, value: Number(params.value) })
          const tipDom = chartTipRef.current
          const rect = tipDom?.getBoundingClientRect();
          const chartDom = chartWrapRef.current
          const chartRect = chartDom?.getBoundingClientRect()
          if (rect && chartRect && tipDom) {
            let left = 0
            left = originEvent.zrX - (rect?.width / 2)
            if (left < 0) {
              left = 0
            }
            if (left > chartRect?.width - rect?.width) {
              left = chartRect?.width - rect?.width
            }
            setTipPos({ left: left, top: originEvent.zrY - 60, opacity: 1 })
          }
        })
      }
    }

  }, [lineData, overTip, id])

  return (
    <div
      ref={chartWrapRef}
      className='chart-wrap relative'
    >
      <div id={id} className="" style={{ height: 155 }}></div>
      <div
        ref={chartTipRef}
        onMouseLeave={e => {
          e.stopPropagation()
          setTipPos({ left: '-200%', top: 12, opacity: 0 })
        }}
        className='chart-tip'
        style={{ left: tipPos.left, top: tipPos.top, opacity: tipPos.opacity }}>
          <div className='chart-tip2'>
            {`${serieData.name}: ${serieData.value} $`}
          </div>
        
      </div>
    </div>
  )
}

export default LineChartT

