export interface GeneralInfoProps {
    lucideIcon: React.JSX.Element,
    title: string
    content: string
}

export function GeneralInfo({
    lucideIcon,
    title,
    content
}: GeneralInfoProps
) {
    return (
        <div className="general-info">
            {lucideIcon}

            <div>
                <h3>{title}</h3>
                <span>{content}</span>
            </div>
        </div>
    );
}