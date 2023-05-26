import { HTMLAttributes } from "react";
import { CommonStyleProps } from "../types";
export interface BoxProps
  extends CommonStyleProps,
    Omit<HTMLAttributes<HTMLDivElement>, "children" | "color"> {}
