import React, {useState,useEffect} from 'react';
import {wins} from './data/winnersTable'


export const Movi = () => {

    const [dataReversed] = useState(wins.reverse());

    // useEffect(()=>{
    //     const reverseData = wins.reverse();
    //     setImmediate(reverseData);
    // },[])

    const gridStyle = {
        height:'100vh',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        margin: '10% 0 40% 0',
        border: '1px solid blue'
    }
    
    const columnStyle = {
        flexFlow: 'column',
    }

    const cellStyle = {
        display: 'flex',
        flexFlow: 'column',
        padding: '30% 20%',
        fontSize: '0.8em',
        fontWeight: 'bold',
        color: 'gray',
        width: '60px',
        height: '40px',
        // borderRight: '1px solid gray',
    }
    const cellYear = {
        display: 'flex',
        flexFlow: 'column',
        padding: '30% 20%',
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'slateGray',
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
        width: '140%',
        filter: 'grayscale(100%) drop-shadow(2px 2px 1px gray)',
    }
    
    const generateImage = (url) => {
        console.log('url', url);
        return  url && <img style={imgSt} src={process.env.PUBLIC_URL + url} alt="*"/>;
    }

    const showTooltip = (info) => console.log(info)

    const cell = (name,pic) => <div onMouseOver={()=>showTooltip(name)} style={cellStyle}>{generateImage(pic)}</div>
    

    const generateCells = () => {
        console.log('reverseData',dataReversed)
            return (
                <>
                <div style={columnStyle}>
                    <div style={cellBlack}></div>
                    {dataReversed.map((year) => <div style={cellYear}>{year.year}</div>)}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}>Skateboarding</div>
                    {dataReversed.map((year) => cell(year.skateMen,year.skateMenPic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}></div>
                    {dataReversed.map((year) => cell(year.skateWomen,year.skateWomenPic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}>Mini Ramp </div>
                    {dataReversed.map((year) => cell(year.miniramp,year.miniRampPic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}>BMX Park</div>
                    {dataReversed.map((year) => cell(year.bmxParkMen,year.bmxParkMenPic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}></div>
                    {dataReversed.map((year) => cell(year.bmxParkWomen,year.bmxParkWomenPic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}>BMX Street</div>
                    {dataReversed.map((year) => cell(year.bmxStreet,year.bmxStreetPic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}>Flat Land</div>
                    {dataReversed.map((year) => cell(year.flatland,year.flatLandPic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}>MTB Downtown</div>
                    {dataReversed.map((year) => cell(year.mtbDowntownMen,year.mtbDowntownMenPic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}></div>
                    {dataReversed.map((year) => cell(year.mtbDowntownWomen,year.mtbDowntownWomenPic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}>FMB Dirt Jump</div>
                    {dataReversed.map((year) => cell(year.fmbDirtJump,year.fmbDirtJumpPic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}>Break Dance</div>
                    {dataReversed.map((year) => cell(year.breakDance,year.breakDancePic))}
                </div>
                <div style={columnStyle}>
                    <div style={cellBlack}>Basket 3x3</div>
                    {dataReversed.map((year) => cell(year.basket3x3,year.basket3x3Pic))}
                </div>
                </>
            )
    }

    return ( <div style={gridStyle}>
       { generateCells()}
       {/* {old()} */}
        </div>)
    
}

