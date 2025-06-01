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

  const cell = (i, name, pic,countryCode, year) => {   
    if (countryCode === undefined || countryCode === '') return (<></>)
    const ck = emojiFlags.countryCode(countryCode).emoji

    console.log(year)
  
  return (
  <CellStyle key={i} color={i} onMouseOver={() => showTooltip(name)}>
      {generateImage(pic)}
      <div style={{fontSize: '1rem',display:'flex', alignSelf:'self-end'}}>{ck}</div>
      {printName(name)}
      <div style={{fontSize: '1rem',display:'flex', alignSelf:'self-end'}}>{year}</div>
    </CellStyle>
    )
  }
  
  const generateCells = () => {
    const objectModel = [
      "year",
      "skateMen",
      "skateWomen",
      "miniRamp",
      "adaptiveSkate"
    ];
    console.log("reverseData", dataReversed);
    return (
      <>
        {dataReversed.map((yearResults, i) => (
          <div style={{display:'flex', flexFlow: 'row wrap'}}>
            {objectModel.map((model, i) =>
                cell(i, yearResults[model], yearResults[`${model}Pic`],yearResults[`${model}Country`],yearResults['year'])
            )}
          </div>
        ))}
      </>
    );
  };
  return <GridStyle>{dataReversed && generateCells()}</GridStyle>;
};
