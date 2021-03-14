import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis,ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {skateFem,skateMen,miniRamp,bmxParkMen,bmxParkFem} from './data/winners'



export const Charti = () => {

    return (
      <ResponsiveContainer>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {/* <CartesianGrid horizontal={false}/> */}
          <YAxis type="number" dataKey="year" domain={[2001,2019]}  tickCount={19} interval={0}/>
          <XAxis type="number" dataKey="index" label={{value:"skate men"}} />
          <ZAxis type="category" dataKey="skateMen" interval={0}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="skateMen" data={skateMen} fill="#8884d8" />
          <Scatter name="skateFem" data={skateFem} fill="#8884d8" />
          <Scatter name="miniRamp" data={miniRamp} fill="#8884d8" />
          <Scatter name="bmxParkMen" data={bmxParkMen} fill="#8884d8" />
          <Scatter name="bmxParkFem" data={bmxParkFem} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
    );
  }