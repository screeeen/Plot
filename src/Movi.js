import React, { useState, useEffect } from "react";
import { wins } from "./data/winnersTable";
import { GridStyle, TitleCell, Name, CellStyle, ImgSt } from "./StyledMovi";

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
    <CellStyle key={name + pic} color={i} onMouseOver={() => showTooltip(name)}>
      {generateImage(pic)}
      {printName(name)}
    </CellStyle>
  );
  const generateCells = () => {
    const objectModel = [
      // "year",
      "skateMen",
      // "skateWomen",
      // "miniRamp",
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

    // console.log("reverseData", dataReversed);

    return (
      <>
        {dataReversed.map((yearResults, i) => (
          <CellStyle key={yearResults.year}>
            <TitleCell>{yearResults.year}</TitleCell>
            <ImgSt
              src={process.env.PUBLIC_URL + yearResults.skateMenPic}
              alt="*"
            />
            <Name>{yearResults.skateMen}</Name>
          </CellStyle>
        ))}
      </>
    );
  };
  return <GridStyle>{dataReversed && generateCells()}</GridStyle>;
};
