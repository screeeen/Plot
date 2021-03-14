import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { x: 100, y: 200, z: 200 },
//   { x: 120, y: 100, z: 260 },
//   { x: 170, y: 300, z: 400 },
//   { x: 140, y: 250, z: 280 },
//   { x: 150, y: 400, z: 500 },
//   { x: 110, y: 280, z: 200 },
// ];

  	 const data = [
		{year: 2001, winner:  "Pay Álvarez (ESP)"},
		{year: 2002, winner:  "Adrian Otero (ESP)"},
		{year: 2003, winner:  "Raphael Brunis (FRA)"},
		{year: 2004, winner:  "Marcos Chami (ARG)"},
		{year: 2005, winner:  "David Lougedo (ESP)"},
		{year: 2006, winner:  "Orlando Acosta (ESP)"},
		{year: 2007, winner:  "Milton Martínez (ARG)"},
		{year: 2008, winner:  "Milton Martínez (ARG)"},
		{year: 2009, winner:  "Roger Silva (BRA)"},
		{year: 2010, winner:  "Milton Martínez (ARG)"},
		{year: 2011, winner:  "Cristian Estrada (COL)"},
		{year: 2012, winner:  "Jorge Simoes (POR)"},
		{year: 2013, winner:  "Danny Leon (ESP)"},
		{year: 2014, winner:  "Kelvin Hoefler (BRA)"},
		{year: 2015, winner:  "Aurelien Giraud (FRA)"},
		{year: 2016, winner:  "Danny Leon (ESP)"},
		{year: 2017, winner:  "Aurelien Giraud (FRA)"},
		{year: 2018, winner:  "Gustavo Ribeiro (POR)"},
		{year: 2019, winner:  "Ivan Monteiro (BRA)}"},
       ]

export const Charti = () => {
    return (
    //   <ResponsiveContainer width="100%" height="100%">
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
          <CartesianGrid />
          <XAxis type="number" dataKey="year" name="year" domain={[2001,2019]} />
          <YAxis type="category" dataKey="winner" name="winner" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="competition" data={data} fill="#8884d8" />
        </ScatterChart>
    //   </ResponsiveContainer>
    );
  }