import styled from 'styled-components'

export const MainContainer = styled.div`
height: 100vh; display: relative;
`

export const ContentContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: rgba(0,0,0,0.8);
border-radius: 5px;
height: 400px;
`

export const StyledButton = styled.button`
border: none; 
cursor: pointer; 
padding: 5px; 
background: transparent; 
color: rgb(2 224 255); 
width: 50%; 
font-size: 1.2em;
`

export const StyledSummary = styled.h2`
width: 80%;
margin: 20px auto;
padding: 20px; 
font-size:${props => props.winSize === 1 ? '1.3em' : '1.5em'}; 
color: #fff; 
font-weight: 100; 
text-align: center; 
font-family: Quicksand;
`

export const StyledIcon = styled.img`
height:${props => props.winSize === 1 ? '100px' : '130px'}; 
`

export const StyledHeroImage = styled.img`
object-fit: cover; 
width: 100%; 
height: 100%;
`

export const StyledIconWrapper = styled.div`
position: absolute; 
top: 35%; 
width: 100%; 
display: flex; 
justify-content: space-around;
`

export const StyledIconsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, minmax(100px, 293px));
justify-content: center;
grid-gap: 25px;
justify-items: center;
`

export const StyledButtonsContainer = styled.div`
display: flex;
position: absolute;
top: 70%;
left: 50%;
transform: translateX(-50%);
height: 100px;
width: 100%;
`