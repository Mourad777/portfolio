import React, { useState, useEffect } from 'react'
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
    StyledSubmitButton,
    StyledInputError,
    StyledLoaderWrapper,
    StyledConfirmationMessage,
} from './styles';
import './loader-styles.css'
import { validate } from './validate';

const Loader = () => (
    <div
        className="lds-ellipsis"
        style={{ margin: "auto", display: "block" }}
    >
        <div style={{ background: 'rgb(232 191 65)' }}></div>
        <div style={{ background: 'rgb(232 191 65)' }}></div>
        <div style={{ background: 'rgb(232 191 65)' }}></div>
        <div style={{ background: 'rgb(232 191 65)' }}></div>
    </div>
)

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [isFormTouched, setIsFormTouched] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');


    useEffect(() => {
        setErrors(validate({ name: firstName, subject, email, message }))
    }, [firstName, subject, email, message]);

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

        setIsFormTouched(true);
        const errors = validate({ name: firstName, subject, email, message });
        setErrors(errors);

        if (errors.name || errors.email || errors.message || errors.subject) {
            return;
        }

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('subject', subject);
        formData.append('email', email)
        formData.append('message', message);
        const url = 'https://email-server-mourad.herokuapp.com/email';
        setIsLoading(true);
        let response;
        try {
            response = await axios.post(url, {
                firstName,
                subject,
                email,
                message
            },
                {
                    headers: { 'Content-Type': 'application/json' }
                });
        } catch (e) {
            console.log('error', e)
        }


        setFirstName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setIsFormTouched(false);
        setIsLoading(false);

        console.log('response', response)

        if (response.status === 201) {
            setConfirmationMessage('Your message has been sent!');
            setTimeout(() => {
                setConfirmationMessage('')
            }, 3000)
        } else {
            setConfirmationMessage('Something went wrong, you can still e-mail me at mourad777b@gmail.com');
            setTimeout(() => {
                setConfirmationMessage('')
            }, 15000)
        }
    }

    return (
        <PortfolioContext.Consumer>
            {({ refSectionContact, winSize }) => (
                <StyledMainContactContainer ref={refSectionContact}>
                        <StyledConfirmationMessage>{confirmationMessage}</StyledConfirmationMessage>
                    {isLoading ?
                    <StyledLoaderWrapper><Loader /></StyledLoaderWrapper>
                        :
                        <StyledFormWrapper isConfirmationMessage={!!confirmationMessage}>
                            <StyledMainContactHeader>Contact Me</StyledMainContactHeader>
                            <StyledInputGroup>
                                <StyledLabel>Name</StyledLabel>
                                <StyledInput winSize={winSize} value={firstName} onChange={handleFirstName} />
                                {(!!(isFormTouched && !!errors.name)) && <StyledInputError>{!!(isFormTouched && !!errors.name) ? errors.name : ''}</StyledInputError>}
                            </StyledInputGroup>
                            <StyledInputGroup>
                                <StyledLabel>E-mail</StyledLabel>
                                <StyledInput winSize={winSize} value={email} onChange={handleEmail} />
                                {(!!(isFormTouched && !!errors.email)) && <StyledInputError>{!!(isFormTouched && !!errors.email) ? errors.email : ''}</StyledInputError>}
                            </StyledInputGroup>
                            <StyledInputGroup>
                                <StyledLabel>Subject</StyledLabel>
                                <StyledInput winSize={winSize} value={subject} onChange={handleSubject} />
                                {(!!(isFormTouched && !!errors.subject)) && <StyledInputError>{!!(isFormTouched && !!errors.subject) ? errors.subject : ''}</StyledInputError>}
                            </StyledInputGroup>
                            <StyledInputGroup style={{ padding: 20 }}>
                                <StyledLabel>Message</StyledLabel>
                                <StyledInputTextArea rows="5" winSize={winSize} value={message} onChange={handleMessage} />
                                {(!!(isFormTouched && !!errors.message)) && <StyledInputError>{!!(isFormTouched && !!errors.message) ? errors.message : ''}</StyledInputError>}
                            </StyledInputGroup>
                            {(!(errors.name || errors.email || errors.subject || errors.message) || !isFormTouched) && <StyledSubmitButton onClick={handleFormSubmission} winSize={winSize}>
                                Submit
                            </StyledSubmitButton>}
                        </StyledFormWrapper>
                    }
                </StyledMainContactContainer>)}
        </PortfolioContext.Consumer>
    )
}

export default Contact;