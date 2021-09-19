import React, { useEffect } from 'react'
import { PortfolioContext } from '../../App'
import Arrows from '../../components/arrows/arrows'
import { gsap, ScrollTrigger } from 'gsap/all'
import {
    StyledButton,
    ContentContainer,
    MainContainer,
    StyledHeroImage,
    StyledButtonsContainer,
    StyledIcon,
    StyledIconWrapper,
    StyledIconsContainer,
    StyledSummary} from './styles';

const iconsOrangeBlue1 = [
    '/assets/icons/nodejs-yellow-1.png',
    '/assets/icons/react-blue-1.png',
    '/assets/icons/laravel-yellow-1.png',
]

const Hero = ({ refSectionHero: reference }) => {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: reference.current,
            start: "top top",
            scrub: 0.5,
            snap: true,
            pin: false,

        });
    }, [reference]);

    const handleScroll = (ref) => {
        if (ref.current) {
            gsap.to(window, { duration: 2, scrollTo: ref.current });
        }
    };

    return (
        <PortfolioContext.Consumer>
            {({ winSize, refSectionHero, refSectionProjects, handleResume, refSectionContact }) => (
                <MainContainer ref={refSectionHero}>
                    <StyledHeroImage src="/assets/images/hero-pic-blue-orange-big.webp" />
                    <ContentContainer>
                        <StyledSummary winSize={winSize}>
                            Hey I'm Mourad! I design beautiful websites and build awesome apps
                        </StyledSummary>
                        <StyledIconsContainer>
                            <StyledIconWrapper>
                                {iconsOrangeBlue1.map(p => (<StyledIcon src={p} winSize={winSize}/>
                                ))}
                            </StyledIconWrapper>
                        </StyledIconsContainer>
                        <StyledButtonsContainer>
                            <StyledButton onClick={() => handleScroll(refSectionContact)}>Contact Me</StyledButton>
                            <StyledButton style={{ color: 'rgb(232 191 65)' }} onClick={() => handleScroll(refSectionProjects)}>My Work</StyledButton>
                            <StyledButton onClick={() => handleResume(true)}>Resume</StyledButton>
                        </StyledButtonsContainer>
                    </ContentContainer>
                    <Arrows onClick={() => handleScroll(refSectionProjects)}/>
                </MainContainer>)}
        </PortfolioContext.Consumer>
    )
}

export default Hero;