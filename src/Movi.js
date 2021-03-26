import React from 'react';
import {wins} from './data/winnersTable'



export const Movi = () => {

    console.log('hello', wins.year2001)
    
    const grid = {
        height:'100vh',
        display: 'flex',
        // grid: 'repeat(19, 30px) / auto-flow ',
        // border: '1px solid black',
    }
    
    const column = {
        flexFlow: 'column',
        border: '1px solid gray',
    }

    const row = {
        flexFlow: 'column',
        // border: '1px solid gray',
    }
    
    
    return ( <div style={grid}>
        <div style={row}>
            {wins.map((year) => <div style={column}>{year.year}</div>)}
        </div>
        <div style={row}>
            {wins.map((year) => <div style={column}>{year.skateMen}</div>)}
        </div>
        <div style={row}>
            {wins.map((year) => <div style={column}>{year.skateWomen}</div>)}
        </div>
        <div style={row}>
            {wins.map((year) => <div style={column}>{year.miniramp}</div>)}
        </div>
        <div style={row}>
            {wins.map((year) => <div style={column}>{year.bmxParkMen}</div>)}
        </div>
        <div style={row}>
            {wins.map((year) => <div style={column}>{year.bmxParkWomen}</div>)}
        </div>
        <div style={row}>
            {wins.map((year) => <div style={column}>{year.bmxStreet}</div>)}
        </div>
        </div>)
    
}