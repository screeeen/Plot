import React, {useState,useEffect} from 'react';
import {wins} from './data/winnersTable'


export const Movi = () => {

    const grid = {
        height:'100vh',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        margin: '10% 0 20% 0',
    }
    
    const column = {
        flexFlow: 'column',
    }

    const cell = {
        flexFlow: 'column',
        padding: '10px',
        fontSize: '0.8em',
        color: 'gray',
        width: '60px',
        height: '40px',
    }

    const imgSt = {
        width: '100%'
    }
    
    const generateImage = (url) => {
        console.log('url', url);
        return  url && <img style={imgSt} src={process.env.PUBLIC_URL + url} alt="*"/>;
    }

    
    
    return ( <div style={grid}>
        <div style={column}>
            {wins.reverse().map((year) => <div style={cell}>{year.year}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>
                {/* {year.skateMen} */}
                {generateImage(year.skateMenPic)}
                </div>)}
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
            {wins.map((year) => <div style={cell}>
                {/* {year.basket3x3} */}
                {generateImage(year.basket3x3pic)}
                </div>)}
        </div>
        </div>)
    
}