export interface TwoDashProps {
    width: string,
    height?: string
}

export function TwoDash({
    width, height
}: TwoDashProps) {
    let style: Record<string, any> = { width };

    if (height)
        style = {
            ...style,
            height
        };

    return (
        <div
            className="dash two-dash"
            style={style}
        >
            <div></div>
        </div>
    );
}
