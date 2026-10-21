import "./Navbar.css"
import { MenuIcon, SearchIcon } from "lucide-react";
import { BarMenu, BarMenuBox } from "../miar/miar-bar-menu/BarMenu";
import React from "react";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface NavbarProps {
    logoImgSrc: string,
    darkModeIcon: React.JSX.Element,
}

export default function Navbar({
    logoImgSrc,
    darkModeIcon
}: NavbarProps) {
    const toggleSidebar = (event: React.MouseEvent): void => {

    };

    return (
        <nav id="main-navbar">
            <div className="logo">
                <img src={logoImgSrc} />
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
                {darkModeIcon}
                <SearchIcon />
                <button className="btn-signin" type="button">Sign In</button>
                <MenuIcon />
            </div>
        </nav>
    );
}