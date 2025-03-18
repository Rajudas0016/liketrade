// src/components/Chart.js
import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

export default function Chart({ data }) {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, { width: 800, height: 400 });
    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(data);
    return () => chart.remove();
  }, [data]);

  return <div ref={chartContainerRef} />;
}
