import React, { useEffect, useState } from 'react'
import { PortfolioContext } from '../../App';
import {
    StyledButtonContainer,
    StyledCard,
    StyledCardTitle,
    StyledCheckMark,
    StyledDesktopOutline,
    StyledDesktopGif,
    StyledFeature,
    StyledFeatureContainer,
    StyledFeaturesContainer,
    StyledMainContainer,
    StyledMainHeader,
    StyledMobileOutline,
    StyledMobileGif,
    StyledProjectContainer,
    StyledTechItem,
    StyledTechStackContainer,
    StyledButton,
    StyledArrowContainerLeft,
    StyledArrowContainerRight,
    StyledFeaturesColumn,

} from './styles';

import Carousel from '../../components/caroussel/carousel'
import Arrows from '../../components/arrows/arrows';
import { ScrollTrigger } from 'gsap/all'
import { projects } from './projectData';

const ProjectsSection = ({ winSize, refSectionProjects: reference }) => {

    useEffect(() => {
        ScrollTrigger.create({
            trigger: reference.current,
            start: "top top",
            scrub: 0.5,
            snap: true,
            pin: false,

        });
    }, [reference])

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlide = (newValue) => {
        setCurrentSlide(newValue)
    }

    const Projects = projects.map(pr => (
        <StyledCard winSize={winSize}>
            <StyledCardTitle>{pr.title}</StyledCardTitle>
            <StyledDesktopGif src={pr.desktopGif} />
            <StyledDesktopOutline src="/assets/images/desktop-empty.png" />
            <StyledMobileGif src={pr.mobileGif} />
            <StyledMobileOutline src="/assets/images/mobile-empty.png" />
            <StyledTechStackContainer>
                {pr.stack.map(st => (
                    <StyledTechItem winSize={winSize}>{st}</StyledTechItem>
                ))}
            </StyledTechStackContainer>
            <StyledFeaturesContainer>
                {(pr.features).map((feature, i) => (
                    <StyledFeaturesColumn isItemToRight={!!pr.features2[i]}>
                        <StyledFeatureContainer key={feature}>
                            <StyledCheckMark src="/assets/icons/check-mark-circle-orange.png" />
                            <StyledFeature>{feature}</StyledFeature>
                        </StyledFeatureContainer>
                        {pr.features2[i] && <StyledFeatureContainer key={pr.features2[i]}>
                            <StyledCheckMark src="/assets/icons/check-mark-circle-orange.png" />
                            <StyledFeature>{pr.features2[i]}</StyledFeature>
                        </StyledFeatureContainer>}
                    </StyledFeaturesColumn>
                ))}
            </StyledFeaturesContainer>
            <StyledButtonContainer>
                <StyledButton href={pr.liveProjectLink} >Project</StyledButton>
                <StyledButton href={pr.codeLink} >Code</StyledButton>
            </StyledButtonContainer>
        </StyledCard>
    ))

    return (
        <PortfolioContext.Consumer>

            {({ refSectionProjects, winSize }) => (
                <StyledMainContainer ref={refSectionProjects}>
                    {winSize > 1 && <StyledMainHeader>Projects</StyledMainHeader>}
                    {(currentSlide > 0 && winSize === 1) && <StyledArrowContainerLeft><Arrows /></StyledArrowContainerLeft>}
                    {(currentSlide < 2 && winSize === 1) && <StyledArrowContainerRight><Arrows /></StyledArrowContainerRight>}
                    <StyledProjectContainer>

                        {winSize === 1 ? <Carousel onChangeSlide={(newValue) => handleSlide(newValue)} auto axis={'x'}
                            // widgets={[Dots, Buttons]}
                            className="custom-class">
                            {Projects}
                        </Carousel> : Projects}
                    </StyledProjectContainer>
                </StyledMainContainer>)}
        </PortfolioContext.Consumer>
    )
}

export default ProjectsSection;