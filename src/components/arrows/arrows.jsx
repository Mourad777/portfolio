import React from 'react'
import styled from 'styled-components'

const StyledArrowsPath = styled.path`
stroke: #2994D1;
fill: transparent;
stroke-width: 1px;  
animation: arrow 2s infinite;
-webkit-animation: arrow 2s infinite;

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}
`

const StyledArrows = styled.svg`
width: 60px;
height: 72px;
position: absolute;
left: 50%;
margin-left: -30px;
bottom: 20px;
cursor:pointer;
`
const Arrows = ({onClick}) => (
    <StyledArrows onClick={onClick}>
        <StyledArrowsPath style={{ animationDelay: '-1s' }} d="M0 0 L30 32 L60 0"></StyledArrowsPath>
        <StyledArrowsPath style={{ animationDelay: '-0.5s' }} d="M0 20 L30 52 L60 20"></StyledArrowsPath>
        <StyledArrowsPath style={{ animationDelay: '0s' }} d="M0 40 L30 72 L60 40"></StyledArrowsPath>
    </StyledArrows>
)

export default Arrows