import { addItemToObjIfExists } from "../../libs/miar-lib";
import "./SocialMediaIcon.css";
import { Children, type ReactNode, isValidElement, cloneElement } from "react";

export interface SocialMediaIconBoxProps {
    children: ReactNode;
    gap?: string;

    // for all childrens
    size?: string;  // width and height
    padding?: string;
    bgColor?: string;
    borderRadius?: string;
    iconColor?: "black" | "white";
}

export interface SocialMediaIconProps {
    name: string;
    size?: string;
    padding?: string;
    bgColor?: string;
    borderRadius?: string;
    iconColor?: "black" | "white"
}

export function SocialMediaIconBox({
    children,
    gap,
    size,
    padding,
    bgColor,
    borderRadius,
    iconColor
}: SocialMediaIconBoxProps) {
    // add "missing" props to all childrens
    if (children)
        children = Children.map(children, (child: ReactNode) => {
            if (isValidElement<SocialMediaIconProps>(child)) {
                var oldProps = child.props;
                var newProps = oldProps;

                if (size && !oldProps.size)
                    newProps = { ...newProps, size };

                if (padding && !oldProps.padding)
                    newProps = { ...newProps, padding };

                if (bgColor && !oldProps.bgColor)
                    newProps = { ...newProps, bgColor };

                if (borderRadius && !oldProps.borderRadius)
                    newProps = { ...newProps, borderRadius };

                if (iconColor && !oldProps.iconColor)
                    newProps = { ...newProps, iconColor };

                child = cloneElement(child, newProps);
            }

            return child;
        });


    // set style of "box"
    let style: Record<string, any> = {};
    gap && (style["gap"] = gap);

    return (
        <div
            className="social-media-icon-box"
            style={style}
        >
            {children}
        </div>
    );
}

export function SocialMediaIcon({
    name,
    size,
    padding,
    bgColor,
    borderRadius,
    iconColor
}: SocialMediaIconProps) {
    const aStyle: Record<string, any> = {};
    addItemToObjIfExists(aStyle, "width", size);
    addItemToObjIfExists(aStyle, "height", size);
    addItemToObjIfExists(aStyle, "padding", padding);
    addItemToObjIfExists(aStyle, "backgroundColor", bgColor);
    addItemToObjIfExists(aStyle, "borderRadius", borderRadius);

    const imgStyle: Record<string, any> = {};
    iconColor && iconColor === "white" && (imgStyle["filter"] = "invert(1)")

    return (
        <div className="social-media-icon">
            <a
                href="#"
                style={aStyle}
            >
                <img
                    src={`/social-media-icons/${name.toLowerCase()}.svg`}
                    alt={name}
                    title={name}
                    style={imgStyle}
                />
            </a>
        </div>
    );
}

