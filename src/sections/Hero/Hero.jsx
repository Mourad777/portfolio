import React, {useEffect} from 'react'
import { PortfolioContext } from '../../App'
import Arrows from '../../components/arrows/arrows'
import { ScrollTrigger } from 'gsap/all'

const iconsOrangeBlue1 = [
    '/assets/icons/nodejs-yellow-1.png',
    '/assets/icons/react-blue-1.png',
    '/assets/icons/laravel-yellow-1.png',
]


const Hero = ({refSectionHero:reference}) => {

    useEffect(() => {
        ScrollTrigger.create({
            trigger: reference.current,
            start: "top top",
            scrub: 0.5,
            snap: true,
            pin: false,

        });
    }, [reference])
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
                    <Arrows />

                </div>)}
        </PortfolioContext.Consumer>
    )
}

export default Hero;