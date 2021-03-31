import styled from 'styled-components';

export const MainTable = styled.table`
    border-spacing: 0px;
`;

export const ChildTable = styled(MainTable)`
`;

export const Tr = styled.tr`
`;
/**
 * red retangle
 */
export const MainTd = styled.td`
    /*  default color --upsdell-red: #B80025;*/
    border-color: ${ ( {color} ) => color ? color : '#B80025'};
    border-width: ${ ( {border} ) => border ? border : '4px 4px 4px 4px'};
    border-style: solid;
    padding: ${ ( {padding} ) => padding ? padding : '2px 2px 2px 2px'};
`;

export const ChildTd =  styled(MainTd)`
    border-color: ${ ( {color} ) => color ? color : 'rgb(255, 255, 255)'};
`;

export const Div = styled.div`
    background-color: rgba(255,255,255,1);
    display: flex;  
`;

export const DivLetter = styled.div`
    background-color: ${ ( {color} ) => color ? color : 'black'};
  	border-color: rgba(255, 255, 255, 1);
    border-style: solid;
    border-width: thin; 
    color: rgba(255, 255, 255, 1);
  	font-family: 'Courier', Courier, serif;
    font-weight: bold;
    font-size: 1.5rem;
    padding-bottom: 0px;
    padding-top: 0px;
    padding-left: 0px;
    padding-bottom: 4px;
`;