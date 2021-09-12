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
min-height:570px;
opacity:${props => props.isConfirmationMessage ? 0.1 : 1};
transition:opacity 0.2 ease-in;
`

export const StyledInputGroup = styled.div`
width: 80%;
padding: 20px 20px 0 20px;
`

export const StyledLabel = styled.label`
color: rgb(232 191 65);
font-family: Quicksand;
font-size: 1.2em;
`

export const StyledInput = styled.input`
border: none;
width: ${props => props.winSize === 1 ? '320px' : '500px'};
background: rgb(50,50,50);
margin: 8px auto;
font-family: Quicksand;
font-size: 1.1em;
display: block;
color: #fff;
height:30px;
`

export const StyledInputTextArea = styled.textarea`
border: none;
width: ${props => props.winSize === 1 ? '320px' : '500px'};
background: rgb(50,50,50);
margin: 8px auto;
font-family: Quicksand;
font-size: 1.1em;
display: block;
color: #fff;
height:100px;
`

export const StyledInputError = styled.span`
color: #d10000;
padding:10px;
font-family:Quicksand;
font-size:0.8em;
`;


export const StyledSubmitButton = styled.button`
width:${props => props.winSize === 1 ? '324px' : '504px'};
background:rgb(50,50,50);
position:absolute;
bottom:0;
color:rgb(232 191 65);
font-size:1.2em;
font-family:Quicksand;
border:none;
left:50%;
transform:translateX(-50%);
cursor:pointer;
padding:10px;
margin-bottom:20px;
`

export const StyledLoaderWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
`

export const StyledConfirmationMessage = styled.span`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
color:rgb(232 191 65);
font-family:Quicksand;
text-align:center;
z-index:5;
`