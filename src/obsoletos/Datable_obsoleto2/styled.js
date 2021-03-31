import styled from 'styled-components';

export  const StyledTable = styled.table`
    border-spacing: 0px;
        
    td, div {
        display: flex;
    }
`;

export const StyledTableData = styled.td`
    border-color: ${ ( {color} ) => color ? color : 'white'};
    border-width: ${ ( {border} ) => border ? border : '4px 4px 4px 4px'};
    border-style: solid;
    padding: ${ ( {padding} ) => padding ? padding : '2px 2px 2px 2px'};
`;

export const Letter = styled.div`
    background-color: ${ ( {color} ) => color ? color : 'black'};
  	border-color: white;
    border-style: solid;
    border-width: thin; 
    color: white;
  	font-family: 'Courier', Courier, serif;
    font-weight: bold;
    font-size: 1.5rem;
    padding-bottom: 0px;
    padding-top: 0px;
    padding-left: 0px;
    padding-bottom: 4px;
`;