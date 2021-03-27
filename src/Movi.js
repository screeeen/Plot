import { reverse } from 'd3';
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
        display: 'flex',
        flexFlow: 'column',
        padding: '20px',
        fontSize: '0.8em',
        fontWeight: 'bold',
        color: 'gray',
        width: '60px',
        height: '40px',
        borderRight: '1px solid gray',
        
    }

    const imgSt = {
        width: '140%'
    }
    
    const generateImage = (url) => {
        console.log('url', url);
        return  url && <img style={imgSt} src={process.env.PUBLIC_URL + url} alt="*"/>;
    }

    const generateCells = () => {
        const reverseData = wins.reverse();
        console.log('reverseData',reverseData)
        
        return reverseData.map((year) => {
            return (
                <>
                <div style={column}>
                    <div style={cell}>{year.year}</div>
                </div>
                <div style={column}>
                    <div style={cell}>{year.skateMen}</div>
                </div>
                </>
            )
        });
    }
    
    
    
    return ( <div style={grid}>

       {/* { generateCells()} */}
       <div style={column}>
            {wins.reverse().map((year) => <div style={cell}>{year.year}</div>)}
        </div>
        <div style={column}>
            {wins.map((year) => <div style={cell}>
                {generateImage(year.skateMenPic)}
                {year.skateMen}
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

