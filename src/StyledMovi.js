import styled from 'styled-components'

export const GridStyle = styled.div`
    height:100vh;
    display: flex;
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
    
export const ColumnStyle = styled.div`
    flex-flow: 'column';
    align-items: start;
    justify-content: start; 
`;

export const Name = styled.div`
    /* z-index: 10;  */
    background: black;
    color: white;
    font-size: 0.6em;
    position: relative;
    bottom: 10px;
    padding: 5px;
`;

export const CellStyle = styled.div`
        display: flex;
        flex-flow: column;
        width: 20px;
        height: 60px;
        padding: 1px;
        font-size: 0.4em;
        background: ${props => props.color % 2 ? '#EDF8' : '' };

        /* border: 1px solid gray; */

        /* BIG */
        @media(min-width: 768px) {
            width: 60px;
            height: 60px;
            padding: 6px;
            font-size: 1em;
            padding: 40px 20px;

            /* border: 1px solid gray; */
    }

    `;

// export const CellYear = styled.div`
//         display: flex;
//         flex-flow: column;
//         padding: 40% 10%;
//         font-size: 1em;
//         font-weight: bold;
//         color: slateGray;
//         @media(min-width: 768px) {
//             width: 60px;
//             height: 40px;
//             /* border: 1px solid gray; */
//             padding: 40% 10%;
//     }
//     `;

export const ImgSt = styled.img`
        width: 100%;
        filter: grayscale(100%) drop-shadow(2px 2px 1px gray);
    `;
    
    