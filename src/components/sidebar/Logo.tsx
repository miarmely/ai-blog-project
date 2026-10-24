import { Menu as MenuIcon } from "lucide-react";
import type { Setter } from "../../models/types";

interface LogoProps {
    logoImgSrc: string,
    logoText?: string,
    setIsSidebarOpen: Setter<boolean>
}

export default function Logo({
    logoImgSrc,
    logoText,
    setIsSidebarOpen
}: LogoProps) {
    return (
        <div className='bar-logo-box'>
            <div>
                <img src={logoImgSrc} />

                {logoText && <h2>{logoText}</h2>}
            </div>

            <MenuIcon
                className="sidebar-icon"
                onClick={() => setIsSidebarOpen(prev => !prev)} />
        </div>
    );
}