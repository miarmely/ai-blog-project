import './App.css'
import { useEffect, useRef, useState } from 'react';
import LatestNews from './components/latest-news/LatestNews'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { MoonIcon, SunIcon } from 'lucide-react';

function App() {
  const root = document.getElementById("root");
  const isFirstRender = useRef(true);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [logoImgSrc, setLogoImgSrc] = useState("/website-logos/miar-news-navbar.svg");
  const [darkModeIcon, setDarkModeIcon] = useState(<MoonIcon onClick={() => setIsDarkModeActive(prev => !prev)} />);

  // set "dark/white" mode
  useEffect(() => {
    // pass "first rendering"
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    else {
      // dark mode
      if (isDarkModeActive) {
        root?.classList.add("dark");

        setLogoImgSrc("/website-logos/miar-news-navbar-dark.svg");
        setDarkModeIcon(<SunIcon onClick={() => setIsDarkModeActive(prev => !prev)} />)
      }

      // white mode
      else {
        root?.classList.remove("dark");

        setLogoImgSrc("/website-logos/miar-news-navbar.svg");
        setDarkModeIcon(<MoonIcon onClick={() => setIsDarkModeActive(prev => !prev)} />)
      }
    }
  }, [isDarkModeActive])

  return (
    <>
      <LatestNews />

      <div id="content">
        <Navbar
          logoImgSrc={logoImgSrc!}
          darkModeIcon={darkModeIcon!}
        />

        <div id='main-content'>
          <div>Hello</div>
          <div>World</div>
          <div>I Am Mert Akdemir.</div>
        </div>
      </div>

      {/* <Sidebar logoImgSrc={logoImgSrc} /> */}
    </>
  )
}

export default App
