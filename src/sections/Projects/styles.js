import styled from 'styled-components';

export const StyledMainContainer = styled.div`
height: 100vh;
width: 100%;
background: black;
padding: 30px 0;
position: relative;
`;

export const StyledMainHeader = styled.h1`
color: rgb(232 191 65);
font-weight: 100;
left: 50%;
transform: translateX(-50%);
text-align: center;
font-family: Quicksand;
font-size: 3em;
position: absolute;
top: 0;
z-index: 2;
margin:0;
`;

export const StyledProjectContainer = styled.div`
width: 100%; 
display: flex; 
align-items:center;
justify-content: space-around; 
position: absolute; 
top: 50%; 
left: 50%; 
transform: translate(-50%,-50%);
height:100%;
`;

export const StyledCard = styled.div`
background: rgb(28,28,28);
height: 50vh; 
min-height:640px;
width: ${props => props.winSize === 1 ? '300px' : '400px'}; 
margin:${props => props.winSize === 1 ? 'auto' : '0 5px'}; 
position: relative;
`;

export const StyledCardTitle = styled.h3`
color: rgb(232 191 65);
text-align: center; 
font-family: Quicksand; 
font-weight: 500; 
font-size: 1.5em;
`;

export const StyledDesktopOutline = styled.img`
object-fit: cover; 
width: 300px; 
top: 20%; 
left: 50%; 
transform: translate(-50%,-20%); 
position: absolute;
`;

export const StyledDesktopGif = styled.img`
object-fit: cover; 
width: 289px; 
top: 20%; 
left: 50%; 
transform: translate(-50%,-15%); 
position: absolute;
`;

export const StyledMobileOutline = styled.img`
object-fit: cover; 
width: 100px; 
top: 45%; 
right: 5%; 
transform: translateY(-45%); 
position: absolute;
`;

export const StyledMobileGif = styled.img`
object-fit: cover; 
width: 52px; 
top: 45%; 
right: 5%; 
transform: translate(-24px,-45%); 
position: absolute;
`;

export const StyledTechStackContainer = styled.div`
width: 100%; 
position: absolute; 
top: 55%; 
display: flex; 
justify-content: space-around;
`;

export const StyledTechItem = styled.span`
font-family: Quicksand; 
color: rgb(232 191 65); 
font-size:${props => props.winSize === 1 ? '1em' : '1.2em'};
`;

export const StyledFeaturesContainer = styled.div`
width: 100%; 
margin-top: 10px; 
position: absolute; 
top: 58%; 
display: flex; 
justify-content: space-between; 
flex-direction: column;
`

export const StyledFeaturesColumn = styled.div`
display: flex; 
justify-content: ${props => props.isItemToRight ? 'space-evenly' : 'flex-start'};
padding: 0 15px;
`

export const StyledFeatureContainer = styled.div`
display: flex; 
margin-top: 10px; 

align-items: center;
width:50%;
`

export const StyledCheckMark = styled.img`
object-fit: cover; 
width: 12px; 
height: 12px; 
margin-right: 12px;
`

export const StyledFeature = styled.span`
font-family: Quicksand;
color: rgb(2 224 255);
font-size:0.8em;
`

export const StyledButtonContainer = styled.div`
display: flex; 
width: 100%; 
position: absolute; 
bottom: 0;
`

export const StyledButton = styled.a`
cursor: pointer; 
width: 50%; 
font-family: Quicksand; 
font-size: 1.3em; 
border: none; 
background: rgb(232 191 65); 
color: rgb(28,28,28); 
padding: 10px;
transition:all 0.2s ease-in;
text-align:center;
text-decoration:none;
&:hover {
    background:rgb(28,28,28);
    color:rgb(232 191 65);
}
`

export const StyledArrowContainerLeft = styled.div`
position: absolute;
top: 50%;
transform: translateY(-50%) rotate(90deg);
left: 0;
z-index: 1;
`

export const StyledArrowContainerRight = styled.div`
position: absolute;
top: 50%;
transform: translateY(-50%) rotate(-90deg);
right: 0;
z-index: 1;
`