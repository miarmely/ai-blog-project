import './App.css'
import { useEffect, useRef, useState } from 'react';
import LatestNews from './components/latest-news/LatestNews'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { MoonIcon, SunIcon } from 'lucide-react';
import type { Setter } from './models/types';

function setDarkWhiteMode(
  root: HTMLElement,
  isDarkModeActive: boolean,
  setIsDarkModeActive: Setter<boolean>,
  setLogoImgSrc: Setter<string>,
  setDarkModeIcon: Setter<React.JSX.Element>
) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    // pass "first rendering"
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    else {
      // set to dark mode
      if (isDarkModeActive) {
        root?.classList.add("dark");

        setLogoImgSrc("/website-logos/miar-news-navbar-dark.svg");
        setDarkModeIcon(<SunIcon onClick={() => setIsDarkModeActive(prev => !prev)} />)
      }

      // set to white mode
      else {
        root?.classList.remove("dark");

        setLogoImgSrc("/website-logos/miar-news-navbar.svg");
        setDarkModeIcon(<MoonIcon onClick={() => setIsDarkModeActive(prev => !prev)} />)
      }
    }
  }, [isDarkModeActive])
}

function setSidebar(
  root: HTMLElement,
  isSidebarOpen: boolean
) {
  const isFirstRender = useRef(true);

  // set "opening/closing" of sidebar
  useEffect(() => {
    const sidebar: HTMLElement = root.querySelector("#main-sidebar")!;
    const sidebarIcons = root.querySelectorAll(".sidebar-icon");

    // "first rendering" moment (runs once)
    if (isFirstRender.current) {
      // add events to sidebar
      {
        const curtain: HTMLElement = sidebar.querySelector(".curtain")!
        const aside: HTMLElement = sidebar.querySelector("aside")!;

        // "1st": hide "aside" when "closing animation" of "aside" finished
        aside.addEventListener("animationend", (event) => {
          // if "closing" animation has finished
          if (sidebar.classList.contains("closing"))
            aside.style.setProperty("display", "none");
        });

        // "2nd": remove "opening/closing" classes when "closing animation" of "curtain" finished
        curtain.addEventListener("animationend", (event) => {
          // enable "sidebar icons"
          sidebarIcons.forEach(icon =>
            icon.setAttribute("aria-disabled", "false"));

          // if "closing" animation has finished
          if (sidebar.classList.contains("closing")) {
            sidebar.classList.remove("opening", "closing");

            // reset processes at "1st" stage
            aside.style.removeProperty("display");
          }
        });
      }

      isFirstRender.current = false;
      return;
    }

    else {
      // disable "sidebar icons" (on navbar and sidebar)
      sidebarIcons.forEach(icon =>
        icon.setAttribute("aria-disabled", "true"));

      // open sidebar
      if (isSidebarOpen)
        sidebar.classList.add("opening");

      // close sidebar
      else
        sidebar.classList.add("closing");
    }
  }, [isSidebarOpen])
}

function App() {
  const root = document.getElementById("root")!;
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [logoImgSrc, setLogoImgSrc] = useState("/website-logos/miar-news-navbar.svg");
  const [darkModeIcon, setDarkModeIcon] = useState(<MoonIcon onClick={() => setIsDarkModeActive(prev => !prev)} />);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  setDarkWhiteMode(root, isDarkModeActive, setIsDarkModeActive, setLogoImgSrc, setDarkModeIcon);
  setSidebar(root, isSidebarOpen);

  return (
    <>
      <LatestNews />

      <div id="content">
        <Navbar
          logoImgSrc={logoImgSrc!}
          darkModeIcon={darkModeIcon!}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div id='main-content'>
          <div>Hello</div>
          <div>World</div>
          <div>I Am Mert Akdemir.</div>
        </div>
      </div>

      <Sidebar
        logoImgSrc={logoImgSrc}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  )
}

export default App
