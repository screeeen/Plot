import React, {useState,useEffect} from 'react';
import {wins} from './data/winnersTable'
import {GridStyle,RowStyle,Name,CellStyle,ImgSt, TitleCell} from './StyledMovi'

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
        const objectModel = ['year','skateMen','skateWomen','miniRamp','bmxParkMen','bmxParkWomen','bmxStreet','flatLand','mtbDowntownMen','mtbDowntownWomen','fmbDirtJump','breakDance','basket3x3']
        console.log('reverseData',dataReversed)
            return (
                <>
                <RowStyle color={0}>
                    <TitleCell></TitleCell>
                    <TitleCell>Sk8 Men</TitleCell>
                    <TitleCell>Sk8 Women</TitleCell>
                    <TitleCell>Mini Ramp</TitleCell>
                    <TitleCell>BMX Park Men</TitleCell>
                    <TitleCell>BMX Park Women</TitleCell>
                    <TitleCell>BMX Street</TitleCell>
                    <TitleCell>Flat Land</TitleCell>
                    <TitleCell>MTB Downtown Men</TitleCell>
                    <TitleCell>MTB Downtown Women</TitleCell>
                    <TitleCell>FMB Dirt Jump</TitleCell>
                    <TitleCell>Break Dance</TitleCell>
                    <TitleCell>Basket 3x3</TitleCell>
                </RowStyle>
                {dataReversed.map((yearResults,i) => 
                    <RowStyle color={i} key={i}>
                    {objectModel.map((model, i) => 
                        model && model === 'year' ? <CellStyle key={i}>{yearResults[model]}</CellStyle> :
                        cell(i,yearResults[model],yearResults[`${model}Pic`])
                    )}
                    </RowStyle>
                )}
                </>
            )
    }
    return <GridStyle>{dataReversed && generateCells()}</GridStyle>
}