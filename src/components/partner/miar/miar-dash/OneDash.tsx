import "./Dash.css";

export interface OneDashProps {
    width?: string
}

export function OneDash({
    width
}: OneDashProps) {
    return (
        <div
            className="dash one-dash"
            style={width ?
                { width }
                : {}  // add default values from css
            }
        >
        </div>
    );
}
