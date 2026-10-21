import { Menu as MenuIcon } from "lucide-react";

interface LogoProps {
    logoImgSrc: string,
    logoText?: string
}

export default function Logo({
    logoImgSrc,
    logoText
}: LogoProps) {
    return (
        <div className='bar-logo-box'>
            <div>
                <img src={logoImgSrc} />

                {logoText && <h2>{logoText}</h2>}
            </div>

            <MenuIcon />
        </div>
    );
}