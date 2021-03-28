import React, {useState,useEffect} from 'react';
import {wins} from './data/winnersTable'


export const Movi = () => {

    const [dataReversed] = useState(wins.reverse());

    // useEffect(()=>{
    //     const reverseData = wins.reverse();
    //     setImmediate(reverseData);
    // },[])

    const grid = {
        height:'100vh',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        margin: '10% 0 40% 0',
        border: '1px solid blue'
    }
    
    const column = {
        flexFlow: 'column',
    }

    const cell = {
        display: 'flex',
        flexFlow: 'column',
        padding: '20%',
        fontSize: '0.8em',
        fontWeight: 'bold',
        color: 'gray',
        width: '60px',
        height: '40px',
        // borderRight: '1px solid gray',
    }
    const cellBlack = {
        display: 'flex',
        flexFlow: 'column',
        padding: '20%',
        fontSize: '0.8em',
        fontWeight: 'bold',
        color: 'black',
        width: '60px',
        height: '40px',
        // borderBottom: '1px solid gray',
    }

    const imgSt = {
        width: '140%'
    }
    
    const generateImage = (url) => {
        console.log('url', url);
        return  url && <img style={imgSt} src={process.env.PUBLIC_URL + url} alt="*"/>;
    }

    const generateCells = () => {
        console.log('reverseData',dataReversed)
            return (
                <>
                <div style={column}>
                    <div style={cellBlack}></div>
                    {dataReversed.map((year) => <div style={cellBlack}>{year.year}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}>Skateboarding</div>
                    {dataReversed.map((year) => <div style={cell}>{generateImage(year.skateMenPic)}{year.skateMen}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}></div>
                    {dataReversed.map((year) => <div style={cell}>{generateImage(year.skateWomenPic)}{year.skateWomen}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}>Mini Ramp </div>
                    {dataReversed.map((year) => <div style={cell}>{generateImage(year.miniRampPic)}{year.miniramp}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}>BMX Park</div>
                    {dataReversed.map((year) => <div style={cell}>{year.bmxParkMen}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}></div>
                    {dataReversed.map((year) => <div style={cell}>{year.bmxParkWomen}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}>BMX Street</div>
                    {dataReversed.map((year) => <div style={cell}>{year.bmxStreet}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}>Flat Land</div>
                    {dataReversed.map((year) => <div style={cell}>{year.flatland}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}>MTB Downtown</div>
                    {dataReversed.map((year) => <div style={cell}>{year.mtbDowntownMen}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}></div>
                    {dataReversed.map((year) => <div style={cell}>{year.mtbDowntownWomen}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}>FMB Dirt Jump</div>
                    {dataReversed.map((year) => <div style={cell}>{year.fmbDirtJump}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}>Break Dance</div>
                    {dataReversed.map((year) => <div style={cell}>{year.breakDance}</div>)}
                </div>
                <div style={column}>
                    <div style={cellBlack}>Basket 3x3</div>
                    {dataReversed.map((year) => <div style={cell}>{year.basket3x3}</div>)}
                </div>
                </>
            )
    }

    return ( <div style={grid}>
       { generateCells()}
       {/* {old()} */}
        </div>)
    
}

