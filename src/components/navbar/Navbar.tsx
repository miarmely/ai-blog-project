import { MenuIcon, MoonIcon, SearchIcon } from "lucide-react";
import "./Navbar.css"
import { BarMenu, BarMenuBox } from "../miar/miar-bar-menu/BarMenu";

export function Navbar() {
    var logoImg = document.getElementById("root")?.classList.contains("dark") ?
        <img src="/website-logos/miar-news-navbar-dark.svg" />
        : <img src="/website-logos/miar-news-navbar.svg" />

    return (
        <nav id="main-navbar">
            <div className="logo">
                {logoImg}
            </div>

            <BarMenuBox boxType="horizontal">
                <BarMenu name="Home" href="#">
                    <BarMenu name="Home 1" href="#">
                        <BarMenu name="Home 2" href="#"></BarMenu>

                        <BarMenu name="Home 3" href="#">
                            <BarMenu name="Home 2" href="#"></BarMenu>
                            <BarMenu name="Home 3" href="#"></BarMenu>
                        </BarMenu>

                        <BarMenu name="Home 3" href="#">
                            <BarMenu name="Home 2" href="#"></BarMenu>
                            <BarMenu name="Home 3" href="#"></BarMenu>
                        </BarMenu>

                        <BarMenu name="Home 3" href="#"></BarMenu>
                    </BarMenu>

                    <BarMenu name="Home 2" href="#"></BarMenu>
                    <BarMenu name="Home 3" href="#"></BarMenu>
                </BarMenu>

                <BarMenu name="Pages" href="#"></BarMenu>

                <BarMenu name="Categories" href="#">
                    <BarMenu name="Home 1" href="#">
                        <BarMenu name="Home 2" href="#"></BarMenu>

                        <BarMenu name="Home 3" href="#">
                            <BarMenu name="Home 2" href="#"></BarMenu>
                            <BarMenu name="Home 3" href="#"></BarMenu>
                        </BarMenu>

                        <BarMenu name="Home 3" href="#">
                            <BarMenu name="Home 2" href="#"></BarMenu>
                            <BarMenu name="Home 3" href="#"></BarMenu>
                        </BarMenu>

                        <BarMenu name="Home 3" href="#"></BarMenu>
                    </BarMenu>

                    <BarMenu name="Home 2" href="#"></BarMenu>
                    <BarMenu name="Home 3" href="#"></BarMenu>
                </BarMenu>

                <BarMenu name="Blog" href="#"></BarMenu>
                <BarMenu name="Posts" href="#"></BarMenu>
            </BarMenuBox>

            <div className="search">
                <MoonIcon />
                <SearchIcon />
                <button type="button">Sign In</button>
                <MenuIcon />
            </div>
        </nav>
    );
}