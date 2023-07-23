import { TextareaHTMLAttributes } from "react";
import { CommonStyleProps } from "../types";
export interface TextAreaProps extends CommonStyleProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "children" | "color"> {
}
