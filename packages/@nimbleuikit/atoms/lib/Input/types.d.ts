import { CommonStyleProps } from "../types";
export interface InputProps extends CommonStyleProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "color" | "height" | "children" | "size" | "width"> {
}
