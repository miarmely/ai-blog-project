import "./Sidebar.css";
import Logo from "./Logo";
import type { Setter } from "../../models/types";
import { TwoDash } from "../partner/miar/miar-dash/TwoDash";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import { GeneralInfo } from "./GeneralInfo";
import { SocialMediaIcon, SocialMediaIconBox } from "../partner/SocialMediaIcon";

interface SidebarProps {
    logoImgSrc: string,
    logoText?: string,
    setIsSidebarOpen: Setter<boolean>
}

export default function Sidebar({
    logoImgSrc,
    logoText,
    setIsSidebarOpen
}: SidebarProps
) {
    return (
        <div id="main-sidebar">
            <div className="curtain"></div>

            <aside>
                <Logo
                    logoImgSrc={logoImgSrc}
                    logoText={logoText}
                    setIsSidebarOpen={setIsSidebarOpen}
                />

                <div className="about-us">
                    <p >
                        Welcome to <strong>Miar News**</strong>, where innovation meets curiosity.
                        Explore the latest breakthroughs in artificial intelligence,
                        discover emerging technologies, and uncover the stories shaping our digital future.
                        From expert insights to AI-powered perspectives, we bring you fresh ideas,
                        inspiring discoveries, and the knowledge to stay one step ahead.
                    </p>
                </div>

                <div className="get-in-touch">
                    <div>
                        <h2>Get In Touch</h2>
                        <TwoDash width="170px" />
                    </div>

                    <div className="general-info-box">
                        <GeneralInfo
                            lucideIcon={<MapPinIcon />}
                            title="Addres"
                            content="06 Mymen KR, New York City"
                        />

                        <GeneralInfo
                            lucideIcon={<MailIcon />}
                            title="Email"
                            content="mert.akdemir.info@gmail.com"
                        />

                        <GeneralInfo
                            lucideIcon={<PhoneCallIcon />}
                            title="Phone"
                            content="+90599 999 99 99"
                        />
                    </div>
                </div>

                <SocialMediaIconBox
                    gap="10px"
                    size="25px"
                    padding="15px"
                    bgColor="#34a7ff"
                    iconColor="white"
                >
                    <SocialMediaIcon name="instagram" />
                    <SocialMediaIcon name="x" />
                    <SocialMediaIcon name="facebook" />
                    <SocialMediaIcon name="youtube" />
                    <SocialMediaIcon name="linkedin" />
                    <SocialMediaIcon name="pinterest" />
                </SocialMediaIconBox>
            </aside>
        </div>
    );
}