import { type ReactNode } from "react";
import { Menu as AccordionMenuIcon, type LucideIcon, icons } from "lucide-react"
import { CaseConverter } from "../../../libs/miar-converter";
import "./BarMenu.css";

//////////////// INTERFACES ////////////////

export interface BarMenuBoxProps {
    children?: ReactNode,
    boxType: "vertical" | "horizontal"
}

export interface MenuProps {
    name: string,
    href: string,
    iconClass?: string,  // for "dynamic" icon assignment. (example icon-names stores on db.)
    LucideIcon?: LucideIcon,  // for "static" icon assigment.
    children?: ReactNode
}

interface SingleMenuProps {
    name: string,
    href: string,
    Icon?: LucideIcon
}

interface AccordionMenuProps {
    name: string,
    href: string,
    Icon?: LucideIcon,
    submenus: ReactNode
}

//////////////// PRIVATE FUNCS ////////////////

function getLucideIcon(iconClass?: string): LucideIcon | undefined {
    if (!iconClass) return;

    const normalizedName = iconClass.replace(/^lucide-/, "");
    const componentName = CaseConverter.KebabCaseToPascalCase(normalizedName);

    return icons[componentName as keyof typeof icons];
}

//////////////// COMPONENTS ////////////////

export function BarMenuBox({
    children,
    boxType
}: BarMenuBoxProps) {
    const menus = children;

    return (
        <div className={'bar-menu-box' + (boxType === "horizontal" ? " horizontal" : "")}>
            {menus}
        </div>
    );
}

export function BarMenu({
    name,
    href,
    iconClass,
    LucideIcon,
    children
}: MenuProps) {
    const submenus = children;
    const Icon = LucideIcon || getLucideIcon(iconClass);

    return (!submenus ?
        <SingleMenu
            name={name}
            href={href}
            Icon={Icon}
        />
        : <AccordionMenu
            name={name}
            href={href}
            Icon={Icon}
            submenus={submenus}
        />
    );
}

function SingleMenu({
    name,
    href,
    Icon
}: SingleMenuProps) {
    const handleSingleMenuClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        // const a = event.currentTarget.children[0];

        // setMenuPath && setMenuPath(a.textContent);
    };

    return (
        <ul className="bar-menu-container">
            <li
                className="bar-menu bar-single-menu"
                onClick={handleSingleMenuClick}
            >
                <div>
                    <div>
                        {Icon && <Icon />}
                        <a href={href}>{name}</a>
                    </div>
                </div>
            </li>
        </ul>
    );
}

function AccordionMenu({
    name,
    href,
    Icon,  // icon of menu
    submenus
}: AccordionMenuProps) {
    const handleAccordionMenuClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        //#region open submenus of accordion menu
        const barMenu = event.currentTarget;
        const submenuContainer = barMenu.nextElementSibling as HTMLElement;

        // add/remove "submenu-opened" class
        if (submenuContainer?.classList.contains("submenu-opened")) {
            submenuContainer?.classList.remove("submenu-opened");
            submenuContainer?.classList.add("submenu-closed");
        }
        else
            submenuContainer?.classList.add("submenu-opened");

        // add "opening/closing" animation
        const trgAnimationName = submenuContainer?.classList.contains("submenu-opened") ?
            "submenu-opening"
            : "submenu-closing";

        submenuContainer?.style.setProperty("animation-name", trgAnimationName);
        //#endregion
    }

    return (
        <ul className="bar-menu-container">
            <li
                className="bar-menu bar-accordion-menu"
                onClick={handleAccordionMenuClick}
            >
                <div>
                    <div>
                        {Icon && <Icon />}
                        <a href={href}>{name}</a>
                    </div>
                </div>

                <AccordionMenuIcon />
            </li>

            <li className="bar-submenu-container">
                {submenus}
            </li>
        </ul>
    );
}