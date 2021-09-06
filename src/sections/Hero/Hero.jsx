import React from 'react'
import styled from 'styled-components'
import { PortfolioContext } from '../../App'


const icons = [
    '/assets/icons/react.png',
    '/assets/icons/nodejs.png',
    '/assets/icons/laravel.png',
]

const iconsGreen1 = [
    '/assets/icons/react-green-1.png',
    '/assets/icons/nodejs-green-1.png',
    '/assets/icons/laravel-green-1.png',
]

const iconsGreen2 = [
    '/assets/icons/react-green-2.png',
    '/assets/icons/nodejs-green-2.png',
    '/assets/icons/laravel-green-2.png',
]

const iconsOrangeBlue1 = [
    '/assets/icons/nodejs-yellow-1.png',
    '/assets/icons/react-blue-1.png',
    '/assets/icons/laravel-yellow-1.png',
]

const StyledArrowsPath = styled.path`
stroke: #2994D1;
fill: transparent;
stroke-width: 1px;  
animation: arrow 2s infinite;
-webkit-animation: arrow 2s infinite;

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}
`

const StyledArrows = styled.svg`
width: 60px;
height: 72px;
position: absolute;
left: 50%;
margin-left: -30px;
bottom: 20px;
`

const Hero = () => {
    return (
        <PortfolioContext.Consumer>
            {({ winSize,refSectionHero }) => (
                <div ref={refSectionHero} style={{ height: '100vh', display: 'relative' }}>
                    <img src="/assets/images/hero-pic-blue-orange-big.jpg" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    <div style={{
                        // display: 'flex', flexWrap: 'wrap' 
                        display: 'grid',
                        gridTemplateColumns: `repeat(3, minmax(100px, 293px))`,
                        justifyContent: 'center',
                        gridGap: 25,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        background: 'rgba(0,0,0,0.8)',
                        borderRadius: 5,
                        justifyItems: 'center',
                        height: 400,
                    }}>
                        <h2 style={{
                            width: '100%',
                            //  background: 'rgba(0,0,0,0.8)',
                            padding: 20, fontSize: '1.8em', color: 'white', fontWeight: 100, textAlign: 'center', fontFamily: 'Quicksand', position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)'
                        }}>
                            Hey I'm Mourad! I design beautiful websites and build awesome apps
                        </h2>
                        <div style={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                            {iconsOrangeBlue1.map(p => (<img src={p} style={{
                                // flex:winSize === 1 ? '1 0 97%' : winSize === 2 ? '1 0 48%' : '1 0 32%',
                                // margin: 5,
                                height: winSize === 1 ? 100 : 130,
                                // backgroundColor: 'green',
                            }} />
                            ))}
                        </div>
                    </div>
                    <StyledArrows>
                        <StyledArrowsPath style={{ animationDelay: '-1s' }} d="M0 0 L30 32 L60 0"></StyledArrowsPath>
                        <StyledArrowsPath style={{ animationDelay: '-0.5s' }} d="M0 20 L30 52 L60 20"></StyledArrowsPath>
                        <StyledArrowsPath style={{ animationDelay: '0s' }} d="M0 40 L30 72 L60 40"></StyledArrowsPath>
                    </StyledArrows>
                </div>)}
        </PortfolioContext.Consumer>
    )
}

export default Hero;