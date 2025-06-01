import React, { useState, useEffect } from "react";
import { wins } from "./data/winnersTable";
import {
  GridStyle,
  Name,
  CellStyle,
  ImgSt,
} from "./StyledMovi";
import emojiFlags from "emoji-flags";
import { objectModelStreetWomen, objectModelStreetMen, objectModelAdaptive, objectModelMiniramp } from "./CONSTANTS";

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
      <div style={{fontSize: '1rem',display:'flex', alignSelf:'baseline'}}>{year}</div>
      {generateImage(pic)}
      <div style={{fontSize: '1rem',display:'flex', alignSelf:'self-end'}}>{ck}</div>
      {printName(name)}
    </CellStyle>
    )
  }
  
  const generateCells = () => {
    return (
      <>
      
      <div style={{display:'flex', flexFlow: 'row wrap', width:'100%'}}>
      <h2>O Marisquiño Skateboarding Kids!</h2>
      </div>

      <div style={{display:'flex', flexFlow: 'row wrap'}}>
        <h2>Street Men! (2001-2024)</h2>
      </div>

      <div style={{display:'flex', flexFlow: 'row wrap', width:'100%'}}>
        {dataReversed.map((yearResults, i) => (
          <div style={{display:'flex', flexFlow: 'row wrap'}}>
            {objectModelStreetMen.map((model, i) =>
                cell(i, yearResults[model], yearResults[`${model}Pic`],yearResults[`${model}Country`],yearResults['year'])
            )}
          </div>
        ))}
        </div>

        <div style={{display:'flex', flexFlow: 'row wrap'}}>
          <h2>Street Women! (2013-2024)</h2>
        </div>

        <div style={{display:'flex', flexFlow: 'row wrap', width:'100%'}}>
        {dataReversed.map((yearResults, i) => (
          <div style={{display:'flex', flexFlow: 'row wrap'}}>
            {objectModelStreetWomen.map((model, i) =>
                cell(i, yearResults[model], yearResults[`${model}Pic`],yearResults[`${model}Country`],yearResults['year'])
            )}
          </div>
        ))}
        </div>

        <div style={{display:'flex', flexFlow: 'row wrap'}}>
          <h2>Miniramp! (2016-2024)</h2>
        </div>

        <div style={{display:'flex', flexFlow: 'row wrap', width:'100%'}}>
        {dataReversed.map((yearResults, i) => (
          <div style={{display:'flex', flexFlow: 'row wrap'}}>
            {objectModelMiniramp.map((model, i) =>
                cell(i, yearResults[model], yearResults[`${model}Pic`],yearResults[`${model}Country`],yearResults['year'])
            )}
          </div>
        ))}
        </div>
        
        <div style={{display:'flex', flexFlow: 'row wrap', width:'100%'}}>
          <h2>Adaptive! (2024!)</h2>
        </div>

        <div style={{display:'flex', flexFlow: 'row wrap'}}>
        {dataReversed.map((yearResults, i) => (
          <div style={{display:'flex', flexFlow: 'row wrap'}}>
            {objectModelAdaptive.map((model, i) =>
                cell(i, yearResults[model], yearResults[`${model}Pic`],yearResults[`${model}Country`],yearResults['year'])
            )}
          </div>
        ))}
        </div>
      </>
    );
  };
  return <GridStyle>{dataReversed && generateCells()}</GridStyle>;
};
