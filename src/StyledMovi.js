import styled from 'styled-components'


export const GridStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin: 1%;
    box-sizing:border-box;
    width:800px !important;

    @media(min-width: 768px) {
        justify-content: center;
        margin: 10%;

    }
    `;

export const RowStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* background: ${props => props.color % 2 ? '#EDF5' : '#EDF3' }; */
    z-index: -1; 
`;

export const Name = styled.div`
    @media(min-width: 768px) {
    font-size: 0.6em;
    z-index: 4; 

    }
`;
export const CellStyle = styled.div`
        display: flex;
        flex-flow: column nowrap;
        height: 60px;
        padding: 12px;
        width: 7.6%;      
        min-width: 7.6%;      
        font-size: 0.4em;
        border: 1px solid lightgray;

        /* YEAR */
        &:first-child{
            font-stretch: condensed;
            justify-content: center;
            font-family: 'Stint Ultra Condensed', cursive;
            font-size: 2em;
            padding: 0px;

        }
        /* BIG */
        @media(min-width: 768px) {
            /* padding: 20px; */
            height: 100%;
            min-width: 7.6%;        
            font-size: 1em;
            z-index: -1; 
    }
    `;
export const TitleCell = styled(CellStyle)`
    /* word-break: break-all; */
    word-break: normal;
    height: 20px;
    font-family: 'Stint Ultra Condensed', cursive;
    /* font-size: 1.2em; */
`;
export const ImgSt = styled.img`
        height: 80%;
        /* width: 100%; */
        filter: grayscale(100%) drop-shadow(2px 2px 1px gray);
        z-index: 1; 

        @media(min-width: 768px) {
            height: 100%;

        }
    `;
