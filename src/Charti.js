import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis,ZAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import * as data from './data/winners'


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="desc"></p>
        <p className="label">{`${payload[1].value}`}</p>
        <p className="label">{`${payload[2].payload.sport}`}</p>
        <p className="label">{`${payload[2].value}`}</p>
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
      </div>
    );
  }
  return null;
};

const pic =()=> {
  console.log('hello')
  // return <img src='./data/pic'/>
  return <p>haaay</p>
}

// const CustomImage = ({ active, payload, label }) => {
//   console.log(active, payload, label)
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip">
//         <p className="desc"></p>
//         <p className="label">{`${payload[1].value}`}</p>
//         <p className="label">{`${payload[2].payload.sport}`}</p>
//         <p className="label">{`${payload[2].value}`}</p>
//         {/* <p className="intro">{getIntroOfPage(label)}</p> */}
//       </div>
//     );
//   }
//   return null;
// };

export const Charti = () => {
    return (
      <ResponsiveContainer>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 100,
            right: 100,
            bottom: 100,
            left: 100,
          }}
        >
          {/* <CartesianGrid horizontal={false}/> */}
          <YAxis type="number" dataKey="year" domain={[2001,2019]}  tickCount={19} interval={0}/>
          <XAxis type="number" dataKey="index" label={{value:"sports in generral"}} />
          <ZAxis type="category" dataKey="value" interval={0}/>
          <Tooltip content={CustomTooltip} cursor={{ strokeDasharray: '140 30' }} />
          {/* <Legend /> */}
          <Scatter name="skateMen" data={data.skateMen} />
          <Scatter name="skateFem" data={data.skateFem} fill="#f00" />
          <Scatter name="miniRamp" data={data.miniRamp} fill="#0f0" />
          <Scatter name="bmxParkMen" data={data.bmxParkMen} fill="#00f" />
          <Scatter name="bmxParkFem" data={data.bmxParkFem} fill="#8884d8" />
          <Scatter name="bmxParkFem" data={data.bmxStreet} fill="#8884d8" />
          <Scatter name="bmxParkFem" data={data.bmxFlatland} fill="#8884d8" />
          <Scatter name="bmxParkFem" data={data.mtbDowntownMen} fill="#8884d8" />
          <Scatter name="bmxParkFem" data={data.mtbDowntownFem} fill="#8884d8" />
          <Scatter name="bmxParkFem" data={data.fmbDirtJump} fill="#8884d8" />
          <Scatter name="bmxParkFem" data={data.breakDance} fill="#8884d8" />
          <Scatter name="bmxParkFem" data={data.basket3x3} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
    );
  }