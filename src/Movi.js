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

export const Movi = () => {
  const [dataReversed, setData] = useState(null);
  useEffect(() => {
    // const rev = wins.reverse();
    const rev = wins;
    setData(rev);
  }, []);
  const generateImage = (url) =>
    url && <ImgSt src={process.env.PUBLIC_URL + url} alt="*" />;
  const showTooltip = (info) => console.log(info);
  const printName = (name) => name && <Name>{name}</Name>;
  const cell = (i, name, pic) => (
    <CellStyle key={i} color={i} onMouseOver={() => showTooltip(name)}>
      {generateImage(pic)}
      {printName(name)}
    </CellStyle>
  );
  const generateCells = () => {
    const objectModel = [
      "year",
      "skateMen",
      "skateWomen",
      "miniRamp",
      "bmxParkMen",
      "bmxParkWomen",
      "bmxStreet",
      "flatLand",
      "mtbDowntownMen",
      "mtbDowntownWomen",
      "fmbDirtJump",
      "breakDance",
      "basket3x3",
    ];
    console.log("reverseData", dataReversed);
    return (
      <>
        <ColumnStyle color={0}>
          <TitleCell></TitleCell>
          <TitleCell>Skateboarding Men</TitleCell>
          <TitleCell>Skateboarding Women</TitleCell>
          <TitleCell>Mini Ramp</TitleCell>
          <TitleCell>BMX Men</TitleCell>
          <TitleCell>BMX Women</TitleCell>
          <TitleCell>BMX Street</TitleCell>
          <TitleCell>FlatLand BMX</TitleCell>
          <TitleCell>MTB Downtown Men</TitleCell>
          <TitleCell>MTB Downtown Women</TitleCell>
          <TitleCell>FMB Dirt Jump</TitleCell>
          <TitleCell>Break Dance</TitleCell>
          <TitleCell>Basket 3x3</TitleCell>
        </ColumnStyle>
        {dataReversed.map((yearResults, i) => (
          <ColumnStyle color={i} key={i}>
            {objectModel.map((model, i) =>
              model && model === "year" ? (
                <CellStyle key={i}>{yearResults[model]}</CellStyle>
              ) : (
                cell(i, yearResults[model], yearResults[`${model}Pic`])
              )
            )}
          </ColumnStyle>
        ))}
        <ColumnStyle color={0}>
          <TitleCell></TitleCell>
          <TitleCell>Skateboarding Men</TitleCell>
          <TitleCell>Skateboarding Women</TitleCell>
          <TitleCell>Mini Ramp</TitleCell>
          <TitleCell>BMX Men</TitleCell>
          <TitleCell>BMX Women</TitleCell>
          <TitleCell>BMX Street</TitleCell>
          <TitleCell>FlatLand BMX</TitleCell>
          <TitleCell>MTB Downtown Men</TitleCell>
          <TitleCell>MTB Downtown Women</TitleCell>
          <TitleCell>FMB Dirt Jump</TitleCell>
          <TitleCell>Break Dance</TitleCell>
          <TitleCell>Basket 3x3</TitleCell>
        </ColumnStyle>
      </>
    );
  };
  return <GridStyle>{dataReversed && generateCells()}</GridStyle>;
};
