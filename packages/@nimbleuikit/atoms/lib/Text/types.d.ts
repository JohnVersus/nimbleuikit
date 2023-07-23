import { HTMLAttributes } from "react";
import { CommonStyleProps } from "../types";
export interface TextProps extends CommonStyleProps, Omit<HTMLAttributes<HTMLElement>, "children" | "color"> {
}
