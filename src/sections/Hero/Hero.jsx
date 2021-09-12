import React, { useEffect, useState } from 'react'
import { PortfolioContext } from '../../App'
import Arrows from '../../components/arrows/arrows'
import { gsap, ScrollTrigger } from 'gsap/all'
import styled from 'styled-components'

const iconsOrangeBlue1 = [
    '/assets/icons/nodejs-yellow-1.png',
    '/assets/icons/react-blue-1.png',
    '/assets/icons/laravel-yellow-1.png',
]

export const StyledButton = styled.button`
border: none; 
cursor: pointer; 
padding: 5px; 
background: transparent; 
color: rgb(2 224 255); 
width: 50%; 
font-size: 1.2em;
`


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
            {({ winSize, refSectionHero, refSectionProjects, handleResume }) => (
                <div ref={refSectionHero} style={{ height: '100vh', display: 'relative' }}>
                    <img src="/assets/images/hero-pic-blue-orange-big.webp" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        background: 'rgba(0,0,0,0.8)',
                        borderRadius: 5,
                        height: 400
                    }}>

                        <h2 style={{
                            width: '80%',
                            margin: '20px auto',
                            padding: 20, fontSize:winSize === 1 ? '1.3em' : '1.5em', color: 'white', fontWeight: 100, textAlign: 'center', fontFamily: 'Quicksand',
                        }}>
                            Hey I'm Mourad! I design beautiful websites and build awesome apps
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(3, minmax(100px, 293px))`,
                            justifyContent: 'center',
                            gridGap: 25,
                            justifyItems: 'center',
                        }}>
                            <div style={{ position: 'absolute', top: '35%', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                                {iconsOrangeBlue1.map(p => (<img src={p} style={{
                                    height: winSize === 1 ? 100 : 130,
                                }} />
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)', height: 100, width: '100%' }}>
                            <StyledButton onClick={() => handleScroll(refSectionProjects)}>Contact Me</StyledButton>
                            <StyledButton style={{ color: 'rgb(232 191 65)' }} onClick={() => handleScroll(refSectionProjects)}>My Work</StyledButton>
                            <StyledButton onClick={() => handleResume(true)}>Resume</StyledButton>
                        </div>
                    </div>
                    <Arrows />

                </div>)}
        </PortfolioContext.Consumer>
    )
}

export default Hero;