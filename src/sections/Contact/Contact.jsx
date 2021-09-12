import React, { useState } from 'react'

import axios from 'axios'
import { PortfolioContext } from '../../App';
import {
    StyledFormWrapper,
    StyledInput,
    StyledInputGroup,
    StyledInputTextArea,
    StyledLabel,
    StyledMainContactContainer,
    StyledMainContactHeader,
    StyledSubmitButton
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

    const handleFormSubmission = async () => {
        const formData = new FormData();
        console.log('firstName', firstName)
        formData.append('firstName', firstName);
        formData.append('subject', subject);
        formData.append('email', email)
        formData.append('message', message);
        const url = 'http://email-server-mourad.herokuapp.com/email';

        const response = await axios.post(url, {
            firstName,
            subject,
            email,
            message
        },
            {
                headers: { 'Content-Type': 'application/json' }
            });

        console.log('response', response)

    }

    return (
        <PortfolioContext.Consumer>
            {({ refSectionContact, winSize }) => (
                <StyledMainContactContainer ref={refSectionContact}>

                    <StyledFormWrapper>
                        <StyledMainContactHeader>Contact Me</StyledMainContactHeader>
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
                        <StyledInputGroup style={{ padding: 20 }}>
                            <StyledLabel>Message</StyledLabel>
                            <StyledInputTextArea rows="5" winSize={winSize} value={message} onChange={handleMessage} />
                        </StyledInputGroup>
                        <StyledSubmitButton onClick={handleFormSubmission} winSize={winSize}>
                            Submit
                        </StyledSubmitButton>
                    </StyledFormWrapper>
                </StyledMainContactContainer>)}
        </PortfolioContext.Consumer>
    )
}

export default Contact;