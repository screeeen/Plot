import { autoType, gray } from 'd3';
import React from 'react';
import {wins} from './data/winnersTable'



export const Movi = () => {

    console.log('hello', wins.year2001)
    
    const grid = {
        height:'100vh',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        marginTop: '20%',
        // grid: 'repeat(19, 30px) / auto-flow ',
        // border: '1px solid black',
    }
    
    const column = {
        // maxWidth: '60px',
        // maxHeight: '60px',
        flexFlow: 'column',
        // border: '1px solid gray',
    }

    const cell = {
        flexFlow: 'column',
        borderBottom: '1px solid gray',
        padding: '10px',
        fontSize: '0.8em',
        color: 'gray',
        width: '40px',
        height: '40px',
    }
    
    
    return ( <div style={grid}>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.year}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.skateMen}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.skateWomen}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.miniramp}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.bmxParkMen}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.bmxParkWomen}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.bmxStreet}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.flatland}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.mtbDowntownMen}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.mtbDowntownWomen}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.fmbDirtJump}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.breakDance}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>{year.basket3x3}</div>)}
        </div>
        </div>)
    
}