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
padding:10px 25px 0 25px;
margin:0;
`

export const StyledObjective = styled.p`
font-family: Quicksand;
padding:5px 30px 0 30px;
font-size: 0.8em;
`

export const StyledSubHeader = styled.p`
font-family: Quicksand;
padding: 0 30px;
font-size: 0.9em;
text-decoration:underline;
`

export const StyledContentLine = styled.p`
font-family: Quicksand;
padding:0 30px;
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

export const StyledSkillsContainer = styled.div`
display:flex;
justify-content:space-around;
`

export const StyledSkillsColumn = styled.ul`
width:50%;
`

export const StyledBullet = styled.li`
font-size:0.8em;
font-family:Quicksand;
`

export const StyledSecondaryContainer = styled.div`
display:flex;
`

export const StyledSecondaryContainerColumn = styled.div`
width:50%;
`