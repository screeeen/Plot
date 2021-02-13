// import logo from './logo.svg';
import './App.css';
// import { Chart } from './ChartExample'
import Bar from './Bar'
import { PlacesBar } from './PlacesBar'
import { WinnersBar } from './WinnersBar'
import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import street from './data/street.csv'
import mini from './data/mini.csv'
import online from './data/online.csv'
import dataT from './data/dataT.csv'
import dataWinners from './data/ganadores.csv'


function App() {
  const ref = useRef();
  const [streetPlot, setStreetPlot] = useState(null);
  const [miniPlot, setMiniPlot] = useState(null);
  const [onlinePlot, setOnlinePlot] = useState(null);
  const [dataPlot, setDataPlot] = useState(null);
  const [winnersPlot, setDataWinners] = useState(null);

  const width = 960;
  const height = 600;
  const top = 20;
  const bottom = 180;
  const left = 60;
  const right = 0;

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
      }),
      d3.csv(dataWinners).then(function (data) {
        console.log(data)
        setDataWinners(data)
      })
    );

    readData();

    //format
    // const ocu = dataPlot.map(d => dataPlot.filter(x => x.Years === d.Years).length);
    // const newData = dataPlot;
    // newData.forEach((d, i) => { d['ocurrences'] = ocu[i] });
    // const sortedData = newData.sort((a, b) => a.Years - b.Years);

    // const OriginOcu = sortedData.map(d => sortedData.filter(x => x.Origin === d.Origin).length);
    // newData.forEach((d, i) => { d['ocurrencesOrigin'] = OriginOcu[i] });
    // console.log('newData', newData);
    // setDataPlot(newData)

  }, []);

  return (
    <div ref={ref}>
      {winnersPlot &&
        <WinnersBar
          data={winnersPlot}
          width={width}
          height={height}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
        />}
      {dataPlot &&
        <PlacesBar
          data={dataPlot}
          width={width}
          height={height}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
        />}
      {streetPlot &&
        <Bar
          data={streetPlot}
          width={width}
          height={height}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
        />}
      {miniPlot &&
        <Bar
          data={miniPlot}
          width={width}
          height={height}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
        />}
      {onlinePlot &&
        <Bar
          data={onlinePlot}
          width={width}
          height={height}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
        />}
      {dataPlot &&
        <Bar
          data={dataPlot}
          width={width}
          height={height}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
        />}
    </div>
  );
}

export default App;
