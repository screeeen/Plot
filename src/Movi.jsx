import React, { useState, useEffect } from "react";
import { wins } from "./data/winnersTable";
import {
  GridStyle,
  ColumnStyle,
  Name,
  CellStyle,
  ImgSt,
  TitleCell,
} from "./StyledMovi";
import emojiFlags from "emoji-flags";

export const Movi = () => {
  const [dataReversed, setData] = useState(null);
  useEffect(() => {
    // const rev = wins.reverse();
    const rev = wins;
    setData(rev);
  }, []);
  const generateImage = (url) =>{
      const urlPic =  `${window.location.href}src/assets${url}`
      return url && <ImgSt src={urlPic} alt="*" />
    }
  
  const showTooltip = (info) => console.log(info);
  const printName = (name) => name && <Name>{name}</Name>;

  const cell = (i, name, pic,countryCode) => {   
    if (countryCode === undefined || countryCode === '') return (<></>)
    const ck = emojiFlags.countryCode(countryCode).emoji
  
  return (<CellStyle key={i} color={i} onMouseOver={() => showTooltip(name)}>
      {generateImage(pic)}
      <div style={{fontSize: '1rem',display:'flex', alignSelf:'self-end'}}>{ck}</div>
      {printName(name)}
    </CellStyle>)
    
  }
  
  const generateCells = () => {
    const objectModel = [
      "year",
      "skateMen",
      "skateWomen",
      "miniRamp",
      "adaptiveSkate"
      // "bmxParkMen",
      // "bmxParkWomen",
      // "bmxStreet",
      // "flatLand",
      // "mtbDowntownMen",
      // "mtbDowntownWomen",
      // "fmbDirtJump",
      // "breakDance",
      // "basket3x3",
    ];
    console.log("reverseData", dataReversed);
    return (
      <>
        <ColumnStyle color={0}>
          <TitleCell></TitleCell>
          <TitleCell>Skateboarding Men</TitleCell>
          <TitleCell>Skateboarding Women</TitleCell>
          <TitleCell>Mini Ramp</TitleCell>
          <TitleCell>Adaptive</TitleCell>
          {/* <TitleCell>BMX Men</TitleCell>
          <TitleCell>BMX Women</TitleCell>
          <TitleCell>BMX Street</TitleCell>
          <TitleCell>FlatLand BMX</TitleCell>
          <TitleCell>MTB Downtown Men</TitleCell>
          <TitleCell>MTB Downtown Women</TitleCell>
          <TitleCell>FMB Dirt Jump</TitleCell>
          <TitleCell>Break Dance</TitleCell>
          <TitleCell>Basket 3x3</TitleCell> */}
        </ColumnStyle>
        {dataReversed.map((yearResults, i) => (
          <ColumnStyle color={i} key={i}>
            {objectModel.map((model, i) =>
              model && model === "year" ? (
                <CellStyle key={i}>{yearResults[model]}</CellStyle>
              ) : (
                cell(i, yearResults[model], yearResults[`${model}Pic`],yearResults[`${model}Country`])
              )
            )}
          </ColumnStyle>
        ))}
      </>
    );
  };
  return <GridStyle>{dataReversed && generateCells()}</GridStyle>;
};
