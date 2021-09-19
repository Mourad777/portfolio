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
    StyledResumeWrapper,
    StyledSkillsContainer,
    StyledSkillsColumn,
    StyledBullet,
    StyledSecondaryContainer,
    StyledSecondaryContainerColumn,
    StyledLink,
} from './styles';
import { ScrollTrigger } from 'gsap/all'

const Resume = () => {
    useEffect(() => {
        const Alltrigger = ScrollTrigger.getAll();
        for (let i = 0; i < Alltrigger.length; i++) {
            Alltrigger[i].kill(true)
        }
    }, [])
    return (
        <PortfolioContext.Consumer>
            {({ handleResume, winSize }) => (
                <StyledResumeContainer>
                    <StyledReturnButton onClick={() => handleResume(false)}>Portfolio</StyledReturnButton>
                    <StyledBasicInfo style={{ marginTop: 10 }}>Mourad Boukabache</StyledBasicInfo>
                    <StyledLink href="https://github.com/Mourad777" style={{textAlign:'center',fontSize:'0.9em',marginBottom:5}}>Github</StyledLink>
                    <StyledBasicInfo>(514)562-9249</StyledBasicInfo>
                    <StyledBasicInfo>mourad777b@gmail.com</StyledBasicInfo>

                    <StyledResumeWrapper winSize={winSize}>
                        <StyledHeader>Professional Summary</StyledHeader>
                        <StyledObjective>Highly motivated, self-taught developer seeking to
                            launch a career building web applications and services.
                            Familiar with developement
                            and deployment process for many web-based technologies.
                        </StyledObjective>
                        <StyledHeader>Skills</StyledHeader>
                        <StyledSkillsContainer>
                            <StyledSkillsColumn>
                                <StyledBullet>React</StyledBullet>
                                <StyledBullet>NodeJS</StyledBullet>
                                <StyledBullet>MongoDB</StyledBullet>
                                <StyledBullet>AWS S3</StyledBullet>
                            </StyledSkillsColumn>
                            <StyledSkillsColumn>
                                <StyledBullet>Laravel</StyledBullet>
                                <StyledBullet>MySQL</StyledBullet>
                                <StyledBullet>API Design</StyledBullet>
                                <StyledBullet>Git</StyledBullet>
                            </StyledSkillsColumn>
                        </StyledSkillsContainer>

                        <StyledHeader>Education</StyledHeader>
                        <StyledSecondaryContainer winSize={winSize}>
                            <StyledSecondaryContainerColumn>
                                <StyledSubHeader>University of Waterloo</StyledSubHeader>
                                <StyledContentLine>Sept 2012 - April 2015</StyledContentLine>
                                <StyledContentLine>200 University avenue West, Waterloo Ontario</StyledContentLine>
                                <StyledContentLine>Degree: Biomedical Science</StyledContentLine>
                                <StyledContentLine>Graduated in June 2015</StyledContentLine>
                            </StyledSecondaryContainerColumn>
                            <StyledSecondaryContainerColumn>
                                <StyledSubHeader>Concordia University</StyledSubHeader>
                                <StyledContentLine>Sept 2011 - April 2012</StyledContentLine>
                                <StyledContentLine>7141 rue Sherbrooke O, Montreal Quebec</StyledContentLine>
                                <StyledContentLine>Program: Biology </StyledContentLine>
                            </StyledSecondaryContainerColumn>
                        </StyledSecondaryContainer>

                        <StyledHeader>Projects</StyledHeader>
                        <StyledSecondaryContainer winSize={winSize}>
                            <StyledSecondaryContainerColumn>
                                <StyledSubHeader>E-Learning Platform</StyledSubHeader>
                                <StyledContentLine>Built with the <b>MERN stack</b></StyledContentLine>
                                <StyledContentLine>Manage students, grades, lessons, assignments</StyledContentLine>
                                <StyledContentLine>Includes real-time updates and payment setup</StyledContentLine>
                                <StyledLink href="http://boukacademy.com">Live Demo</StyledLink>
                                <StyledLink href="https://github.com/Mourad777/e-learn-front">Code front-end</StyledLink>
                                <StyledLink href="https://github.com/Mourad777/boukacademy">Code back-end</StyledLink>
                            </StyledSecondaryContainerColumn>
                            <StyledSecondaryContainerColumn>
                                <StyledSubHeader>Blog/Blog CMS</StyledSubHeader>
                                <StyledContentLine>Built with <b> Laravel and React</b></StyledContentLine>
                                <StyledContentLine>Manages blog content (videos, photos, and posts) and categorize it by country, tags, and categories using a relational database, dynamic world map updates in real-time</StyledContentLine>
                                <StyledLink href="https://travel-blog-admin-demo.netlify.app/">Live Demo</StyledLink>
                                <StyledLink href=" https://github.com/Mourad777/travel-blog-admin">Code cms</StyledLink>
                                <StyledLink href="https://github.com/Mourad777/travel-blog-public">Code blog</StyledLink>
                                <StyledLink href="https://github.com/Mourad777/travel-blog">Code back-end</StyledLink>
                            </StyledSecondaryContainerColumn>
                        </StyledSecondaryContainer>

                        <StyledHeader>Work Experience</StyledHeader>
                        <StyledSecondaryContainer winSize={winSize}>
                            <StyledSecondaryContainerColumn>
                                <StyledSubHeader>RXJOB</StyledSubHeader>
                                <StyledContentLine>Northern Indigenous Villages Hospitals/Clinics</StyledContentLine>
                                <StyledContentLine>July 2019 - Present</StyledContentLine>
                                <StyledContentLine>Role: Pharmacy Technician</StyledContentLine>
                                <StyledSubHeader>Rexall Pharmaplus </StyledSubHeader>
                                <StyledContentLine>Waterloo, Ontario</StyledContentLine>
                                <StyledContentLine>September 2014 - May 2015</StyledContentLine>
                                <StyledContentLine>October 2012 - May 2014</StyledContentLine>
                                <StyledContentLine>Role: Pharmacy Technician</StyledContentLine>
                            </StyledSecondaryContainerColumn>
                            <StyledSecondaryContainerColumn>
                                <StyledSubHeader>Pharmaprix </StyledSubHeader>
                                <StyledContentLine>Montreal, Quebec</StyledContentLine>
                                <StyledContentLine>December 2015 -July 2019</StyledContentLine>
                                <StyledContentLine>Role: Pharmacy Technician</StyledContentLine>
                                <StyledSubHeader>Uniprix</StyledSubHeader>
                                <StyledContentLine>Lasalle, Quebec</StyledContentLine>
                                <StyledContentLine>June 2015 - December 2015</StyledContentLine>
                                <StyledContentLine>May 2014 - September 2014</StyledContentLine>
                                <StyledContentLine>September 2011 - July 2012</StyledContentLine>
                                <StyledContentLine>Role: Pharmacy Technician</StyledContentLine>
                            </StyledSecondaryContainerColumn>
                        </StyledSecondaryContainer>
                        <StyledHeader>Languages Spoken</StyledHeader>
                        <StyledContentLine style={{ margin: '10px 0' }}>Fluent French, English, Russian and intermediate Spanish</StyledContentLine>
                    </StyledResumeWrapper>
                </StyledResumeContainer>)}
        </PortfolioContext.Consumer>
    )
}

export default Resume;