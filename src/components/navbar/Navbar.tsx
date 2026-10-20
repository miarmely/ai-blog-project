import "./Navbar.css"
import { MenuIcon, MoonIcon, SearchIcon, SunIcon, type LucideIcon } from "lucide-react";
import { BarMenu, BarMenuBox } from "../miar/miar-bar-menu/BarMenu";
import React, { useEffect, useState, type ReactNode } from "react";

export interface NavbarProps {
    logoImgSrc: string,
    setLogoImgSrc: React.Dispatch<React.SetStateAction<string>>,
    isDarkModeActive: boolean,
    setIsDarkModeActive: React.Dispatch<React.SetStateAction<boolean>>
    darkModeIcon: React.JSX.Element,
    setDarkModeIcon: React.Dispatch<React.SetStateAction<React.JSX.Element>>
}

export default function Navbar({
    logoImgSrc,
    setLogoImgSrc,
    isDarkModeActive,
    setIsDarkModeActive,
    darkModeIcon,
    setDarkModeIcon
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