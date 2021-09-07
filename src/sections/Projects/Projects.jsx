import React, { useEffect, useState } from 'react'
import { PortfolioContext } from '../../App';
import {
    StyledButtonContainer,
    StyledCard,
    StyledCardTitle,
    StyledCheckMark,
    StyledDesktopImage,
    StyledFeature,
    StyledFeatureContainer,
    StyledFeaturesContainer,
    StyledMainContainer,
    StyledMainHeader,
    StyledMobileImage,
    StyledProjectContainer,
    StyledTechItem,
    StyledTechStackContainer,
    StyledButton,
    StyledArrowContainerLeft,
    StyledArrowContainerRight,
} from './styles';

import Carousel from '../../components/caroussel/carousel'
import Arrows from '../../components/arrows/arrows';
import { ScrollTrigger } from 'gsap/all'
import styled from 'styled-components';

const projects = [
    {
        title: 'E-learning Platform', stack: ['React', 'NodeJS', 'MongoDB', 'AWS S3'],
        features: [
            'SocketIO',
            'Redux/Redux Forms',
            'Multi-level Authentication',
            'Credit Card Payments',
            'Coinbase Commerce',

            'server-side validation',
            'front-end validation',
            'xss input filtering',
            // 'Redis'
        ],
        features2: ['Google Authentication', 'GraphQL', 'Sagas', 'Push Notifications via Webpush Api', 'Material Design', 'Ckeditor Wysiwyg', 'Chat'],
        mobileImage: '/assets/images/boukacademy-mobile.png', desktopImage: '/assets/images/boukacademy-desktop.png'
    },
    { title: 'Blog CMS', stack: ['React', 'Laravel', 'MySQL', 'AWS S3'], features2: [], features: ['Real-time updates', 'Infinitly scalable file uploads', 'Material Design', 'TinyMCE'], mobileImage: '/assets/images/blogcms-mobile.png', desktopImage: '/assets/images/blogcms-desktop.png' },
    { title: 'Travel Blog', stack: ['React'], features2: [],
     features: ['Real-time updates', 'GSAP', 'E-mail Notifications','Comments','Newsletter','SVG Animation on Scroll'], 
     mobileImage: '/assets/images/hitching-horizons-mobile.png', desktopImage: '/assets/images/hitching-horizons-desktop.png' },
];

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

    console.log('winsize in projects', winSize)

    const Projects = projects.map(pr => (

        <StyledCard winSize={winSize}>
            <StyledCardTitle>{pr.title}</StyledCardTitle>
            <StyledDesktopImage src={pr.desktopImage} />
            <StyledMobileImage src={pr.mobileImage} style={{ objectFit: 'cover', width: 100, top: '45%', right: '5%', transform: 'translateY(-45%)', position: 'absolute' }} />
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
                <StyledButton >Demo</StyledButton>
                <StyledButton >Code</StyledButton>
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

const StyledFeaturesColumn = styled.div`
display: flex; 
justify-content: ${props => props.isItemToRight ? 'space-evenly' : 'flex-start'};
 padding: 0 5px;
`