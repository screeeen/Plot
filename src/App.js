// import logo from './logo.svg';
import './App.css';
// import { Chart } from './ChartExample'
import Bar from './Bar'
import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import street from './data/street.csv'
import mini from './data/mini.csv'
import online from './data/online.csv'
import dataT from './data/dataT.csv'


function App() {
  const ref = useRef();
  const [streetPlot, setStreetPlot] = useState(null);
  const [miniPlot, setMiniPlot] = useState(null);
  const [onlinePlot, setOnlinePlot] = useState(null);
  const [dataPlot, setDataPlot] = useState(null);


  useEffect(() => {
    const readData = async () => (
      d3.csv(street).then(function (data) {
        setStreetPlot(data)
      }),
      d3.csv(mini).then(function (data) {
        setMiniPlot(data)
      }),
      d3.csv(online).then(function (data) {
        setOnlinePlot(data)
      }),
      d3.csv(dataT).then(function (data) {
        setDataPlot(data)
      })
    );

    readData();
  }, []);

  return (
    <div ref={ref}>
      {streetPlot &&
        <Bar
          data={streetPlot}
          width={600}
          height={600}
          top={20}
          bottom={180}
          left={30}
          right={0}
        />}
      {miniPlot &&
        <Bar
          data={miniPlot}
          width={600}
          height={600}
          top={20}
          bottom={180}
          left={30}
          right={0}
        />}
      {onlinePlot &&
        <Bar
          data={dataPlot}
          width={600}
          height={600}
          top={20}
          bottom={180}
          left={30}
          right={0}
        />}
      {dataPlot &&
        <Bar
          data={dataPlot}
          width={600}
          height={600}
          top={20}
          bottom={180}
          left={30}
          right={0}
        />}
    </div>
  );
}

export default App;
