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
    
    const showTooltip = (info) => console.log(info);

    const printName = (name)=> name && <Name>{name}</Name>

    const cell = (i,name,pic) => <CellStyle key={i} color={i} onMouseOver={()=>showTooltip(name)}>{generateImage(pic)}{printName(name)}</CellStyle>
    

    const generateCells = () => {
        console.log('reverseData',dataReversed)
            return (
                <>
                <ColumnStyle>
                    <CellStyle></CellStyle>
                    {dataReversed.map((year,i) => <CellStyle key={i}>{year.year}</CellStyle>)}
                </ColumnStyle>
                <ColumnStyle color={0}>
                    <CellStyle>Sk8 Men</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.skateMen,year.skateMenPic))}
                </ColumnStyle>
                <ColumnStyle color={1}>
                    <CellStyle>Sk8 Women</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.skateWomen,year.skateWomenPic))}
                </ColumnStyle>
                <ColumnStyle color={0}>
                    <CellStyle>Mini Ramp</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.miniramp,year.miniRampPic))}
                </ColumnStyle>
                <ColumnStyle color={1}>
                    <CellStyle>BMX Park Men</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.bmxParkMen,year.bmxParkMenPic))}
                </ColumnStyle>
                <ColumnStyle color={0}>
                    <CellStyle>BMX Park Women</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.bmxParkWomen,year.bmxParkWomenPic))}
                </ColumnStyle>
                <ColumnStyle color={1}>
                    <CellStyle>BMX Street</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.bmxStreet,year.bmxStreetPic))}
                </ColumnStyle>
                <ColumnStyle color={0}>
                    <CellStyle>Flat Land</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.flatland,year.flatLandPic))}
                </ColumnStyle>
                <ColumnStyle color={1}>
                    <CellStyle>MTB Downtown Men</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.mtbDowntownMen,year.mtbDowntownMenPic))}
                </ColumnStyle>
                <ColumnStyle color={0}>
                    <CellStyle>MTB Downtown Women</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.mtbDowntownWomen,year.mtbDowntownWomenPic))}
                </ColumnStyle>
                <ColumnStyle color={1}>
                    <CellStyle>FMB Dirt Jump</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.fmbDirtJump,year.fmbDirtJumpPic))}
                </ColumnStyle>
                <ColumnStyle color={0}>
                    <CellStyle>Break Dance</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.breakDance,year.breakDancePic))}
                </ColumnStyle>
                <ColumnStyle color={1}>
                    <CellStyle>Basket 3x3</CellStyle>
                    {dataReversed.map((year,i) => cell(i,year.basket3x3,year.basket3x3Pic))}
                </ColumnStyle>
                </>
            )
    }

    return <GridStyle>{dataReversed && generateCells()}</GridStyle>
       
      
    
}

