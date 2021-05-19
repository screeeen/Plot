import styled from "styled-components";

export const GridStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  box-sizing: border-box;
  margin: 1%;
`;

export const ColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background: ${(props) => (props.color % 2 ? "#FFF" : "#EFF3")}; */
  z-index: -1;
`;

export const CellStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  min-height: 60px;
  max-height: 80px;
  min-width: 10px;
  max-width: 20px;
  padding: 2px;
  font-size: 0.4em;

  /* YEAR */
  &:first-child {
    font-stretch: condensed;
    justify-content: center;
    font-family: "Stint Ultra Condensed", cursive;
    font-size: 1.8em;
    padding: 0px 0.1em;
    min-width: 40px;
    color: turquoise;
  }
  /* BIG */
  @media (min-width: 768px) {
    height: 100%;
    min-height: 120px;
    max-width: 50px;
    font-size: 1em;
    z-index: -1;
  }
`;
export const TitleCell = styled(CellStyle)`
  /* word-break: break-all; */
  word-break: normal;
  max-width: 400px;
  height: 80px;
  min-height: 120px;
  font-family: "Stint Ultra Condensed", cursive;
  font-size: 1.2em;
`;
export const ImgSt = styled.img`
  max-height: 60%;
  /* width: 100%; */
  filter: grayscale(100%) drop-shadow(2px 2px 1px gray);
  z-index: 1;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

export const Name = styled.div`
  @media (min-width: 768px) {
    font-size: 0.6em;
    z-index: 4;
  }
`;
