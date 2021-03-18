import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis,ZAxis, Tooltip, ResponsiveContainer } from 'recharts';
import * as data from './data/winners'



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
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="skateMen" data={data.skateMen} fill="#8884d8" />
          <Scatter name="skateFem" data={data.skateFem} fill="#8884d8" />
          <Scatter name="miniRamp" data={data.miniRamp} fill="#8884d8" />
          <Scatter name="bmxParkMen" data={data.bmxParkMen} fill="#8884d8" />
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