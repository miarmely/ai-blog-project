import Logo from "./Logo";
import { BarMenu, BarMenuBox } from "../miar/miar-bar-menu/BarMenu";
import "./css/Sidebar.css";

interface SidebarProps {
    logoImgSrc: string,
    logoText?: string
}

export default function Sidebar({
    logoImgSrc,
    logoText
}: SidebarProps
) {
    return (
        <aside className="bar-box">
            <Logo
                logoImgSrc={logoImgSrc}
                logoText={logoText}
            />

            <BarMenuBox boxType="vertical">
                <BarMenu name="Home 1" href="#" />
                <BarMenu name="Home 2" href="#" />
                <BarMenu name="Home 3" href="#" />

                <BarMenu name="Home 3" href="#">
                    <BarMenu name="Home 3.1" href="#" />
                    <BarMenu name="Home 3.2" href="#" />
                </BarMenu>
            </BarMenuBox>
        </aside>
    );
}