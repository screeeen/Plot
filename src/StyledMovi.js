import styled from "styled-components";

export const GridStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  box-sizing: border-box;
  margin: auto 1%;
  margin-top: 200px;
`;

export const CellStyle = styled.div`
  display: grid;
  /* border: 1px solid blue; */
  width: 18%;
  margin: 2px 2px;
  justify-items: center;
`;

export const ImgSt = styled.img`
  width: 60px;
  filter: grayscale(100%) drop-shadow(2px 2px 1px gray);
  z-index: 1;
`;

export const Name = styled.h4`
  word-break: normal;
  font-size: .8em;
  margin: auto;
  text-align: center;
  font-weight: 400;
  color: lightgray;
`;

export const TitleCell = styled.h4`
  word-break: normal;
  font-family: "futura";
  font-size: 1em;
  margin: auto;
  text-align: center;
  color: lightgray;
  & h2:nth-child(19) {
    text-decoration-line: line-through;
  }
`;

// export const ColumnStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   z-index: -1;
// `;
