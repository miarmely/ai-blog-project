import "./Navbar.css"
import { BadgeInfoIcon, CircleQuestionMarkIcon, InfoIcon, MenuIcon, SearchIcon } from "lucide-react";
import { BarMenu, BarMenuBox } from "../partner/miar/miar-bar-menu/BarMenu";
import React from "react";
import type { Setter } from "../../models/types";

export interface NavbarProps {
    logoImgSrc: string,
    darkModeIcon: React.JSX.Element,
    setIsSidebarOpen: Setter<boolean>
}

export default function Navbar({
    logoImgSrc,
    darkModeIcon,
    setIsSidebarOpen
}: NavbarProps) {
    return (
        <nav id="main-navbar">
            <div className="logo">
                <img src={logoImgSrc} />
            </div>

            <BarMenuBox boxType="vertical" >
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

                <BadgeInfoIcon
                    className="sidebar-icon"
                    onClick={() => setIsSidebarOpen(prev => !prev)}
                />
            </div>
        </nav>
    );
}