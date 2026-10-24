import "./Content.css";
import type { Setter } from "../../models/types";
import Navbar from "./Navbar";

export interface ContentProps {
    logoImgSrc: string
    darkModeIcon: React.JSX.Element
    setIsSidebarOpen: Setter<boolean>
}

export default function Content({
    logoImgSrc,
    darkModeIcon,
    setIsSidebarOpen
}: ContentProps) {
    return (
        <div id="content">
            <Navbar
                logoImgSrc={logoImgSrc!}
                darkModeIcon={darkModeIcon!}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            <div id='main-content'>

            </div>
        </div>
    );
}