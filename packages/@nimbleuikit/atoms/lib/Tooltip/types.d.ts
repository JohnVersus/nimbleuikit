import { BoxProps } from "../Box";
import { CSSProperties } from "react";
export interface TooltipProps extends Omit<BoxProps, "content"> {
    children: React.ReactNode;
    content: React.ReactNode;
    visible?: boolean;
    tipPosition?: "top" | "bottom" | "dynamic";
    tooltipBgColor?: CSSProperties["color"];
}
