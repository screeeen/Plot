import styled from 'styled-components'


export const GridStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin: 2%;
    /* background: whitesmoke; */
    @media(min-width: 768px) {
        /* background: mediumseagreen;
        color: papayawhip; */
        justify-content: center;
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
    /* background: black; */
    /* color: white; */
    font-size: 0.6em;
    position: relative;
    bottom: 10px;
    padding: 5px;
    z-index: 4; 

    }
`;
export const CellStyle = styled.div`
        display: flex;
        flex-flow: column nowrap;
        /* width: 20px; */
        height: 60px;
        padding: 20px;
        width: 7.6%;
        /* font-family: 'Open', sans-serif; */
        
        font-size: 0.4em;
        &:first-child{
            font-stretch: condensed;
            justify-content: center;
            font-family: 'Stint Ultra Condensed', cursive;
            font-size: 3em;
            padding: 0px;

        }
        /* BIG */
        @media(min-width: 768px) {
            width: 80px;
            height: 80px;
            padding: 20px;
            font-size: 1em;
            z-index: -1; 
    }
    `;
export const TitleCell = styled(CellStyle)`
    word-break: break-all;
    height: 20px;
    font-family: 'Stint Ultra Condensed', cursive;
    font-size: 1em;
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
