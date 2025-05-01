import styled from "styled-components";

export const GridStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  box-sizing: border-box;
  margin: 1%;
  // border: 1px solid black;
`;

export const ColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background: ${(props) => (props.color % 2 ? "#FFF" : "#EFF3")}; */
  z-index: -1;
  // border: 1px solid black;
`;

export const CellStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 0.4em;
  min-height: 120px;
  min-width: 120px;
  border: 1px solid black;

  /* YEAR */
  &:first-child {
    font-stretch: condensed;
    border: none;
    
    font-size: 1.8em;
    padding: 0px 0.1em;
    min-width: 40px;
  }
`;

export const TitleCell = styled(CellStyle)`
  /* word-break: break-all; */
  word-break: normal;
  max-width: 400px;
  height: 80px;
  min-height: 120px;
  font-size: 1.2em;
  // border: 1px solid black;
`;

export const ImgSt = styled.img`
  height:50%;
  width:50%;
  filter: grayscale(100%) drop-shadow(2px 2px 1px gray);
  z-index: 1;

  
  
`;

export const Name = styled.div`
  
    font-size: .8rem;
    z-index: 4;
  
    // border: 1px solid black;
`;
