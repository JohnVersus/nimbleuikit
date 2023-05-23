import { CommonStyleProps } from "../types";
export interface ButtonProps extends CommonStyleProps {
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
