import { FormHTMLAttributes } from "react";
import { CommonStyleProps } from "../types";

export interface FormProps
  extends CommonStyleProps,
    Omit<FormHTMLAttributes<HTMLFormElement>, "children" | "color"> {}
