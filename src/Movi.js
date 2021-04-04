import React, {useState,useEffect} from 'react';
import {wins} from './data/winnersTable'
import {GridStyle,ColumnStyle,Name,CellStyle,ImgSt} from './StyledMovi'

export const Movi = () => {

    const [dataReversed,setData] = useState(null);

    useEffect(()=> {
        const rev = wins.reverse();
        setData(rev);
    },[])

    const generateImage = (url) => url && <ImgSt src={process.env.PUBLIC_URL + url} alt="*"/>;
    
    const showTooltip = (info) => console.log(info)

    const cell = (year,name,pic) => <CellStyle key={year+Math.random()} onMouseOver={()=>showTooltip(name)}>{generateImage(pic)}<Name>{name}</Name></CellStyle>
    

    const generateCells = () => {
        console.log('reverseData',dataReversed)
            return (
                <>
                <ColumnStyle>
                    <CellStyle></CellStyle>
                    {dataReversed.map((year) => <CellStyle key={year.year}>{year.year}</CellStyle>)}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>Sk8 Men</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.skateMen,year.skateMenPic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>Sk8 Women</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.skateWomen,year.skateWomenPic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>Mini Ramp</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.miniramp,year.miniRampPic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>BMX Park Men</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.bmxParkMen,year.bmxParkMenPic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>BMX Park Women</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.bmxParkWomen,year.bmxParkWomenPic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>BMX Street</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.bmxStreet,year.bmxStreetPic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>Flat Land</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.flatland,year.flatLandPic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>MTB Downtown Men</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.mtbDowntownMen,year.mtbDowntownMenPic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>MTB Downtown Women</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.mtbDowntownWomen,year.mtbDowntownWomenPic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>FMB Dirt Jump</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.fmbDirtJump,year.fmbDirtJumpPic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>Break Dance</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.breakDance,year.breakDancePic))}
                </ColumnStyle>
                <ColumnStyle>
                    <CellStyle>Basket 3x3</CellStyle>
                    {dataReversed.map((year) => cell(year.year,year.basket3x3,year.basket3x3Pic))}
                </ColumnStyle>
                </>
            )
    }

    return <GridStyle>{dataReversed && generateCells()}</GridStyle>
       
      
    
}

