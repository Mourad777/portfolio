import React, { useState } from 'react'
import { PortfolioContext } from '../../App';
import {
    StyledFormWrapper,
    StyledInput,
    StyledInputGroup,
    StyledInputTextArea,
    StyledLabel,
    StyledMainContactContainer,
    StyledMainContactHeader
} from './styles';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleFirstName = (e) => {
        const value = e.target.value;
        setFirstName(value)
    }

    const handleSubject = (e) => {
        const value = e.target.value;
        setSubject(value)
    }

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value)
    }

    const handleMessage = (e) => {
        const value = e.target.value;
        setMessage(value)
    }

    return (
        <PortfolioContext.Consumer>
            {({ refSectionContact, winSize }) => (
                <StyledMainContactContainer ref={refSectionContact}>
                    <StyledMainContactHeader>Contact Me</StyledMainContactHeader>
                    <StyledFormWrapper>
                        <StyledInputGroup>
                            <StyledLabel>First Name</StyledLabel>
                            <StyledInput winSize={winSize} value={firstName} onChange={handleFirstName} />
                        </StyledInputGroup>
                        <StyledInputGroup>
                            <StyledLabel>E-mail</StyledLabel>
                            <StyledInput winSize={winSize} value={email} onChange={handleEmail} />
                        </StyledInputGroup>
                        <StyledInputGroup>
                            <StyledLabel>Subject</StyledLabel>
                            <StyledInput winSize={winSize} value={subject} onChange={handleSubject} />
                        </StyledInputGroup>
                        <StyledInputGroup>
                            <StyledLabel>Message</StyledLabel>
                            <StyledInputTextArea rows="5" winSize={winSize} value={message} onChange={handleMessage} />
                        </StyledInputGroup>
                    </StyledFormWrapper>
                </StyledMainContactContainer>)}
        </PortfolioContext.Consumer>
    )
}

export default Contact;