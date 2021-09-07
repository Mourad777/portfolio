import React, { useEffect, useState } from 'react'
import { PortfolioContext } from '../../App';
// import { Swiper, SwiperSlide } from "swiper/react";
// import {Swiper,SwiperSlide} from "swiper/react/swiper-react"
// import {SwiperSlide} from "swiper/react/swiper-slide"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
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
} from './styles';
import { SwiperSlide, Swiper } from 'swiper/react';

import Carousel from '../../components/caroussel/carousel'
import Arrows from '../../components/arrows/arrows';
import { ScrollTrigger } from 'gsap/all'
const projects = [
    {
        title: 'E-learning Platform', stack: ['React', 'NodeJS', 'MongoDB', 'AWS S3'],
        features: [
            'SocketIO',
            'Redux/Redux Forms',
            'Multi-level Authentication',
            'Credit Card Payments',
            'Coinbase Commerce',
            // 'Redis'
        ],
        features2: ['Google Authentication', 'GraphQL', 'Sagas', 'Push Notifications via Webpush Api', 'Material Design', 'Ckeditor Wysiwyg', 'Chat'],
        mobileImage: '/assets/images/boukacademy-mobile.png', desktopImage: '/assets/images/boukacademy-desktop.png'
    },
    { title: 'Blog CMS', stack: ['React', 'Laravel', 'MySQL', 'AWS S3'], features: ['Real-time updates', 'Infinitly scalable file uploads', 'Material Design', 'TinyMCE'], mobileImage: '/assets/images/blogcms-mobile.png', desktopImage: '/assets/images/blogcms-desktop.png' },
    { title: 'Travel Blog', stack: ['React'], features: ['Real-time updates', 'GSAP', 'E-mail Notifications'], mobileImage: '/assets/images/hitching-horizons-mobile.png', desktopImage: '/assets/images/hitching-horizons-desktop.png' },
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
                    <StyledTechItem>{st}</StyledTechItem>
                ))}
            </StyledTechStackContainer>
            <StyledFeaturesContainer>
                {(pr.features).map(feature => (
                    <StyledFeatureContainer key={feature}>
                        <StyledCheckMark src="/assets/icons/check-mark-circle-orange.png" />
                        <StyledFeature>{feature}</StyledFeature>
                    </StyledFeatureContainer>
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
                    {currentSlide > 0 && <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%) rotate(90deg)', left: 0, zIndex: 1 }}><Arrows /></div>}
                    {currentSlide < 2 && <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', right: 0, zIndex: 1 }}><Arrows /></div>}
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