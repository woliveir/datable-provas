
import React from 'react';
import { StyledTable, StyledTableData, Letter } from './styled';

function Datable2( {asciiEmoji, sevenLetters} ){
    // https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
    // string to array
    sevenLetters = sevenLetters? Array.from(sevenLetters) : '';
    
    return (
    <>
        <StyledTable>{/* main table */}
            <tbody>
                <tr><td><div>
                    <StyledTableData border='4px 4px 4px 4px' 
                                     padding='2px 0px 2px 0px'
                                     color='#B80025'>
 
                        <StyledTable>{/* :), d, a */} 
                            <tbody>
                                <tr>
                                    <StyledTableData border='4px 0px 4px 4px' 
                                                     padding='0px 0px 0px 0px'>
                                            <div>
                                                <Letter>{asciiEmoji? asciiEmoji : ':)'}</Letter>
                                                <Letter color='#355B33' /* hunter-green */>{sevenLetters[0]? sevenLetters[0] : <span>&nbsp;</span>}</Letter>
                                                <Letter color='#B7990D' /* lemon-curry  */>{sevenLetters[1]? sevenLetters[1] : <span>&nbsp;</span>}</Letter>
                                            </div>
                                    </StyledTableData>
                                </tr>
                            </tbody>
                        </StyledTable>
                    
                        <StyledTable>{/* t, a */}
                            <tbody>
                                <tr>
                                    <StyledTableData border='4px 0px 4px 4px' 
                                                     padding='0px 0px 0px 0px' 
                                                     color='#0267C1'>
                                        <div>
                                            <Letter color='#0267C1' /* green-blue  */>{sevenLetters[2]? sevenLetters[2] : <span>&nbsp;</span>}</Letter>
                                            <Letter color='#B80025' /* upsdell-red */>{sevenLetters[3]? sevenLetters[3] : <span>&nbsp;</span>}</Letter>
                                        </div>
                                    </StyledTableData>
                                </tr>
                            </tbody>
                        </StyledTable>

                    </StyledTableData>
                    
                    <StyledTableData border='7px 4px 0px 0px'
                                     padding='0px 0px 0px 0px'>
                        <StyledTable>{/* b, l, e */} 
                            <tbody>
                                <tr><div>
                                    <StyledTableData border='4px 4px 4px 0px'
                                                     padding='0px 0px 0px 0px' 
                                                     color='#0267C1'>
                                    <div>
                                        <Letter color='#FF8D0A' /* dark-orange       */>{sevenLetters[4]? sevenLetters[4] : <span>&nbsp;</span>}</Letter>
                                        <Letter color='#C14975' /* fuchsia-rose      */>{sevenLetters[5]? sevenLetters[5] : <span>&nbsp;</span>}</Letter>
                                        <Letter color='#682D63' /* palatinate-purple */>{sevenLetters[6]? sevenLetters[6] : <span>&nbsp;</span>}</Letter>
                                    </div>
                                    </StyledTableData> 
                                </div></tr>
                            </tbody>
                        </StyledTable>
                    </StyledTableData>

                </div></td></tr>                
            </tbody>
        </StyledTable>
    </>    
    );
}

export default Datable2;