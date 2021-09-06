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
} from './styles';

const projects = [
    {
        title: 'E-learning Platform', stack: ['React', 'NodeJS', 'MongoDB', 'AWS S3'],
        features: [
            'SocketIO',
            'Redux/Redux Forms',
            'Multi-level Authentication',
            'Credit Card Payments',
            'Coinbase Commerce',
            'Redis'],
        features2: ['Google Authentication', 'GraphQL', 'Sagas', 'Push Notifications via Webpush Api', 'Material Design', 'Ckeditor Wysiwyg', 'Chat'],
        mobileImage: '/assets/images/boukacademy-mobile.png', desktopImage: '/assets/images/boukacademy-desktop.png'
    },
    { title: 'Blog CMS', stack: ['React', 'Laravel', 'MySQL', 'AWS S3'], features: ['Real-time updates', 'Infinitly scalable file uploads', 'Material Design', 'TinyMCE'], mobileImage: '/assets/images/blogcms-mobile.png', desktopImage: '/assets/images/blogcms-desktop.png' },
    { title: 'Travel Blog', stack: ['React'], features: ['Real-time updates', 'GSAP', 'E-mail Notifications'], mobileImage: '/assets/images/hitching-horizons-mobile.png', desktopImage: '/assets/images/hitching-horizons-desktop.png' },
];

const Hero = () => {

    return (
        <PortfolioContext.Consumer>
            {({ refSectionProjects }) => (
                <StyledMainContainer ref={refSectionProjects}>
                    <StyledMainHeader>Projects</StyledMainHeader>
                    <StyledProjectContainer>
                        {projects.map(pr => (
                            <StyledCard>
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
                                        <StyledFeatureContainer>
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
                        ))}
                    </StyledProjectContainer>
                </StyledMainContainer>)}
        </PortfolioContext.Consumer>
    )
}

export default Hero;