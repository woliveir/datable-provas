import React from 'react';
import { MainTable
        ,ChildTable
        ,Tr
        ,MainTd
        ,ChildTd
        ,Div
        ,DivLetter  
       } from './styled';

function Datatable(){
    return(
    <>
        <MainTable>
            <tbody>
            <Tr>
                <MainTd color='#B80025'>
                    <Div>
                        <ChildTable> {/* ascii_emoji, d, a */}
                            <Tr>
                                <ChildTd border='4px 0px 4px 4px' padding='0px 0px 0px 0px'>
                                    <Div>
                                        <DivLetter>:)</DivLetter>
                                        <DivLetter color='#355B33' /* hunter-green */>d</DivLetter>
                                        <DivLetter color='#B7990D' /* lemon-curry  */>a</DivLetter>
                                    </Div>
                                </ChildTd>
                            </Tr>
                        </ChildTable>

                        <ChildTable> {/* t, a */}
                            <Tr>
                                <ChildTd color='#0267C1' /* green-blue */ border='4px 0px 4px 4px' padding='0px 0px 0px 0px'>
                                    <Div>
                                        <DivLetter color='#0267C1' /* green-blue  */>t</DivLetter>
                                        <DivLetter color='#B80025' /* upsdell-red */>a</DivLetter>
                                    </Div>
                                </ChildTd>
                            </Tr>
                        </ChildTable>
                    </Div>
                </MainTd>

                <MainTd color='#FFFFFF' border='4px 0px 4px 0px' padding='2px 0px 2px 0px'>

                    <ChildTable>
                        <tbody>
                        <Tr>
                            <ChildTd color='#0267C1' border='4px 4px 4px 0px' padding='0px 0px 0px 0px'>
                                <Div>
                                    <DivLetter color='#FF8D0A' /* dark-orange       */>b</DivLetter>
                                    <DivLetter color='#C14975' /* fuchsia-rose      */>l</DivLetter>
                                    <DivLetter color='#682D63' /* palatinate-purple */>e</DivLetter>
                                </Div>
                            </ChildTd>
                        </Tr>
                        </tbody>
                    </ChildTable>
                
                </MainTd>
            </Tr>
            </tbody>
        </MainTable>
    </>
)
};
export default Datatable;