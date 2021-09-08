import React from "react";
import styled from "styled-components";
import "./navbar.module.css";
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import { PortfolioContext } from "../../../App";
// import { primaryColor } from "../../pages/utility";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const primaryColor = 'rgb(232 191 65)';
const NavText = styled.span`
    font-size: 1em;
    opacity: 0;
    color:${primaryColor};
    transition: all 0.3s ease-in;
    font-family:Quicksand;
`;

const Bullet = styled.div`
    height: 10px;
    width: 10px;
    margin-right: 30px;
    background-color: ${primaryColor};
    border-radius: 50%;

    transition: all 0.3s ease-in;
    transform:${props => props.active ? 'scale(1.2)' : 'scale(1)'};
    position:absolute;
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0;
    margin: auto;
    opacity:${props => props.active ? '1' : '0.7'};
`;

const BulletWrapper = styled.div`
    height: 20px !important;
    width: 20px !important;
    position:relative;
    margin-right:10px;
`;

const LinkWrapper = styled.div`
    display: flex;
    justify-content: start;
    min-width: 200px;

    align-items: center;
    &:hover ${NavText} {
        opacity: 0.7;
    }
    &:hover ${Bullet} {
        transform:scale(1.8);
    }
    color:${props => props.index % 2 === 0 ? 'black' : 'white'};
`;


export default ({ componentReferences }) => {
    const links = [
        { name: "Welcome", id: "hero-section", ref: componentReferences.welcome },
        { name: "Projects", id: "projects-section", ref: componentReferences.projects },
        { name: "Contact", id: "contact-section", ref: componentReferences.contact }
    ].filter(item => item);

    const handleScroll = (ref) => {
        if(ref.current){
            gsap.to(window, { duration: 2, scrollTo: ref.current });
        }
    }

    return (
        <PortfolioContext.Consumer>
            {({ scrollSection, mainContainerRef }) => (
                <div style={{ position: "fixed", top: "50%", right: -98, zIndex: 10 }}>
                    <ul
                        style={{
                            display: "flex",
                            listStyle: "none",
                            justifyContent: "space-around",
                            flexDirection: "column"
                        }}
                    >
                        {links.map((link, i) => (
                            <li key={link.name} onClick={() => handleScroll(link.ref, mainContainerRef)} style={{ cursor: "pointer" }}>
                                <LinkWrapper index={i}>
                                    <BulletWrapper>
                                        <Bullet active={i === 0 && scrollSection <= 1 ? true : scrollSection === i + 1} section={scrollSection} />
                                    </BulletWrapper>
                                    <NavText section={scrollSection} className="textLink">{link.name}</NavText>
                                </LinkWrapper>
                            </li>
                        ))}
                    </ul>
                </div>)}
        </PortfolioContext.Consumer>
    )
};
