import { Children, type ReactNode, isValidElement, cloneElement } from "react";

export interface SocialMediaIconBoxProps {
    children: ReactNode,
    size?: string,  // width and height of all childrens
    gap?: string
}

export interface SocialMediaIconProps {
    name: string;
    size?: string;
}

export function SocialMediaIconBox({
    children,
    size,
    gap
}: SocialMediaIconBoxProps) {
    // add "size" prop to all childrens (if childrens don't have special "size" prop)
    if (children && size)
        children = Children.map(children, (child: ReactNode) => {
            if (isValidElement<SocialMediaIconProps>(child)
                && !child.props.size)
                child = cloneElement(child, {
                    ...child.props,
                    size
                });

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
    size
}: SocialMediaIconProps) {
    const style: Record<string, any> = {}
    size && (style["width"] = size);
    size && (style["height"] = size);

    return (
        <div className="social-media-icon">
            <img
                src={`/social-media-icons/${name.toLowerCase()}.svg`}
                alt={name}
                title={name}
                style={style}
            />
        </div>
    );
}

