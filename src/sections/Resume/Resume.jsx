import React, { useEffect } from 'react';
import { PortfolioContext } from '../../App';
import {
    StyledBasicInfo,
    StyledObjective,
    StyledHeader,
    StyledContentLine,
    StyledSubHeader,
    StyledReturnButton,
    StyledResumeContainer,
    StyledResumeWrapper
} from './styles';
import { ScrollTrigger } from 'gsap/all'

const Resume = () => {
    useEffect(() => {
        const Alltrigger = ScrollTrigger.getAll();
        for (let i = 0; i < Alltrigger.length; i++) {
            Alltrigger[i].kill(true)
        }
    }, [])
    return(
    <PortfolioContext.Consumer>
        {({ handleResume,winSize }) => (
            <StyledResumeContainer>
                <StyledReturnButton onClick={() => handleResume(false)}>Portfolio</StyledReturnButton>
                <StyledBasicInfo style={{marginTop:10}}>Mourad Boukabache</StyledBasicInfo>
                <StyledBasicInfo>5-310 Rue Bergevin</StyledBasicInfo>
                <StyledBasicInfo>Lasalle, Québec</StyledBasicInfo>
                <StyledBasicInfo>(514)562-9249</StyledBasicInfo>
                <StyledBasicInfo>mourad777b@gmail.com</StyledBasicInfo>

                <StyledResumeWrapper winSize={winSize}>
                    <StyledHeader>Objective</StyledHeader>
                    <StyledObjective>I am looking for a full-time or contract
                        based position that will allow me to grow my skills as a programmer. I am comfortable working with React,
                        NodeJS, Laravel, MongoDB and MySQL.</StyledObjective>
                    <StyledHeader>Education</StyledHeader>
                    <StyledSubHeader>University of Waterloo</StyledSubHeader>
                    <StyledContentLine>Sept 2012 - April 2015</StyledContentLine>
                    <StyledContentLine>200 University avenue West, Waterloo Ontario</StyledContentLine>
                    <StyledContentLine>Degree: Biomedical Science</StyledContentLine>
                    <StyledContentLine>Graduated in June 2015</StyledContentLine>
                    <StyledSubHeader>Concordia University</StyledSubHeader>
                    <StyledContentLine>Sept 2011 - April 2012</StyledContentLine>
                    <StyledContentLine>7141 rue Sherbrooke O, Montreal Quebec</StyledContentLine>
                    <StyledContentLine>Program: Biology </StyledContentLine>

                    <StyledHeader>Work Experience</StyledHeader>
                    <StyledSubHeader>RXJOB</StyledSubHeader>
                    <StyledContentLine>Northern Indigenous Villages Hospitals/Clinics</StyledContentLine>
                    <StyledContentLine>July 2019 - Present</StyledContentLine>
                    <StyledContentLine>Role: Pharmacy Technician</StyledContentLine>
                    <StyledSubHeader>Pharmaprix </StyledSubHeader>
                    <StyledContentLine>Montreal, Quebec</StyledContentLine>
                    <StyledContentLine>December 2015 -July 2019</StyledContentLine>
                    <StyledContentLine>Role: Pharmacy Technician</StyledContentLine>
                    <StyledSubHeader>Rexall Pharmaplus </StyledSubHeader>
                    <StyledContentLine>Waterloo, Ontario</StyledContentLine>
                    <StyledContentLine>September 2014 - May 2015</StyledContentLine>
                    <StyledContentLine>October 2012 - May 2014</StyledContentLine>
                    <StyledContentLine>Role: Pharmacy Technician</StyledContentLine>
                    <StyledSubHeader>Uniprix</StyledSubHeader>
                    <StyledContentLine>Lasalle, Quebec</StyledContentLine>
                    <StyledContentLine>June 2015 - December 2015</StyledContentLine>
                    <StyledContentLine>May 2014 - September 2014</StyledContentLine>
                    <StyledContentLine>September 2011 - July 2012</StyledContentLine>
                    <StyledContentLine>Role: Pharmacy Technician</StyledContentLine>
                    <StyledHeader>Other Skills</StyledHeader>
                    <StyledContentLine style={{margin:'10px 0'}}>Speak fluent French, English, Russian and intermediate Spanish</StyledContentLine>
                </StyledResumeWrapper>
            </StyledResumeContainer>)}
    </PortfolioContext.Consumer>
)}

export default Resume;