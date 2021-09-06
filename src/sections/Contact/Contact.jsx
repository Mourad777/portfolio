import React from 'react'
import { PortfolioContext } from '../../App';

const Contact = () => {
    return (
        <PortfolioContext.Consumer>
            {({ winSize, refSectionContact }) => (
                <div ref={refSectionContact} style={{ height: '100vh', background: 'rgb(0,0,0)' }}>
                    <h1 style={{ margin: 0, color: 'white', fontWeight: 100, textAlign: 'center', fontFamily: 'Quicksand', fontSize: '3em' }}>Contact Me</h1>
                </div>)}
        </PortfolioContext.Consumer>
    )
}

export default Contact;