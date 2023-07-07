import { ButtonHTMLAttributes } from "react";
import { CommonStyleProps } from "../types";

export interface ButtonProps
  extends CommonStyleProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color"> {
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
