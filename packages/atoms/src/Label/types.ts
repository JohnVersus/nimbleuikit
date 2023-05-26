import { LabelHTMLAttributes } from "react";
import { CommonStyleProps } from "../types";

export interface LabelProps
  extends CommonStyleProps,
    Omit<LabelHTMLAttributes<HTMLLabelElement>, "children" | "color"> {}
