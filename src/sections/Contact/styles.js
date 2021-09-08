import styled from 'styled-components';

export const StyledMainContactContainer = styled.div`
height: 100vh;
background: rgb(0,0,0); 
position: relative;
`

export const StyledMainContactHeader = styled.h1`
color: rgb(232 191 65);
margin: 0;
font-weight: 100;
text-align: center;
font-family: Quicksand;
font-size: 3em;
`

export const StyledFormWrapper = styled.div`
max-width: 550px;
background: rgb(28,28,28);
margin: auto;
position: absolute;
top: 50%;
left: 50%; 
transform: translate(-50%,-50%);
`

export const StyledInputGroup = styled.div`
width: 80%;
padding: 20px;
`

export const StyledLabel = styled.label`
color: rgb(232 191 65);
font-family: Quicksand;
font-size: 1.2em;
`

export const StyledInput = styled.input`
border: none;
width: ${props=>props.winSize === 1 ? '320px' : '500px'};
background: rgb(50,50,50);
margin: 8px auto;
font-family: Quicksand;
font-size: 1.1em;
display: block;
color: #fff;
height:40px;
`

export const StyledInputTextArea = styled.textarea`
border: none;
width: ${props=>props.winSize === 1 ? '320px' : '500px'};
background: rgb(50,50,50);
margin: 8px auto;
font-family: Quicksand;
font-size: 1.1em;
display: block;
color: #fff;
height:100px;
`
