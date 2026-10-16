import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { OneDash } from "../lib/miar-dash/OneDash";
import "./Navbar.css";

interface SocialMediaIconBoxProps {
    children: ReactNode,
    scale?: number,  // scale of all childrens
    gap?: string
}

interface SocialMediaIconProps {
    name: string,
    scale?: number,
}

function SocialMediaIconBox({
    children,
    scale,
    gap
}: SocialMediaIconBoxProps) {
    // add "size" prop to all childrens (if childrens don't have special "size" prop)
    if (children && scale)
        children = Children.map(children, (child: ReactNode) => {
            if (isValidElement<SocialMediaIconProps>(child)
                && !child.props.scale)
                child = cloneElement(child, {
                    ...child.props,
                    scale
                })

            return child;
        })

    return (
        <div
            className="social-media-icon-box"
            style={gap ?
                { gap }
                : {}  // add default values from css
            }
        >
            {children}
        </div >
    );
}

function SocialMediaIcon({
    name,
    scale
}: SocialMediaIconProps) {
    return (
        <div className="social-media-icon">
            <img
                src={`/social-media-icons/${name.toLowerCase()}.svg`}
                alt={name}
                style={scale ?
                    { scale }
                    : {}  // add default values from css
                }
            />
        </div>
    );
}

export default function Navbar() {
    return (
        <nav id="main-navbar">
            <div className='nav-left'>
                <h2>LATEST NEWS</h2>
                <h4>Incredible events happened on AI side.</h4>
            </div>

            <div className='nav-right'>
                <div className="info-text">
                    <span>Follow Us</span>
                    <OneDash width="70px" />
                </div>

                <SocialMediaIconBox scale={1.1}>
                    <SocialMediaIcon name="instagram" />
                    <SocialMediaIcon name="x" />
                    <SocialMediaIcon name="facebook" />
                    <SocialMediaIcon name="youtube" />
                    <SocialMediaIcon name="pinterest" />
                    <SocialMediaIcon name="linkedin" />
                </SocialMediaIconBox>
            </div>
        </nav >
    );
}