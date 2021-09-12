import styled from "styled-components"

export const StyledResumeContainer = styled.div`
position:relative;
`

export const StyledResumeWrapper = styled.div`
position:absolute;
left:50%;
transform:translateX(-50%);
width:${props=>props.winSize === 1 ? '100%' : '70%'};
`

export const StyledBasicInfo = styled.p`
font-family:Quicksand;
text-align:center;
margin:0 0 5px 0;
`

export const StyledHeader = styled.p`
font-family: Quicksand; 
font-weight: bold;
padding:10px 0 0 25px;
margin:0;
`

export const StyledObjective = styled.p`
font-family: Quicksand;
padding:5px 0 0 30px;
font-size: 0.8em;
`

export const StyledSubHeader = styled.p`
font-family: Quicksand;
padding:0 0 0 30px;
font-size: 0.9em;
text-decoration:underline;
`

export const StyledContentLine = styled.p`
font-family: Quicksand;
padding-left: 30px;
font-size: 0.7em;
margin:0;
`

export const StyledReturnButton = styled.button`
position:absolute;
top:0;
left:10px;
padding:10px;
border:none;
font-family:Quicksand;
cursor:pointer;
`