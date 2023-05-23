import { CommonStyleProps } from "../types";
export interface BoxProps extends CommonStyleProps, CustomProps {}

interface CustomProps {
  placeholder?: string;
}
