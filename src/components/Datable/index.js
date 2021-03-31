import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
        width: auto;
        border-style: solid;
        display: inline-flex;
        border-color: ${ ( {color} ) => color ? color : 'white'};
        border-width: ${ ( {border} ) => border ? border : '4px 4px 4px 4px'};
        border-style: solid;
        padding: ${ ( {padding} ) => padding ? padding : '2px 2px 2px 2px'};
`;

 const Letter = styled.div`
    background-color: ${ ( {color} ) => color ? color : 'black'};
  	border-color: white;
    border-style: solid;
    border-width: thin; 
    color: white;
  	font-family: 'Courier', Courier, serif;
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 0px;
    padding-top: 2px;
    padding-left: 0px;
    padding-bottom: 4px;
`;

function Datable( {asciiEmoji, sevenLetters} ){
    console.log('Render component Datable');
    // https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
    // string to array
    sevenLetters = sevenLetters? Array.from(sevenLetters) : '';
    return (
        <>
        <Container>

            <Container border='4px 4px 4px 4px' 
                       padding='2px 0px 2px 0px' 
                       color='#B80025'>

                <Container border='4px 0px 4px 0px' 
                           padding='2px 0px 2px 0px'
                           color = 'white'>
                    <Letter>{asciiEmoji? asciiEmoji : ':)'}</Letter>
                    <Letter color='#355B33' /* hunter-green */>{sevenLetters[0]? sevenLetters[0] : <span>&nbsp;</span>}</Letter>
                    <Letter color='#B7990D' /* lemon-curry  */>{sevenLetters[1]? sevenLetters[1] : <span>&nbsp;</span>}</Letter>
                </Container>

                <Container border='4px 0px 4px 4px' 
                           padding='2px 0px 2px 0px' 
                           color='#0267C1'>
                    <Letter color='#0267C1' /* green-blue   */>{sevenLetters[2]? sevenLetters[2] : <span>&nbsp;</span>}</Letter>
                    <Letter color='#B80025' /* upsdell-red  */>{sevenLetters[3]? sevenLetters[3] : <span>&nbsp;</span>}</Letter>
                </Container>

            </Container>

            <Container border='4px 0px 4px 0px' 
                       padding='2px 0px 2px 0px'
                       color='white'>

                <Container border='4px 4px 4px 0px' 
                           padding='2px 0px 2px 0px'
                           color='#0267C1'>

                    <Letter color='#FF8D0A' /* dark-orange       */>{sevenLetters[4]? sevenLetters[4] : <span>&nbsp;</span>}</Letter>
                    <Letter color='#C14975' /* fuchsia-rose      */>{sevenLetters[5]? sevenLetters[5] : <span>&nbsp;</span>}</Letter>
                    <Letter color='#682D63' /* palatinate-purple */>{sevenLetters[6]? sevenLetters[6] : <span>&nbsp;</span>}</Letter>
                </Container>

            </Container>

        </Container>
        </>
    );
}

export default memo(Datable);