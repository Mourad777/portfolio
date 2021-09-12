import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import { getWindowSizeInteger } from './utility';
import { createContext, Fragment, useRef } from 'react';
import _ from "lodash";
import { useEffect, useState, } from 'react';
import Navigation from './sections/Hero/Navigation/Navigation';
import Resume from './sections/Resume/Resume';

export const PortfolioContext = createContext({});

function App() {

  const [winSize, setWinSize] = useState(getWindowSizeInteger(window.innerWidth));
  const [scrollSection, setScrollSection] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(1);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const refSectionHero = useRef(null)
  const refSectionProjects = useRef(null)
  const refSectionContact = useRef(null)
  const mainContainerRef = useRef(null)

  useEffect(() => {
    setScrollSection(1)
    if (window.scrollY > window.innerHeight * 1 - window.innerHeight / 2) {
      setScrollSection(2)
    }
    if (window.scrollY > window.innerHeight * 1 + window.innerHeight / 2) {
      setScrollSection(3)
    }
  }, [scrollPosition, winSize])

  useEffect(() => {
    document.addEventListener("scroll", _.throttle(handleScroll, 200, {}));
    window.addEventListener("resize", _.throttle(getWindowSize, 200), { passive: true });
    return () => {
      window.removeEventListener("resize", getWindowSize)
    }
  }, []);


  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  const getWindowSize = () => {
    const windowSizeWidthInt = getWindowSizeInteger(window.innerWidth);

    setWinSize(windowSizeWidthInt);
  };

  const handleResume = (value) => {
    setIsResumeOpen(value)
  };

  return (
    <div ref={mainContainerRef} className="App">
      <PortfolioContext.Provider value={{
        winSize,
        scrollPosition,
        scrollSection,
        refSectionHero,
        refSectionProjects,
        refSectionContact,
        mainContainerRef,
        handleResume
      }}>
        {isResumeOpen ? <Resume /> :
          <Fragment>
            {winSize > 1 && (<Navigation componentReferences={{ welcome: refSectionHero, projects: refSectionProjects, contact: refSectionContact }} />
            )}
            <Hero refSectionHero={refSectionHero} />
            <Projects refSectionProjects={refSectionProjects} winSize={winSize} />
            <Contact />
          </Fragment>
        }
      </PortfolioContext.Provider>
    </div>
  );
}

export default App;
